import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../index.css';

const AnimatedSVG = ({ paths, duration }) => {
  useEffect(() => {
    const svg = document.querySelector('.lockup');
    if (!svg) return; // Exit if SVG is not found
    const pathElements = svg.querySelectorAll('.stroke');

    // GSAP animation setup
    pathElements.forEach((path) => {
      gsap.set(path, { strokeDasharray: '1000', strokeDashoffset: '1000' }); // Ensure initial state
      
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: duration,
        repeat: -1,
        repeatDelay: 0,
        ease: 'none',
      });
    });
  }, [duration, paths]);

  return (
    <svg
      className="lockup"
      viewBox="0 0 1200 450"
      xmlns="http://www.w3.org/2000/svg"
      style={{ '--duration': `${duration}s` }}
    >
      {paths.map((path, idx) => (
        <React.Fragment key={idx}>
          <path d={path} className="base" />
          {Array.from({ length: 3 }).map((_, index) => (
            <path
              key={index}
              d={path}
              className="stroke"
              stroke="var(--stroke-color)"
              pathLength="1000"
            />
          ))}
        </React.Fragment>
      ))}
    </svg>
  );
};

export default AnimatedSVG;
