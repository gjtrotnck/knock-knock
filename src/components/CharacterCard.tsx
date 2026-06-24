import React from 'react';
import { motion } from 'motion/react';
import { Character } from '../types';
import { Shield, ShieldAlert, Dog, Target, Info, Flame, Brain, Sparkles } from 'lucide-react';

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  const [showClassified, setShowClassified] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#0c051a]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 relative overflow-hidden group"
    >
      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 relative z-10">
        
        {/* Header / Identity Info */}
        <div className="flex-1 space-y-4">
          <div>
            <div className="flex items-baseline gap-3 mb-3">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-none">
                {character.name}
              </h2>
              <span className="text-sm uppercase tracking-wider font-semibold" style={{ color: character.color }}>
                {character.rank}
              </span>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-slate-400 uppercase tracking-wider">
                외관 : {character.humanAge}살 인간
              </p>
              <p className="text-sm uppercase tracking-wider" style={{ color: character.color }}>
                실제 : {character.trueAge} {character.trueAppearance}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <div className="space-y-4 bg-black/40 p-4 rounded-xl border border-white/5">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase tracking-wider">외형</span>
                <p className="text-sm leading-relaxed text-slate-200">{character.humanAppearance}</p>
              </div>
              <div className="space-y-1 pt-3 border-t border-white/5">
                <span className="text-xs text-slate-400 uppercase tracking-wider">성격</span>
                <p className="text-sm leading-relaxed text-slate-200">{character.personality}</p>
              </div>
              <div className="space-y-1 pt-3 border-t border-white/5">
                <span className="text-xs text-slate-400 uppercase tracking-wider">정신 상태</span>
                <p className="text-sm leading-relaxed text-slate-200">{character.mentalState}</p>
              </div>
              <div className="space-y-1 pt-3 border-t border-white/5">
                <span className="text-xs text-slate-400 uppercase tracking-wider">주요 특징</span>
                <p className="text-sm leading-relaxed text-slate-200">{character.features}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-black/40 p-4 rounded-xl border border-white/5">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">호</span>
              <p className="text-sm text-slate-200">{character.likes}</p>
            </div>
            <div className="bg-black/40 p-4 rounded-xl border border-white/5">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">불호</span>
              <p className="text-sm text-slate-200">{character.dislikes}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Image & Stats */}
        <div className="w-full md:w-56 lg:w-64 shrink-0 flex flex-col gap-4">
          {/* Image Placeholder or Actual Image */}
          <div 
            className="w-full aspect-[3/4] rounded-xl bg-gradient-to-b from-white/5 to-white/0 border flex flex-col items-center justify-center overflow-hidden relative shadow-xl"
            style={{ borderColor: `${character.color}40` }}
          >
            {character.imageUrl ? (
              <img 
                src={character.imageUrl} 
                alt={character.name} 
                className="w-full h-full object-cover relative z-10"
                referrerPolicy="no-referrer"
              />
            ) : (
              <>
                {/* Inner glow effect */}
                <div 
                  className="absolute inset-0 opacity-20 mix-blend-screen" 
                  style={{ background: `radial-gradient(circle at 50% 50%, ${character.color}, transparent 70%)` }} 
                />
                {/* Optional text or icon indicating image space */}
                <div className="w-12 h-12 rounded-full border flex items-center justify-center mb-3 z-10" style={{ borderColor: `${character.color}40` }}>
                  <span className="text-xl font-display opacity-50" style={{ color: character.color }}>{character.name.charAt(0)}</span>
                </div>
                <span className="text-slate-500 text-xs tracking-wider z-10 uppercase font-medium">Image Area</span>
              </>
            )}
          </div>

          <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-4">
            <h3 className="text-xs text-slate-400 uppercase tracking-wider font-semibold">전투 / 지능 능력치</h3>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs mb-1">
                <span>무력</span>
                <span className="font-mono">{character.stats.strength}/100</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${character.stats.strength}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full"
                  style={{ backgroundColor: character.color }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs mb-1">
                <span>지력</span>
                <span className="font-mono">{character.stats.intelligence}/100</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${character.stats.intelligence}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-full"
                  style={{ backgroundColor: character.color }}
                />
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-4 rounded-xl border border-white/5">
            <h3 className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1">
              <Flame size={14} className="text-orange-400" /> 생물학적 정보
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">발정기 :</strong> {character.rutCycle}
            </p>
          </div>

          {/* Classified Toggle */}
          <button 
            onClick={() => setShowClassified(!showClassified)}
            className="w-full py-2.5 px-4 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-xs uppercase tracking-widest font-semibold hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2"
          >
            <ShieldAlert size={14} />
            {showClassified ? '기밀 데이터 숨기기' : '5등급 기밀 정보 보기'}
          </button>
        </div>
      </div>

      {/* Expandable Classified Section */}
      {showClassified && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-6 pt-6 border-t border-red-500/20"
        >
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4">
            <h4 className="text-red-400 text-sm font-semibold mb-3 flex items-center gap-2 uppercase tracking-wider">
              <ShieldAlert size={16} /> 제한된 정보 [성적 성향]
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-300">
              <div>
                <span className="block text-xs text-red-400/70 mb-1">역할</span>
                {character.classifiedInfo.role}
              </div>
              <div>
                <span className="block text-xs text-red-400/70 mb-1">성향</span>
                {character.classifiedInfo.tendency}
              </div>
              <div>
                <span className="block text-xs text-red-400/70 mb-1">선호 플레이</span>
                {character.classifiedInfo.preferences}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
