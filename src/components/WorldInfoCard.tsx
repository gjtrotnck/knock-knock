import React from 'react';
import { motion } from 'motion/react';
import { WorldRule } from '../types';
import { Shield, Dog, Radar } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={24} className="text-cyan-400" />,
  Dog: <Dog size={24} className="text-cyan-400" />,
  Radar: <Radar size={24} className="text-cyan-400" />
};

interface Props {
  rule: WorldRule;
  index: number;
}

export default function WorldInfoCard({ rule, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full group-hover:bg-cyan-400/20 transition-colors" />
      
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center border border-cyan-500/30">
          {iconMap[rule.icon]}
        </div>
        <h3 className="text-xl font-bold text-white tracking-wide">{rule.title}</h3>
      </div>
      
      <p className="text-sm text-slate-300 leading-relaxed mb-4 whitespace-pre-wrap break-keep">
        {rule.description}
      </p>
      
      {rule.details && (
        <ul className="space-y-2">
          {rule.details.map((detail, i) => (
            <li key={i} className="text-sm text-slate-400 flex items-start gap-2 whitespace-pre-wrap break-keep">
              <span className="text-cyan-400 mt-1 text-[10px] shrink-0">■</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
