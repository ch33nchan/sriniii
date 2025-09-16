import GoogleScholar from '../../components/sections/GoogleScholar';
import TerminalNav from '../../components/TerminalNav';

export default function ScholarPage() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <section className="mb-12 text-center fade-in">
          <h1 className="text-4xl font-bold mb-4 text-primary font-mono transition-all duration-500 hover:scale-105">
            research & publications
          </h1>
          <p className="text-secondary font-mono text-sm mb-6">
            peer-reviewed academic contributions
          </p>
        </section>

        {/* Main Content */}
        <div className="terminal-box fade-in">
          <GoogleScholar />
        </div>

        {/* Navigation */}
        <TerminalNav currentSection="scholar" className="fade-in" />
      </main>
    </div>
  );
}
