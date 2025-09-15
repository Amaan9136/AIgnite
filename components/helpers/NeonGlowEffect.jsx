import React, { useEffect, useState } from 'react';

export default function NeonGlowEffect() {
  const [randomColor, setRandomColor] = useState('');
  const [isSupportedDevice, setIsSupportedDevice] = useState(false);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isLaptopOrTablet = width >= 600; 
      setIsSupportedDevice(isLaptopOrTablet);
    };
    checkDevice(); 
    window.addEventListener('resize', checkDevice); 

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!isSupportedDevice) return;

    const newColor = generateRandomColor();
    setRandomColor(newColor);

    const neonElement = document.createElement('div');
    neonElement.classList.add('neon-effect');
    document.body.appendChild(neonElement);

    neonElement.style.backgroundColor = newColor;
    neonElement.style.boxShadow = `0 0 20px 10px ${newColor}`;

    const updatePosition = (e) => {
      neonElement.style.left = `${e.pageX}px`;
      neonElement.style.top = `${e.pageY}px`;
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      neonElement.remove();
    };
  }, [isSupportedDevice]);







  if (!isSupportedDevice) {
    return null; 
  }

  return <></>;
}
