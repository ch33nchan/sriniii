import Bio from '../components/sections/Bio';
import ThemeSwitcher from '../components/ThemeSwitcher';
import DynamicAsciiArt from '../components/DynamicAsciiArt';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text p-4">
      <ThemeSwitcher />
      <main className="max-w-4xl mx-auto mt-20">
        <section className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-primary">srini</h1>
          <DynamicAsciiArt type="characters" />
        </section>
        <Bio />
      </main>
    </div>
  );
}
