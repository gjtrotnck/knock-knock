import React from 'react';
import { motion } from 'motion/react';
import CharacterCard from './components/CharacterCard';
import WorldInfoCard from './components/WorldInfoCard';
import LocationCard from './components/LocationCard';
import { characters, worldRules, locations } from './data';
import { Rocket, Sparkles, Database } from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans pb-24 relative">
      {/* Background galaxy image */}
      <div 
        className="fixed inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=3000')] bg-cover bg-center opacity-15 pointer-events-none mix-blend-screen"
      />
      {/* Navigation / Header Bar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#05020a]/80 backdrop-blur-xl border-b border-white/10 h-16 flex items-center justify-center px-6">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo or Title could go here */}
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-slate-400">
            <a href="#operatives" className="hover:text-cyan-400 transition-colors">요원 정보</a>
            <a href="#lore" className="hover:text-cyan-400 transition-colors">세계관</a>
            <a href="#locations" className="hover:text-cyan-400 transition-colors">주요 장소</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full flex flex-col items-center justify-center min-h-[40vh]"
        >
          <div className="bg-red-950/40 border border-red-500/30 rounded-3xl px-8 py-6 md:px-12 md:py-8 shadow-[0_0_30px_rgba(220,38,38,0.2)] backdrop-blur-sm inline-block">
            <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-mono font-bold text-red-500 tracking-[0.1em] md:tracking-[0.2em] drop-shadow-[0_0_15px_rgba(239,68,68,0.6)] uppercase text-center m-0 whitespace-nowrap">
              Accessing confidential archive
            </h1>
          </div>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* Characters Section */}
        <section id="operatives" className="space-y-12 scroll-mt-24">
          <div className="flex items-center gap-4 border-b border-white/10 pb-4">
            <h2 className="text-3xl font-display font-bold tracking-widest uppercase">활동 요원</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
        </section>

        {/* World Rules Section */}
        <section id="lore" className="space-y-12 scroll-mt-24">
          <div className="flex items-center gap-4 border-b border-white/10 pb-4">
            <h2 className="text-3xl font-display font-bold tracking-widest uppercase">세계관 정보</h2>
          </div>

          <div className="flex flex-col gap-6">
            {worldRules.map((rule, idx) => (
              <WorldInfoCard key={idx} rule={rule} index={idx} />
            ))}
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="space-y-12 scroll-mt-24">
          <div className="flex items-center gap-4 border-b border-white/10 pb-4">
            <h2 className="text-3xl font-display font-bold tracking-widest uppercase">주요 장소</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc, idx) => (
              <LocationCard key={idx} location={loc} index={idx} />
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-white/10 text-center text-slate-500 text-sm flex flex-col items-center justify-center">
        <p className="tracking-widest uppercase">아스트라 아카데미 데이터베이스 • 보안 연결</p>
      </footer>
    </div>
  );
}
