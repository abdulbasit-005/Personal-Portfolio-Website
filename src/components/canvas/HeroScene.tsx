"use client";

import { useEffect, useRef } from "react";

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const t = time * 0.001;
      ctx.fillStyle = "#0B0A09";
      ctx.fillRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        width * 0.6,
        height * 0.3,
        0,
        width * 0.5,
        height * 0.4,
        width * 0.8,
      );
      gradient.addColorStop(
        0,
        `rgba(212, 255, 88, ${0.06 + Math.sin(t * 0.4) * 0.02})`,
      );
      gradient.addColorStop(1, "rgba(11, 10, 9, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 18;
        data[i] = Math.min(255, Math.max(0, data[i]! + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1]! + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2]! + noise));
      }
      ctx.putImageData(imageData, 0, 0);

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 w-full h-full opacity-90"
      aria-hidden
    />
  );
}
