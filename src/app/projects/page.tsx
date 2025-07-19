import Projects from '../../components/sections/Projects';
import ThemeSwitcher from '../../components/ThemeSwitcher';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-text p-4">
      <ThemeSwitcher />
      <main className="max-w-4xl mx-auto mt-20">
        <Projects />
      </main>
    </div>
  );
}
