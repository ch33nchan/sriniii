import Skills from '../../components/sections/Skills';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Main Content */}
        <div className="terminal-box">
          <div className="mb-4">
            <span className="text-accent text-sm font-mono">~$ ./skills --list --verbose</span>
          </div>
          <Skills />
        </div>

        {/* Terminal Footer */}
        <section className="mt-12 text-center">
          <div className="terminal-box p-6">
            <div className="text-primary font-mono text-sm">
              <span className="text-accent">stack_status:</span> 
              <span className="text-text"> production_ready | last_updated: daily</span>
            </div>
            <div className="text-primary font-mono text-xs mt-2">
              <span className="text-accent">~$</span> 
              <span className="text-secondary"> cd /experience to see implementations</span>
              <span className="cursor text-primary">_</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
