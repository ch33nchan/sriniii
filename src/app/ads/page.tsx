import Ads from '../../components/sections/Ads';
import ThemeSwitcher from '../../components/ThemeSwitcher';

export default function AdsPage() {
  return (
    <div className="min-h-screen bg-background text-text p-4">
      <ThemeSwitcher />
      <main className="max-w-4xl mx-auto mt-20">
        <Ads />
      </main>
    </div>
  );
}