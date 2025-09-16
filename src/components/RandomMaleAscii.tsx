'use client';

import React, { useState, useEffect } from 'react';

const maleCharacterArt = [
  `
    .-"""-.
   /       \\
  |  o   o  |
  |    >    |
  |   ___   |
   \\       /
    '-...-'
      |||
     /|||\\
    / ||| \\
   |  |||  |
   |  |||  |
   \\  |||  /
    \\ ||| /
     \\|||/
      |||
    __|_|__
   [_______]
  `,
  `
     .---.
    /     \\
   | () () |
    \\  ^  /
     |||||
     |||||
    .-'''-. 
   /       \\
  |  /\\ /\\  |
  | |  V  | |
   \\  ___  /
    \\     /
     |||||
     |||||
     |||||
    /|||||\\
   ||_____||
  `,
  `
    ,---.
   /     \\
  | () () |
   \\  o  /
    |||||
    |||||
   .-"""-. 
  /       \\
 |  ^   ^  |
 |    -    |
  \\   ___  /
   \\_____/
     |||||
     |||||
     |||||
    /|||||\\
   [_______]
  `,
  `
     ___
    /   \\
   | o o |
    \\ - /
     |||
    .---.
   /     \\
  |  \\_/  |
  |   |   |
   \\ ___ /
    |||||
    |||||
    |||||
   /|||||\\
  ||_____||
  `,
  `
    .---. 
   /     \\
  | () () |
   \\  >  /
    |||||
    |||||
   .-----.
  /       \\
 |    ^    |
 |  \\___/  |
  \\       /
   \\     /
    |||||
    |||||
   /|||||\\
  [_______]
  `,
  `
     ___
   .'   '.
  /  o o  \\
 |    <    |
  \\  ___  /
   \\     /
    |||||
   .-----.
  /       \\
 |  ^   ^  |
 |    u    |
  \\  ___  /
   \\     /
    |||||
    |||||
   /|||||\\
  ||_____||
  `,
  `
    .--.
   /    \\
  | @  @ |
   \\  /\\ /
    |||||
   .-"""-. 
  /       \\
 |  o   o  |
 |    _    |
  \\  ___  /
   \\     /
    |||||
    |||||
   /|||||\\
  [_______]
  `,
  `
     ___
    /   \\
   | ◉ ◉ |
    \\ ω /
     |||
    .---.
   /     \\
  |  \_/  |
  |   |   |
   \\ === /
    |||||
    |||||
   /|||||\\
  ||_____||
  `,
  `
    .---.
   /  *  \\
  | () () |
   \\  ∪  /
    |||||
   .-"""-. 
  /       \\
 |  ▲   ▲  |
 |    ●    |
  \\  ___  /
   \\     /
    |||||
   /|||||\\
  [_______]
  `,
  `
     .-.
    /   \\
   | ☉ ☉ |
    \\ ◡ /
     |||
    .---.
   /     \\
  |  \\_/  |
  |   ‖   |
   \\ --- /
    |||||
    |||||
   /|||||\\
  ||_____||
  `,
];

interface RandomMaleAsciiProps {
  className?: string;
  animationSpeed?: number;
}

const RandomMaleAscii: React.FC<RandomMaleAsciiProps> = ({ 
  className = "", 
  animationSpeed = 2500 
}) => {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentCharacter(Math.floor(Math.random() * maleCharacterArt.length));
        setIsTransitioning(false);
      }, 200);
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [animationSpeed]);

  return (
    <div className={`text-center ${className}`}>
      <pre 
        className={`text-primary font-mono text-xs leading-none select-none transition-all duration-300 ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        style={{ 
          filter: isTransitioning ? 'blur(2px)' : 'none',
          transform: isTransitioning ? 'rotateY(90deg)' : 'rotateY(0deg)'
        }}
      >
        {maleCharacterArt[currentCharacter]}
      </pre>
    </div>
  );
};

export default RandomMaleAscii;
