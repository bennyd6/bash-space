import React, { useEffect, useRef, useState } from "react";
import "./about.css";

const About = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max((0 - top) / height, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rotateX = 20 * (1 - scrollProgress);
  const scale = isMobile
    ? 0.7 + 0.3 * scrollProgress
    : 1.05 - 0.9 * scrollProgress;
  const translateY = -100 * scrollProgress;

  return (
    <div className="about-outer" id="about" ref={containerRef}>
      <div className="about-inner">
        <div
          className="about-header"
          style={{
            transform: `translateY(${translateY}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          {titleComponent}
        </div>

        <div
          className="about-card"
          style={{
            transform: `rotateX(${rotateX}deg) scale(${scale})`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="about-card-inner">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
