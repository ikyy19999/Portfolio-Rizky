import React, { useEffect, useRef } from "react";

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const mix = (start, end, progress) => start + (end - start) * progress;

const easeInOut = (progress) =>
  progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - (-2 * progress + 2) ** 3 / 2;

const seededNoise = (index) => {
  const value = Math.sin(index * 12.9898 + 78.233) * 43758.5453;

  return value - Math.floor(value);
};

const createShapeData = (count) => {
  const sphere = new Float32Array(count * 3);
  const bridge = new Float32Array(count * 3);
  const network = new Float32Array(count * 3);
  const columns = Math.ceil(Math.sqrt(count * 1.35));
  const rows = Math.ceil(count / columns);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let index = 0; index < count; index += 1) {
    const offset = index * 3;
    const normalizedIndex = count === 1 ? 0 : index / (count - 1);
    const noise = seededNoise(index);
    const sphereY = 1 - ((index + 0.5) / count) * 2;
    const sphereRadius = Math.sqrt(1 - sphereY * sphereY);
    const sphereAngle = goldenAngle * index;
    const radius = 1.72 + (noise - 0.5) * 0.2;

    sphere[offset] = Math.cos(sphereAngle) * sphereRadius * radius;
    sphere[offset + 1] = sphereY * radius;
    sphere[offset + 2] = Math.sin(sphereAngle) * sphereRadius * radius;

    const bridgeSide = index % 2 === 0 ? -1 : 1;
    const bridgeAngle = normalizedIndex * Math.PI * 5 + bridgeSide * 0.34;
    const bridgeRadius = 0.72 + noise * 0.18;

    bridge[offset] = (normalizedIndex - 0.5) * 4.5;
    bridge[offset + 1] =
      Math.sin(bridgeAngle) * bridgeRadius + bridgeSide * 0.22;
    bridge[offset + 2] = Math.cos(bridgeAngle) * bridgeRadius;

    const column = index % columns;
    const row = Math.floor(index / columns);

    network[offset] = (column - (columns - 1) / 2) * 0.39;
    network[offset + 1] = ((rows - 1) / 2 - row) * 0.39;
    network[offset + 2] =
      Math.sin(column * 0.72 + row * 0.48) * 0.27 + (noise - 0.5) * 0.1;
  }

  return {
    sphere,
    bridge,
    network,
    columns,
  };
};

const createEdgePairs = (count, columns) => {
  const pairs = [];

  for (let index = 0; index < count; index += 1) {
    if (index % 2 === 0 && (index + 1) % columns !== 0 && index + 1 < count) {
      pairs.push([index, index + 1]);
    }

    if (index % 3 === 0 && index + columns < count) {
      pairs.push([index, index + columns]);
    }
  }

  return pairs;
};

const ImmersiveScene = () => {
  const sceneHostRef = useRef(null);

  useEffect(() => {
    const sceneHost = sceneHostRef.current;

    if (!sceneHost) return undefined;

    let disposed = false;
    let destroyScene = () => {};
    let cachedBounds = null;
    let sceneInRange = false;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const getSceneBounds = () => {
      const hero = document.querySelector("#home");
      const skills = document.querySelector("#skills");

      if (!hero || !skills) return null;

      const scrollTop = window.scrollY;
      const heroTop = hero.getBoundingClientRect().top + scrollTop;
      const skillsTop = skills.getBoundingClientRect().top + scrollTop;
      const skillsBottom = skillsTop + skills.offsetHeight;

      return {
        start: heroTop,
        end: Math.max(skillsBottom - window.innerHeight * 0.28, heroTop + 1),
        visibleEnd: skillsBottom,
      };
    };

    const updateVisibility = () => {
      if (!cachedBounds) {
        cachedBounds = getSceneBounds();
      }

      if (!cachedBounds) return 0;

      const scrollTop = window.scrollY;
      const inRange =
        scrollTop + window.innerHeight > cachedBounds.start &&
        scrollTop < cachedBounds.visibleEnd;
      const fadeDistance = Math.max(window.innerHeight * 0.72, 1);
      const fadeProgress = clamp(
        (cachedBounds.visibleEnd - scrollTop) / fadeDistance,
      );

      sceneInRange = inRange;
      sceneHost.classList.toggle("is-in-range", inRange);
      sceneHost.style.setProperty("--scene-visibility", fadeProgress);

      return clamp(
        (scrollTop - cachedBounds.start) /
          Math.max(cachedBounds.end - cachedBounds.start, 1),
      );
    };

    const handleLayoutChange = () => {
      cachedBounds = getSceneBounds();
      updateVisibility();
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", handleLayoutChange, { passive: true });

    const observedSections = ["#home", "#about", "#skills"]
      .map((selector) => document.querySelector(selector))
      .filter(Boolean);
    const resizeObserver =
      typeof ResizeObserver === "function"
        ? new ResizeObserver(handleLayoutChange)
        : null;

    observedSections.forEach((section) => resizeObserver?.observe(section));
    handleLayoutChange();

    if (reducedMotionQuery.matches) {
      sceneHost.classList.add("is-static");

      return () => {
        disposed = true;
        resizeObserver?.disconnect();
        window.removeEventListener("scroll", updateVisibility);
        window.removeEventListener("resize", handleLayoutChange);
      };
    }

    const initializeScene = async () => {
      const THREE = await import("three");

      if (disposed) return;

      let renderer;

      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: window.innerWidth > 767,
          powerPreference: "high-performance",
        });
      } catch {
        sceneHost.classList.add("is-static");
        return;
      }

      const isCompact = () => window.innerWidth <= 767;
      const pointCount = isCompact() ? 48 : 104;
      const shapeData = createShapeData(pointCount);
      const edgePairs = createEdgePairs(pointCount, shapeData.columns);
      const displayPositions = shapeData.sphere.slice();
      const linePositions = new Float32Array(edgePairs.length * 6);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      const spatialGroup = new THREE.Group();
      const ringGroup = new THREE.Group();

      camera.position.set(0, 0, 8);
      scene.add(spatialGroup);
      spatialGroup.add(ringGroup);

      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.setAttribute("aria-hidden", "true");
      sceneHost.appendChild(renderer.domElement);

      const pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(displayPositions, 3),
      );

      const pointsMaterial = new THREE.PointsMaterial({
        color: 0x0071e3,
        size: isCompact() ? 0.038 : 0.044,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.56,
        depthWrite: false,
      });
      const points = new THREE.Points(pointsGeometry, pointsMaterial);

      const linesGeometry = new THREE.BufferGeometry();
      linesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions, 3),
      );

      const linesMaterial = new THREE.LineBasicMaterial({
        color: 0x0071e3,
        transparent: true,
        opacity: 0.07,
        depthWrite: false,
      });
      const lines = new THREE.LineSegments(linesGeometry, linesMaterial);

      spatialGroup.add(lines, points);

      const ringMaterials = [];

      for (let ringIndex = 0; ringIndex < 2; ringIndex += 1) {
        const ringPositions = [];
        const segments = isCompact() ? 64 : 96;
        const radius = 2.08 + ringIndex * 0.2;

        for (let index = 0; index < segments; index += 1) {
          const angle = (index / segments) * Math.PI * 2;
          const wave = Math.sin(angle * (2 + ringIndex)) * 0.11;

          ringPositions.push(
            new THREE.Vector3(
              Math.cos(angle) * (radius + wave),
              Math.sin(angle) * (radius + wave),
              Math.sin(angle * 3 + ringIndex) * 0.12,
            ),
          );
        }

        const ringGeometry = new THREE.BufferGeometry().setFromPoints(
          ringPositions,
        );
        const ringMaterial = new THREE.LineBasicMaterial({
          color: 0x0071e3,
          transparent: true,
          opacity: 0.045 - ringIndex * 0.012,
          depthWrite: false,
        });
        const ring = new THREE.LineLoop(ringGeometry, ringMaterial);

        ring.rotation.x = ringIndex * 0.72;
        ring.rotation.y = ringIndex * 0.48;
        ringGroup.add(ring);
        ringMaterials.push(ringMaterial);
      }

      let animationFrame = 0;
      let targetProgress = updateVisibility();
      let currentProgress = targetProgress;
      let mouseX = 0;
      let mouseY = 0;
      let currentMouseX = 0;
      let currentMouseY = 0;
      let sceneActive = true;

      const updateThemeColors = () => {
        const rootStyles = window.getComputedStyle(document.documentElement);
        const accent =
          rootStyles.getPropertyValue("--accent").trim() || "#0071e3";
        const darkTheme = document.documentElement.dataset.theme === "dark";

        try {
          pointsMaterial.color.setStyle(accent);
          linesMaterial.color.setStyle(accent);
          ringMaterials.forEach((material) => material.color.setStyle(accent));
        } catch {
          pointsMaterial.color.set(0x0071e3);
          linesMaterial.color.set(0x0071e3);
          ringMaterials.forEach((material) => material.color.set(0x0071e3));
        }

        pointsMaterial.opacity = darkTheme ? 0.68 : 0.54;
        linesMaterial.opacity = darkTheme ? 0.1 : 0.065;
        ringMaterials.forEach((material, index) => {
          material.opacity = (darkTheme ? 0.065 : 0.04) - index * 0.012;
        });
      };

      const updateRendererSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.setPixelRatio(
          Math.min(window.devicePixelRatio || 1, isCompact() ? 1.25 : 1.75),
        );
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
        pointsMaterial.size = isCompact() ? 0.038 : 0.044;
      };

      const updateLinePositions = () => {
        edgePairs.forEach(([startIndex, endIndex], edgeIndex) => {
          const lineOffset = edgeIndex * 6;
          const startOffset = startIndex * 3;
          const endOffset = endIndex * 3;

          linePositions[lineOffset] = displayPositions[startOffset];
          linePositions[lineOffset + 1] = displayPositions[startOffset + 1];
          linePositions[lineOffset + 2] = displayPositions[startOffset + 2];
          linePositions[lineOffset + 3] = displayPositions[endOffset];
          linePositions[lineOffset + 4] = displayPositions[endOffset + 1];
          linePositions[lineOffset + 5] = displayPositions[endOffset + 2];
        });

        linesGeometry.attributes.position.needsUpdate = true;
      };

      const updateShapes = (progress) => {
        const firstStage = progress <= 0.5;
        const stageProgress = easeInOut(
          firstStage ? progress * 2 : (progress - 0.5) * 2,
        );
        const source = firstStage ? shapeData.sphere : shapeData.bridge;
        const destination = firstStage ? shapeData.bridge : shapeData.network;

        for (let index = 0; index < displayPositions.length; index += 1) {
          displayPositions[index] = mix(
            source[index],
            destination[index],
            stageProgress,
          );
        }

        pointsGeometry.attributes.position.needsUpdate = true;
        updateLinePositions();
      };

      const handleScroll = () => {
        targetProgress = updateVisibility();
      };

      const handlePointerMove = (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
      };

      const handleVisibilityChange = () => {
        sceneActive = !document.hidden;
      };

      const resizeScene = () => {
        handleLayoutChange();
        updateRendererSize();
      };

      const themeObserver = new MutationObserver(updateThemeColors);
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });

      updateThemeColors();
      updateRendererSize();
      updateShapes(currentProgress);

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", resizeScene, { passive: true });
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      document.addEventListener("visibilitychange", handleVisibilityChange);

      const renderFrame = (time) => {
        if (disposed) return;

        animationFrame = window.requestAnimationFrame(renderFrame);

        if (!sceneActive || !sceneInRange) return;

        currentProgress += (targetProgress - currentProgress) * 0.065;
        currentMouseX += (mouseX - currentMouseX) * 0.04;
        currentMouseY += (mouseY - currentMouseY) * 0.04;

        updateShapes(currentProgress);

        const compact = isCompact();
        const firstPath = easeInOut(clamp(currentProgress * 2));
        const secondPath = easeInOut(clamp((currentProgress - 0.5) * 2));
        const desktopX =
          currentProgress <= 0.5
            ? mix(2.4, 0, firstPath)
            : mix(0, 2.2, secondPath);
        const baseScale = compact ? 0.46 : 0.66;
        const breathingScale = 1 + Math.sin(currentProgress * Math.PI) * 0.045;

        spatialGroup.position.x = compact
          ? currentMouseX * 0.08
          : desktopX + currentMouseX * 0.16;
        spatialGroup.position.y =
          Math.sin(currentProgress * Math.PI * 2) * (compact ? 0.12 : 0.32) -
          currentMouseY * 0.12;
        spatialGroup.rotation.x =
          -0.18 + currentProgress * 0.72 - currentMouseY * 0.05;
        spatialGroup.rotation.y =
          time * 0.000055 +
          currentProgress * Math.PI * 1.35 +
          currentMouseX * 0.08;
        spatialGroup.rotation.z = Math.sin(currentProgress * Math.PI) * 0.16;
        spatialGroup.scale.setScalar(baseScale * breathingScale);

        ringGroup.rotation.x = time * 0.000045 + currentProgress * 0.7;
        ringGroup.rotation.y = time * -0.00006 + currentProgress * 1.1;
        ringGroup.scale.setScalar(1 + Math.sin(time * 0.00055) * 0.025);

        camera.position.z = mix(8, 7.55, Math.sin(currentProgress * Math.PI));
        renderer.render(scene, camera);
      };

      animationFrame = window.requestAnimationFrame(renderFrame);

      destroyScene = () => {
        window.cancelAnimationFrame(animationFrame);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", resizeScene);
        window.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
        themeObserver.disconnect();

        pointsGeometry.dispose();
        pointsMaterial.dispose();
        linesGeometry.dispose();
        linesMaterial.dispose();

        ringGroup.children.forEach((ring) => {
          ring.geometry.dispose();
          ring.material.dispose();
        });

        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    initializeScene().catch(() => {
      if (!disposed) {
        sceneHost.classList.add("is-static");
      }
    });

    return () => {
      disposed = true;
      destroyScene();
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", handleLayoutChange);
    };
  }, []);

  return (
    <div ref={sceneHostRef} className="immersive-scene" aria-hidden="true" />
  );
};

export default ImmersiveScene;
