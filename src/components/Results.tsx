import { useState } from 'react';
import { RESULTS } from '../data';
import { BoardResult } from '../types';
import { Trophy, Award } from 'lucide-react';

export default function Results() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'FSc Pre-Medical' | 'FSc Pre-Engineering'>('All');

  const filteredResults = activeCategory === 'All'
    ? RESULTS
    : RESULTS.filter(res => res.category === activeCategory);

  // Stats Counters
  const counters = [
    { 
      label: "Overall Board Positions", 
      val: "12", 
      suffix: "", 
      desc: "Faisalabad Board",
      icon: Trophy,
      iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      glowColor: "from-amber-600/10 to-transparent",
      borderColor: "hover:border-amber-500/40"
    },
    { 
      label: "FSc Pass Percentage", 
      val: "99.2", 
      suffix: "%", 
      desc: "Average Year-on-Year",
      icon: Award,
      iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      glowColor: "from-blue-600/10 to-transparent",
      borderColor: "hover:border-blue-500/40"
    }
  ];

  return (
    <section id="results" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden science-grid">
      
      {/* Decorative Glow elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-400 font-mono block bg-slate-900/80 px-3.5 py-1.5 rounded-full w-max mx-auto border border-slate-800">
            Our Academic Laurels
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
            Proven Results Speak Louder than Promises
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded mx-auto mt-4" />
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            Talent Science Academy students consistently break records in BISE Faisalabad Intermediate board exams and secure top-tier seats in leading medical and engineering universities.
          </p>
        </div>

        {/* Counter Stats Section */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {counters.map((count, index) => {
            const Icon = count.icon;
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-6 md:p-8 rounded-3xl border border-slate-800/85 shadow-2xl relative overflow-hidden group transition-all duration-300 ${count.borderColor} flex items-center gap-5 md:gap-6`}
              >
                {/* Decorative Internal Glow */}
                <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-tr ${count.glowColor} rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`} />
                
                {/* Glowing Icon Container */}
                <div className={`p-4 rounded-2xl border ${count.iconColor} shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                {/* Content */}
                <div className="text-left space-y-1 relative z-10">
                  <span className="block font-display font-black text-3xl md:text-5xl text-white font-mono tracking-tight leading-none">
                    {count.val}{count.suffix}
                  </span>
                  <span className="block text-sm md:text-base text-slate-200 font-bold font-sans">
                    {count.label}
                  </span>
                  <span className="block text-xs text-slate-400 font-medium font-mono">
                    {count.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Board Scorers Section */}
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400 fill-amber-400" />
                  Recent High-Scorers & Board Positioners
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Verified board scores for BISE Faisalabad & Entry Tests.
                </p>
              </div>

              {/* Mini Filter */}
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value as any)}
                className="bg-slate-950 border border-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-300 outline-none cursor-pointer hover:bg-slate-900"
              >
                <option value="All">All Achievements</option>
                <option value="FSc Pre-Medical">FSc Pre-Medical</option>
                <option value="FSc Pre-Engineering">FSc Pre-Engineering</option>
              </select>
            </div>

            {/* List of Scorers */}
            <div className="space-y-4">
              {filteredResults.map((res: BoardResult) => (
                <div key={res.id} className="p-4 rounded-xl bg-slate-950 border border-slate-850 hover:bg-slate-900/40 hover:border-slate-800 transition-all flex items-center gap-4">
                  {/* Initials Avatar */}
                  <div className="w-11 h-11 rounded-xl bg-blue-950/60 text-blue-300 flex items-center justify-center font-display font-extrabold text-sm shrink-0 uppercase border border-blue-900/40">
                    {res.studentName.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Student Details */}
                  <div className="flex-grow space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display font-bold text-sm sm:text-base text-white">
                        {res.studentName}
                      </span>
                      <span className="text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400">
                        Class of {res.year}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      <span className="text-emerald-400 bg-emerald-950/40 font-bold px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-0.5 shrink-0">
                        <Award className="w-3 h-3" /> {res.achievement}
                      </span>
                      <span className="text-slate-400 font-mono">
                        {res.detail}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {filteredResults.length === 0 && (
                <p className="text-slate-500 text-sm text-center py-6">
                  No records matching selected stream in recent datasets.
                </p>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
