import Bio from '../components/sections/Bio';
import RandomMaleAscii from '../components/RandomMaleAscii';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <section className="mb-12 text-center fade-in">
          <h1 className="text-5xl font-bold mb-4 text-primary font-mono">
            srinivas
          </h1>
          <p className="text-secondary font-mono text-lg mb-2">
            machine learning engineer & robotics researcher
          </p>
          <p className="text-muted font-mono text-sm mb-8">
            birmingham, uk <span className="cursor">_</span>
          </p>
          
          {/* ASCII Art Character */}
          <div className="mb-8 terminal-box">
            <RandomMaleAscii className="mb-4" animationSpeed={2500} />
          </div>
        </section>

        {/* Bio Content */}
        <div className="terminal-box fade-in">
          <Bio />
        </div>
      </main>
    </div>
  );
}
