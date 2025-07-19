'use client';

import React, { useState, useEffect } from 'react';

interface DynamicAsciiArtProps {
  type: 'square' | 'circle' | 'triangle' | 'characters';
}

const asciiFrames = {
  square: [
    `
┌───────┐
│       │
│       │
│       │
└───────┘
    `,
    `
▗───────▖
▐       ▌
▐       ▌
▐       ▌
▝───────▘
    `,
    `
█───────█
█       █
█       █
█       █
█───────█
    `,
  ],
  circle: [
    `
  .--.  
 /    \
|      |
 \    /
  '--'  
    `,
    `
  .----.  
 /      \
|        |
 \      /
  '----'  
    `,
    `
  .----.  
 /      \
|  o  o |
 \  __  /
  '----'  
    `,
  ],
  triangle: [
    `
    /\
   /  \
  /____\
    `,
    `
    /\ 
   /  \
  /____\
    `,
    `
    /\  
   /  \
  /____\
    `,
  ],
  characters: [
    `
 _  _ ____ ____ _  _ ____    
 |\/| |___ |___ |\ | |___    
 |  | |___ |___ | \| |___    
    `,
    `
 ____ _  _ ____ _  _ ____    
 |__| |\/| |__| |\ | |___    
 |  | |  | |  | | \| |___    
    `,
    `
 _  _ ____ _  _ ____ _  _    
 |\/| |___ |\ | |___ |\ |    
 |  | |___ | \| |___ | \|    
    `,
  ],
};

const DynamicAsciiArt: React.FC<DynamicAsciiArtProps> = ({ type }) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % asciiFrames[type].length);
    }, 400); // Adjust animation speed

    return () => clearInterval(interval);
  }, [type]);

  return (
    <pre className="text-orange text-sm leading-none">
      {asciiFrames[type][currentFrameIndex]}
    </pre>
  );
};

export default DynamicAsciiArt;
