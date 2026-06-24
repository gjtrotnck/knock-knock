import React from 'react';
import { motion } from 'motion/react';
import { Location } from '../types';
import { MapPin } from 'lucide-react';

interface Props {
  location: Location;
  index: number;
}

export default function LocationCard({ location, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#12072B]/80 backdrop-blur-md p-6 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 font-display tracking-tight">{location.name}</h3>
            <p className="text-slate-400 text-sm font-semibold tracking-wider uppercase">표면 : {location.surface}</p>
          </div>
        </div>

        <div className="flex-grow">
          <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-3">
            <div>
              <span className="text-xs text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">진실</span>
              <p className="text-sm text-cyan-100">{location.truth}</p>
            </div>
            <hr className="border-t border-cyan-500/30" />
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1 font-semibold">상세 정보</span>
              <p className="text-sm text-slate-300 leading-relaxed">{location.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
