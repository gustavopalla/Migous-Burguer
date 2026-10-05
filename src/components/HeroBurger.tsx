"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 61;
const frameSrc = (i: number) =>
  `/burger-frames/${String(i).padStart(3, "0")}.webp`;

// Fraction of the remaining distance covered per frame. Lower = softer.
const EASE = 0.14;
// Scroll progress is remapped so the burger rests closed at the very start and
// fully open at the very end of the runway.
const HOLD_START = 0.04;
const HOLD_END = 0.1;

export function HeroBurger() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Reduced-motion users keep the static image and never download the frames.
    const enabled = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    ).matches;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const runway = wrap?.closest<HTMLElement>("[data-hero-runway]");
    const stage = wrap?.closest<HTMLElement>("[data-hero-stage]");
    const ctx = canvas?.getContext("2d");
    if (!enabled || !wrap || !canvas || !runway || !stage || !ctx) return;

    let cancelled = false;
    let loaded = false;
    let raf = 0;
    let current = 0; // 0 = closed, 1 = fully open
    let target = 0;
    let drawn = -1;
    const frames: HTMLImageElement[] = [];

    const readTarget = () => {
      // Sticky stage is pinned while the runway scrolls past it.
      const stuckAt = stage.getBoundingClientRect().top;
      const scrolled = stuckAt - runway.getBoundingClientRect().top;
      const distance = runway.offsetHeight - stage.offsetHeight;
      const p = distance > 0 ? Math.min(Math.max(scrolled / distance, 0), 1) : 0;
      target = Math.min(
        Math.max((p - HOLD_START) / (1 - HOLD_START - HOLD_END), 0),
        1,
      );
      runway.style.setProperty("--hero-p", p.toFixed(3));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const size = Math.round(Math.min(wrap.clientWidth, wrap.clientHeight) * dpr);
      if (size > 0 && canvas.width !== size) {
        canvas.width = size;
        canvas.height = size;
        drawn = -1;
      }
    };

    const draw = () => {
      const index = Math.round(current * (FRAME_COUNT - 1));
      if (index === drawn) return;
      const img = frames[index];
      if (!img?.complete) return;
      drawn = index;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // The loop only runs while the burger is still catching up with the scroll.
    const tick = () => {
      current += (target - current) * EASE;
      if (Math.abs(target - current) < 0.0005) current = target;
      draw();
      raf = current === target ? 0 : requestAnimationFrame(tick);
    };
    const kick = () => {
      readTarget();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const load = async () => {
      // Small batches so the frames don't compete with the rest of the page.
      for (let start = 0; start < FRAME_COUNT; start += 8) {
        const batch = [];
        for (let i = start; i < Math.min(start + 8, FRAME_COUNT); i++) {
          const img = new window.Image();
          img.src = frameSrc(i);
          frames[i] = img;
          batch.push(img.decode().catch(() => undefined));
        }
        await Promise.all(batch);
        if (cancelled) return;
      }
      loaded = true;
      resize();
      readTarget();
      current = target;
      draw();
      setReady(true);
      window.addEventListener("scroll", kick, { passive: true });
    };

    const observer = new ResizeObserver(() => {
      resize();
      if (loaded) {
        kick();
        draw();
      }
    });
    observer.observe(wrap);
    resize();

    // Let the hero image paint before fetching anything else.
    const timer = window.setTimeout(load, 400);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("scroll", kick);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative aspect-square h-full max-w-full drop-shadow-[0_24px_30px_rgba(0,0,0,0.45)]"
    >
      <Image
        src="/images/hero-burger.png"
        alt="Smash burger duplo com cheddar derretido"
        width={1024}
        height={1024}
        priority
        className={`size-full object-contain transition-opacity duration-300 ${ready ? "opacity-0" : "opacity-100"}`}
      />
      <canvas
        ref={canvasRef}
        aria-hidden
        className={`absolute inset-0 size-full object-contain transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
