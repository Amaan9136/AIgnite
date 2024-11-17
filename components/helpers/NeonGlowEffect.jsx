import React, { useEffect } from 'react';

export default function NeonGlowEffect({ color = '#FFD700' }) {
  useEffect(() => {
    const neonElement = document.createElement('div');
    neonElement.classList.add('neon-effect');
    document.body.appendChild(neonElement);

    neonElement.style.backgroundColor = color;
    neonElement.style.boxShadow = `0 0 20px 10px ${color}`;

    const updatePosition = (e) => {
      neonElement.style.left = `${e.pageX}px`;
      neonElement.style.top = `${e.pageY}px`;
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return <></>; // No visible component, just the neon effect
}
 