import Skills from '../../components/sections/Skills';
import ThemeSwitcher from '../../components/ThemeSwitcher';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-text p-4">
      <ThemeSwitcher />
      <main className="max-w-4xl mx-auto mt-20">
        <Skills />
      </main>
    </div>
  );
}
