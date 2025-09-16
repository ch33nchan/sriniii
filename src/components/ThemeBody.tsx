'use client';

import React, { ReactNode } from 'react';

interface ThemeBodyProps {
  children: ReactNode;
}

const ThemeBody: React.FC<ThemeBodyProps> = ({ children }) => {
  return (
    <body className="theme-light">
      {children}
    </body>
  );
};

export default ThemeBody;
