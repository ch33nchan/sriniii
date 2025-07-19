import Contact from '../../components/sections/Contact';
import ThemeSwitcher from '../../components/ThemeSwitcher';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-text p-4">
      <ThemeSwitcher />
      <main className="max-w-4xl mx-auto mt-20">
        <Contact />
      </main>
    </div>
  );
}
