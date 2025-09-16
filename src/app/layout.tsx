import type { Metadata } from "next";
import "./globals.css";
import ThemeBody from '../components/ThemeBody';
import InteractiveTerminal from '../components/InteractiveTerminal';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "srini.terminal - hacker portfolio",
  description: "srinivas' terminal-style portfolio | machine learning engineer & robotics researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ThemeBody>
          <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm z-50 p-4 border-b border-border">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center">
                <div className="text-primary font-mono font-bold text-lg">
                  srini
                </div>
                <ul className="flex space-x-6 text-sm font-mono">
                  <li>
                    <Link href="/" className="text-primary hover:text-secondary transition-colors">
                      bio
                    </Link>
                  </li>
                  <li>
                    <Link href="/skills" className="text-primary hover:text-secondary transition-colors">
                      skills
                    </Link>
                  </li>
                  <li>
                    <Link href="/experience" className="text-primary hover:text-secondary transition-colors">
                      experience
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-primary hover:text-secondary transition-colors">
                      projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-primary hover:text-secondary transition-colors">
                      contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/scholar" className="text-primary hover:text-secondary transition-colors">
                      scholar
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="pt-20 pb-32">
            {children}
          </div>
          <InteractiveTerminal />
        </ThemeBody>
    </html>
  );
}

