import React, {
  useEffect,
  useRef,
} from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [data-cursor]";

const CursorFollower = () => {
  const lensRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const lens = lensRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    if (
      !lens ||
      !dot ||
      !label ||
      !finePointer.matches
    ) {
      return undefined;
    }

    let pointerX =
      window.innerWidth / 2;

    let pointerY =
      window.innerHeight / 2;

    let lensX = pointerX;
    let lensY = pointerY;
    let previousX = pointerX;
    let previousY = pointerY;
    let velocityX = 0;
    let velocityY = 0;
    let frameId = 0;
    let hasMoved = false;
    let isPressed = false;

    const setVisibility = (visible) => {
      lens.dataset.visible =
        String(visible);

      dot.dataset.visible =
        String(visible);
    };

    const resetState = () => {
      lens.dataset.state = "default";
      label.textContent = "";
    };

    const getInteractiveElement = (
      target,
    ) => {
      if (!(target instanceof Element)) {
        return null;
      }

      return target.closest(
        INTERACTIVE_SELECTOR,
      );
    };

    const updateState = (element) => {
      if (!element) {
        resetState();
        return;
      }

      const cursorType =
        element.dataset.cursor;

      if (cursorType === "view") {
        lens.dataset.state = "view";

        label.textContent =
          element.dataset.cursorLabel ||
          "VIEW";

        return;
      }

      lens.dataset.state =
        "interactive";

      label.textContent = "";
    };

    const handlePointerMove = (
      event,
    ) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (!hasMoved) {
        lensX = pointerX;
        lensY = pointerY;
        previousX = pointerX;
        previousY = pointerY;
        hasMoved = true;
      }

      velocityX =
        pointerX - previousX;

      velocityY =
        pointerY - previousY;

      previousX = pointerX;
      previousY = pointerY;

      dot.style.transform = `
        translate3d(
          ${pointerX - 3}px,
          ${pointerY - 3}px,
          0
        )
      `;

      setVisibility(true);
    };

    const handlePointerOver = (
      event,
    ) => {
      const currentElement =
        getInteractiveElement(
          event.target,
        );

      const previousElement =
        getInteractiveElement(
          event.relatedTarget,
        );

      if (
        currentElement === previousElement
      ) {
        return;
      }

      updateState(currentElement);
    };

    const handlePointerOut = (
      event,
    ) => {
      const currentElement =
        getInteractiveElement(
          event.target,
        );

      const nextElement =
        getInteractiveElement(
          event.relatedTarget,
        );

      if (
        currentElement === nextElement
      ) {
        return;
      }

      updateState(nextElement);
    };

    const handlePointerDown = () => {
      isPressed = true;

      lens.dataset.pressed = "true";
      dot.dataset.pressed = "true";
    };

    const handlePointerUp = () => {
      isPressed = false;

      lens.dataset.pressed = "false";
      dot.dataset.pressed = "false";
    };

    const hideCursor = () => {
      setVisibility(false);
      handlePointerUp();
      resetState();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hideCursor();
      }
    };

    const animate = () => {
      if (hasMoved) {
        lensX +=
          (pointerX - lensX) * 0.17;

        lensY +=
          (pointerY - lensY) * 0.17;

        const speed = Math.min(
          Math.hypot(
            velocityX,
            velocityY,
          ),
          36,
        );

        const stretch = speed / 210;

        const state =
          lens.dataset.state ||
          "default";

        let size = 38;

        if (state === "interactive") {
          size = 52;
        }

        if (state === "view") {
          size = 88;
        }

        const pressScale = isPressed
          ? 0.86
          : 1;

        const scaleX =
          (1 + stretch) * pressScale;

        const scaleY =
          (1 - stretch * 0.28) *
          pressScale;

        lens.style.width = `${size}px`;
        lens.style.height = `${size}px`;

        lens.style.transform = `
          translate3d(
            ${lensX - size / 2}px,
            ${lensY - size / 2}px,
            0
          )
          scale(
            ${scaleX},
            ${scaleY}
          )
        `;

        velocityX *= 0.86;
        velocityY *= 0.86;
      }

      frameId =
        window.requestAnimationFrame(
          animate,
        );
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      },
    );

    document.addEventListener(
      "pointerover",
      handlePointerOver,
    );

    document.addEventListener(
      "pointerout",
      handlePointerOut,
    );

    document.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    document.addEventListener(
      "pointerup",
      handlePointerUp,
    );

    document.documentElement.addEventListener(
      "mouseleave",
      hideCursor,
    );

    window.addEventListener(
      "blur",
      hideCursor,
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    frameId =
      window.requestAnimationFrame(
        animate,
      );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver,
      );

      document.removeEventListener(
        "pointerout",
        handlePointerOut,
      );

      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );

      document.removeEventListener(
        "pointerup",
        handlePointerUp,
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        hideCursor,
      );

      window.removeEventListener(
        "blur",
        hideCursor,
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );

      window.cancelAnimationFrame(
        frameId,
      );
    };
  }, []);

  return (
    <>
      <div
        ref={lensRef}
        className="ax-cursor-lens"
        data-state="default"
        data-visible="false"
        data-pressed="false"
        aria-hidden="true"
      >
        <span className="ax-cursor-highlight" />

        <span
          ref={labelRef}
          className="ax-cursor-label"
        />
      </div>

      <div
        ref={dotRef}
        className="ax-cursor-dot"
        data-visible="false"
        data-pressed="false"
        aria-hidden="true"
      />
    </>
  );
};

export default CursorFollower;