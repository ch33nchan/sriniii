'use client';

import React, { useState, useEffect } from 'react';

interface DynamicAsciiArtProps {
  type: 'skills' | 'projects' | 'loading' | 'matrix' | 'dancing-name';
}

const asciiFrames = {
  skills: [
    `
    (╯°□°)╯ ┻━┻
    where are my skills?!
    `,
    `
    ┬─┬ ノ( ゜-゜ノ)
    calm down... searching...
    `,
    `
    (⌐■_■)
    found python.exe
    `,
    `
    ¯\_(ツ)_/¯
    javascript is weird...
    `,
    `
    ಠ_ಠ
    why is css so hard?
    `,
    `
    (☞ﾟヮﾟ)☞
    machine learning goes brrr
    `,
    `
    ヽ(°〇°)ﾉ
    neural networks activated!
    `,
    `
    (づ｡◕‿‿◕｡)づ
    skills.json loaded ✓
    ready to impress!
    `,
  ],
  projects: [
    `
   git clone https://github.com/
   Cloning into 'projects'...
   
   [          ] 0%
    `,
    `
   git clone https://github.com/
   Cloning into 'projects'...
   
   [██        ] 25%
    `,
    `
   git clone https://github.com/
   Cloning into 'projects'...
   
   [█████     ] 50%
    `,
    `
   git clone https://github.com/
   Cloning into 'projects'...
   
   [████████  ] 75%
    `,
    `
   git clone https://github.com/
   Cloning into 'projects'...
   
   [██████████] 100%
    `,
    `
   $ ls -la projects/
   
   total 5 repositories
   ✓ All projects loaded
    `,
  ],
  loading: [
    `
   [   ] Loading...
    `,
    `
   [.  ] Loading...
    `,
    `
   [.. ] Loading...
    `,
    `
   [...] Loading...
    `,
    `
   [ ..] Loading...
    `,
    `
   [  .] Loading...
    `,
  ],
  matrix: [
    `
   ╔═══════════╗
   ║ █ ░ █ ░ █ ║
   ║ ░ █ ░ █ ░ ║
   ║ █ ░ █ ░ █ ║
   ╚═══════════╝
    `,
    `
   ╔═══════════╗
   ║ ░ █ ░ █ ░ ║
   ║ █ ░ █ ░ █ ║
   ║ ░ █ ░ █ ░ ║
   ╚═══════════╝
    `,
  ],
  'dancing-name': [
    `\\o/  \\o/  \\o/  \\o/  \\o/    playing around...`,
    `/o\\   o   /o\\   o   /o\\     passing the ball ●`,
    `\\o/  /o\\  \\o/  /o\\  \\o/    toss toss! ●`,
    ` o    o  ● o    o    o     catch! someone dropped it`,
    `\\o/   |  \\o/   |   \\o/     jumping for the ball!`,
    ` |  ● /|\\  |   /|\\   |     pile up! everyone wants it`,
    `\\o/  \\o/  \\o/  \\o/  \\o/    teamwork time!`,
    ` s    r    i    n    i     let's spell something...`,
    `\\s/  \\r/  \\i/  \\n/  \\i/    srini! ta-da!`,
    `/s\\  /r\\  /i\\  /n\\  /i\\    we did it! bow time`,
    ` s    r    i    n    i     final pose ✨`,
    `\\o/  \\o/  \\o/  \\o/  \\o/    ready for another game?`,
  ],
};

const DynamicAsciiArt: React.FC<DynamicAsciiArtProps> = ({ type }) => {
  // Check if the type exists in asciiFrames first
  const frames = asciiFrames[type];
  if (!frames || frames.length === 0) {
    return (
      <pre className="text-primary text-xs leading-tight font-mono">
        {`Error: Unknown animation type "${type}"`}
      </pre>
    );
  }

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const totalFrames = frames.length;
    
    const interval = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalFrames;
        
        // For skills, projects, and dancing-name, pause on the last frame
        if ((type === 'skills' || type === 'projects' || type === 'dancing-name') && nextIndex === totalFrames - 1) {
          setHasCompleted(true);
        }
        
        return nextIndex;
      });
    }, type === 'loading' ? 200 : type === 'matrix' ? 800 : type === 'skills' ? 800 : type === 'dancing-name' ? 700 : 600);

    return () => clearInterval(interval);
  }, [type, frames.length]);

  // For skills, projects, and dancing-name, show the completion frame longer
  useEffect(() => {
    if (hasCompleted && (type === 'skills' || type === 'projects' || type === 'dancing-name')) {
      const timeout = setTimeout(() => {
        setCurrentFrameIndex(0);
        setHasCompleted(false);
      }, type === 'dancing-name' ? 2000 : 3000); // Dancing name restarts faster
      
      return () => clearTimeout(timeout);
    }
  }, [hasCompleted, type]);

  return (
    <pre className={`text-primary leading-tight font-mono ${type === 'dancing-name' ? 'text-xs' : 'text-xs'}`}>
      {frames[Math.min(currentFrameIndex, frames.length - 1)] || frames[0]}
    </pre>
  );
};

export default DynamicAsciiArt;
