import React, { useRef, useEffect } from "react";
import { useEffect, useState } from 'react';

const NUM_PARTICLES = 4000;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle(canvas) {
  return {
    x: random(0, canvas.width),
    y: random(0, canvas.height),
    radius: random(0.3, 0.8), // reduced size
    speedX: random(-0.3, 0.3),
    speedY: random(-0.3, 0.3),
    opacity: random(0.2, 1),
  };
}


export default function Sparkles() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    particles.current = Array.from({ length: NUM_PARTICLES }, () =>
      createParticle(canvas)
    );

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="sparkle-canvas" />;
}
