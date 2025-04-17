"use client";
import { useEffect, useRef } from "react";

interface BackgroundProps {
  children?: React.ReactNode;
}

const DOT_SPACING = 15;
const DOT_RADIUS = 2;
const HOVER_RADIUS = 100;

const Background = ({ children }: BackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const getCssVariableRGB = (name: string): string => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
      if (value.startsWith("rgb")) {
        return value.match(/\d+, *\d+, *\d+/)?.[0] || "255,255,255";
      }
      if (value.startsWith("#")) {
        const hex = value.replace("#", "");
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r},${g},${b}`;
      }
      return "255,255,255"; // fallback
    };

    const drawHighlights = (x: number, y: number) => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const baseColor = getCssVariableRGB("--secondary-foreground");

      const startX = Math.floor((x - HOVER_RADIUS) / DOT_SPACING) * DOT_SPACING;
      const endX = Math.ceil((x + HOVER_RADIUS) / DOT_SPACING) * DOT_SPACING;
      const startY = Math.floor((y - HOVER_RADIUS) / DOT_SPACING) * DOT_SPACING;
      const endY = Math.ceil((y + HOVER_RADIUS) / DOT_SPACING) * DOT_SPACING;

      for (let dx = startX; dx <= endX; dx += DOT_SPACING) {
        for (let dy = startY; dy <= endY; dy += DOT_SPACING) {
          const dotX = dx + DOT_SPACING / 2;
          const dotY = dy + DOT_SPACING / 2;
          const dist = Math.hypot(dotX - x, dotY - y);
          if (dist < HOVER_RADIUS) {
            const intensity = 1 - dist / HOVER_RADIUS;
            ctx.beginPath();
            ctx.arc(dotX, dotY, DOT_RADIUS, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${baseColor}, ${Math.max(
              intensity * 0.6,
              0.1
            )})`
            ctx.fill();
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      canvas.style.opacity = "1";
      drawHighlights(e.clientX, e.clientY);
      lastMousePos.current = { x: e.clientX, y: e.clientY };

    // TODO: Either add or remove this
    //   if (timeoutRef.current) clearTimeout(timeoutRef.current);
    //   timeoutRef.current = setTimeout(() => {
    //     if (!canvas) return;
    //     canvas.style.opacity = "0";
    //   }, 150);
    };

    const handleThemeChange = () => {
      if (lastMousePos.current) {
        drawHighlights(lastMousePos.current.x, lastMousePos.current.y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", () => {
      if (canvasRef.current) canvasRef.current.style.opacity = "0";
    });

    //Observe changes to class on <html>
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          handleThemeChange();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", () => {
        if (canvasRef.current) canvasRef.current.style.opacity = "0";
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`relative w-screen h-screen bg-dotted overflow-hidden`} style={{backgroundSize: `${DOT_SPACING}px ${DOT_SPACING}px`}}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
