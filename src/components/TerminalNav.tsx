import React from 'react';
import Link from 'next/link';

interface TerminalNavProps {
  currentSection?: string;
  className?: string;
}

const TerminalNav: React.FC<TerminalNavProps> = ({ currentSection, className = "" }) => {
  const sections = [
    { name: 'bio', path: '/' },
    { name: 'skills', path: '/skills' },
    { name: 'experience', path: '/experience' },
    { name: 'projects', path: '/projects' },
    { name: 'scholar', path: '/scholar' },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <nav className={`terminal-nav ${className}`}>
      <div className="flex items-center text-xs text-muted font-mono mr-4">
        <span>navigate:</span>
      </div>
      {sections.map((section) => (
        <Link
          key={section.name}
          href={section.path}
          className={`terminal-nav-item ${
            currentSection === section.name ? 'bg-primary text-background' : ''
          }`}
          title={`Go to ${section.name}`}
        >
          {section.name}
        </Link>
      ))}
    </nav>
  );
};

export default TerminalNav;
