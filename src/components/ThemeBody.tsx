'use client';

import React, { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ThemeBodyProps {
  children: ReactNode;
}

const ThemeBody: React.FC<ThemeBodyProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <body className={`theme-${theme}`}>
      {children}
    </body>
  );
};

export default ThemeBody;
