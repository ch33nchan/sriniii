import Experience from '../../components/sections/Experience';
import ThemeSwitcher from '../../components/ThemeSwitcher';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-text p-4">
      <ThemeSwitcher />
      <main className="max-w-4xl mx-auto mt-20">
        <Experience />
      </main>
    </div>
  );
}
