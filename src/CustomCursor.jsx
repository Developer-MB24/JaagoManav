import React, { useEffect, useRef } from "react";

/**
 * Custom cursor with:
 * - Inner dot locked to the mouse
 * - Outer ring that eases/trails and centers when velocity ~ 0
 * - Hides on touch devices
 */
export default function CustomCursor({
  innerSize = 10,
  outerSize = 48,
  outerBorder = 3,
  colorInner = "#138808", // brown fill (like your image)
  colorOuter = "#FF9933", // orange ring
  zIndex = 9999,
  trailEase = 0.15, // ring follow speed (0.05 slower … 0.3 faster)
  snapVelocity = 0.15, // when speed below this, ring snaps to dot
  showOnMobile = false, // keep false to avoid weirdness on touch
}) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const animRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const last = useRef({ x: 0, y: 0, t: 0 });

  // helpers
  const lerp = (a, b, n) => a + (b - a) * n;

  useEffect(() => {
    // Ignore touch devices unless forced
    const hasTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    if (hasTouch && !showOnMobile) {
      dotRef.current && (dotRef.current.style.display = "none");
      ringRef.current && (ringRef.current.style.display = "none");
      return;
    }

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onDown = () => {
      // slight scale on click
      if (ringRef.current) ringRef.current.style.transform += " scale(0.92)";
    };
    const onUp = () => {
      if (!ringRef.current) return;
      // remove scale while keeping translate
      const tr = ringRef.current.style.transform;
      ringRef.current.style.transform = tr.replace(/scale\\([^)]*\\)/, "");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // initial positions
    dot.current.x = mouse.current.x;
    dot.current.y = mouse.current.y;
    ring.current.x = mouse.current.x;
    ring.current.y = mouse.current.y;
    last.current = {
      x: mouse.current.x,
      y: mouse.current.y,
      t: performance.now(),
    };

    const loop = (t) => {
      // velocity estimate
      const dt = Math.max(1, t - last.current.t);
      const dx = mouse.current.x - last.current.x;
      const dy = mouse.current.y - last.current.y;
      const v = Math.hypot(dx, dy) / dt; // px per ms (tiny when stopped)

      last.current.x = mouse.current.x;
      last.current.y = mouse.current.y;
      last.current.t = t;

      // dot sticks to cursor
      dot.current.x = mouse.current.x;
      dot.current.y = mouse.current.y;

      // ring trails cursor
      const ease = trailEase;
      ring.current.x = lerp(ring.current.x, mouse.current.x, ease);
      ring.current.y = lerp(ring.current.y, mouse.current.y, ease);

      // when nearly stopped, snap/center ring
      if (v < snapVelocity) {
        ring.current.x = lerp(ring.current.x, dot.current.x, 0.35);
        ring.current.y = lerp(ring.current.y, dot.current.y, 0.35);
      }

      // paint
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${
          dot.current.x - innerSize / 2
        }px, ${dot.current.y - innerSize / 2}px)`;
      }
      if (ringRef.current) {
        // preserve any scale from mousedown
        const prev = ringRef.current.style.transform;
        const scale = (prev.match(/scale\\([^)]*\\)/) || [""])[0];
        ringRef.current.style.transform = `translate(${
          ring.current.x - outerSize / 2
        }px, ${ring.current.y - outerSize / 2}px) ${scale}`;
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [outerSize, innerSize, trailEase, snapVelocity, showOnMobile]);

  // basic styles
  const common = `pointer-events-none fixed top-0 left-0 will-change-transform`;
  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className={`${common} rounded-full`}
        style={{
          width: innerSize,
          height: innerSize,
          background: colorInner,
          zIndex,
          mixBlendMode: "normal",
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className={`${common} rounded-full`}
        style={{
          width: outerSize,
          height: outerSize,
          border: `${outerBorder}px solid ${colorOuter}`,
          zIndex,
          mixBlendMode: "normal",
          transition: "box-shadow 240ms ease",
          boxShadow: "0 0 0 0 rgba(0,0,0,0)",
        }}
      />
    </>
  );
}
