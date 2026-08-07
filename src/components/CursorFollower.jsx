import React, { useEffect, useRef } from 'react'

const CursorFollower = () => {
    const followerRef = useRef(null)
    const dotRef = useRef(null)
    const labelRef = useRef(null)

    useEffect(() => {
        const follower = followerRef.current
        const dot = dotRef.current
        const label = labelRef.current

        if (!follower || !dot || !label) return

        let mouseX = 0
        let mouseY = 0

        let followerX = 0
        let followerY = 0

        let velocityX = 0
        let velocityY = 0

        let previousX = 0
        let previousY = 0

        let rotation = 0
        let targetRotation = 0

        let animationFrameId = null
        let hasMouseMoved = false

        const showCursor = () => {
            follower.style.opacity = '1'
            dot.style.opacity = '1'
        }

        const hideCursor = () => {
            follower.style.opacity = '0'
            dot.style.opacity = '0'
        }

        const handleMouseMove = (event) => {
            mouseX = event.clientX
            mouseY = event.clientY

            if (!hasMouseMoved) {
                followerX = mouseX
                followerY = mouseY
                previousX = mouseX
                previousY = mouseY
                hasMouseMoved = true
            }

            velocityX = mouseX - previousX
            velocityY = mouseY - previousY

            if (
                Math.abs(velocityX) > 0.1 ||
                Math.abs(velocityY) > 0.1
            ) {
                targetRotation =
                    Math.atan2(velocityY, velocityX) *
                    (180 / Math.PI)
            }

            previousX = mouseX
            previousY = mouseY

            dot.style.transform = `
                translate3d(
                    ${mouseX - 2.5}px,
                    ${mouseY - 2.5}px,
                    0
                )
            `

            showCursor()
        }

        const handleMouseOver = (event) => {
            const interactive = event.target.closest(
                'a, button, [data-cursor]'
            )

            if (!interactive) return

            const cursorType =
                interactive.getAttribute('data-cursor')

            if (cursorType === 'view') {
                follower.dataset.state = 'view'
                label.textContent = 'VIEW'
                return
            }

            follower.dataset.state = 'interactive'
            label.textContent = ''
        }

        const handleMouseOut = (event) => {
            const interactive = event.target.closest(
                'a, button, [data-cursor]'
            )

            if (!interactive) return

            follower.dataset.state = 'default'
            label.textContent = ''
        }

        const animate = () => {
            if (hasMouseMoved) {
                followerX +=
                    (mouseX - followerX) * 0.16

                followerY +=
                    (mouseY - followerY) * 0.16

                let rotationDifference =
                    targetRotation - rotation

                if (rotationDifference > 180) {
                    rotationDifference -= 360
                }

                if (rotationDifference < -180) {
                    rotationDifference += 360
                }

                rotation += rotationDifference * 0.08

                const speed = Math.min(
                    Math.sqrt(
                        velocityX * velocityX +
                        velocityY * velocityY
                    ),
                    35
                )

                const stretch = speed / 180

                const scaleX = 1 + stretch
                const scaleY = 1 - stretch * 0.3

                const state =
                    follower.dataset.state || 'default'

                let size = 46

                if (state === 'interactive') {
                    size = 56
                }

                if (state === 'view') {
                    size = 82
                }

                follower.style.width = `${size}px`
                follower.style.height = `${size}px`

                follower.style.transform = `
                    translate3d(
                        ${followerX - size / 2}px,
                        ${followerY - size / 2}px,
                        0
                    )
                    rotate(${rotation}deg)
                    scale(${scaleX}, ${scaleY})
                `

                velocityX *= 0.88
                velocityY *= 0.88
            }

            animationFrameId =
                requestAnimationFrame(animate)
        }

        window.addEventListener(
            'mousemove',
            handleMouseMove,
            { passive: true }
        )

        document.addEventListener(
            'mouseover',
            handleMouseOver
        )

        document.addEventListener(
            'mouseout',
            handleMouseOut
        )

        document.documentElement.addEventListener(
            'mouseleave',
            hideCursor
        )

        animationFrameId =
            requestAnimationFrame(animate)

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            )

            document.removeEventListener(
                'mouseover',
                handleMouseOver
            )

            document.removeEventListener(
                'mouseout',
                handleMouseOut
            )

            document.documentElement.removeEventListener(
                'mouseleave',
                hideCursor
            )

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [])

    return (
        <>
            <div
                ref={followerRef}
                data-state="default"
                className="cursor-spatial-lens"
                aria-hidden="true"
            >
                <span
                    className="
                        cursor-spatial-marker
                        cursor-spatial-marker-top
                    "
                />

                <span
                    className="
                        cursor-spatial-marker
                        cursor-spatial-marker-right
                    "
                />

                <span
                    className="
                        cursor-spatial-marker
                        cursor-spatial-marker-bottom
                    "
                />

                <span
                    className="
                        cursor-spatial-marker
                        cursor-spatial-marker-left
                    "
                />

                <span
                    ref={labelRef}
                    className="cursor-spatial-label"
                />
            </div>

            <div
                ref={dotRef}
                className="cursor-spatial-dot"
                aria-hidden="true"
            />
        </>
    )
}

export default CursorFollower