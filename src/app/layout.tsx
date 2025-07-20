import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext';
import ThemeBody from '../components/ThemeBody';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Srini - Personal Website",
  description: "Srini's personal website, showcasing his work in Machine Learning and Robotics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <ThemeBody>
          <nav className="fixed top-0 left-0 w-full bg-background z-10 p-4 border-b border-primary">
            <ul className="flex justify-center space-x-8 text-lg">
              <li><Link href="/" className="hover:text-primary">bio</Link></li>
              <li><Link href="/skills" className="hover:text-primary">skills</Link></li>
              <li><Link href="/experience" className="hover:text-primary">experience</Link></li>
              <li><Link href="/projects" className="hover:text-primary">projects</Link></li>
              <li><Link href="/contact" className="hover:text-primary">contact</Link></li>
              <li><Link href="/ads" className="hover:text-primary">ads</Link></li>
            </ul>
          </nav>
          {children}
        </ThemeBody>
      </ThemeProvider>
    <script>
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                  console.log('ServiceWorker registration failed: ', err);
                });
              });
            }
          </script>
    </html>
  );
}

