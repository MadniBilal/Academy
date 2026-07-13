import { motion } from 'motion/react';
import { FACULTY } from '../data';
import { FacultyMember } from '../types';
import { BookOpen, Star, ShieldCheck } from 'lucide-react';

export default function Faculty() {
  return (
    <section id="faculty" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute left-0 top-0 w-24 h-full bg-slate-900/10 -z-10 border-r border-slate-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-400 font-mono block bg-slate-900/80 px-3.5 py-1.5 rounded-full w-max mx-auto border border-slate-800">
            Meet Our Lecturers
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
            The Founders of Your Conceptual Mastery
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded mx-auto mt-4" />
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            We believe an academy is only as good as its teachers. Our senior faculty comprises leading scholars, popular authors, and board exam specialists of Tandlianwala.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACULTY.map((teacher: FacultyMember) => (
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              key={teacher.id}
              className="bg-slate-900/40 rounded-2xl border border-slate-800/80 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group h-full"
            >
              
              {/* Photo Area */}
              <div className="relative aspect-square overflow-hidden bg-slate-800">
                <img
                  src={teacher.image}
                  alt={`${teacher.name} - ${teacher.subject} Teacher at Talent Science Academy`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subject Floating Badge */}
                <span className="absolute bottom-3 left-3 bg-blue-950/90 backdrop-blur-sm text-blue-300 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-lg border border-blue-900/40">
                  {teacher.subject} Expert
                </span>
              </div>

              {/* Text content area */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                
                {/* Name and Qualification */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-lg text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {teacher.name}
                  </h3>
                  <p className="text-xs uppercase font-bold text-blue-400 font-mono tracking-wide leading-tight">
                    {teacher.role}
                  </p>
                  <p className="text-xs text-slate-400 leading-normal font-sans font-medium">
                    {teacher.qualification}
                  </p>
                </div>

                {/* Brief bio & pedagogical experience */}
                <div className="pt-3 border-t border-slate-800 space-y-2 flex-grow">
                  <p className="text-xs text-slate-400 font-sans italic leading-relaxed">
                    "{teacher.bio}"
                  </p>
                  
                  {/* Experience Badge */}
                  {teacher.experience && (
                    <div className="flex items-center gap-1.5 pt-1 text-[10px] text-slate-400 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{teacher.experience}</span>
                    </div>
                  )}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Quality Banner bottom */}
        <div className="mt-16 bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-xl bg-blue-950/40 text-blue-400 border border-blue-900/40 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1 flex-grow">
            <h4 className="font-display font-bold text-white text-sm sm:text-base">
              Examiner-Aligned Mentorship Structure
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Our teachers carry direct associations with Faisalabad board examination cells. We provide our students with the precise terminology and structuring keys that board paper examiners actively look for when grading pre-medical and pre-engineering answer sheets.
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-slate-300">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>15+ Years Avg Exp</span>
          </div>
        </div>

      </div>
    </section>
  );
}
