import { motion } from 'motion/react';
import { ArrowRight, Star, GraduationCap, Award, ShieldCheck, Beaker } from 'lucide-react';
import { ACADEMY_INFO } from '../data';
import heroImage from '../assets/images/science_academy_banner_1783595671373.jpg';

interface HeroProps {
  onCtaclick: (sectionId: string) => void;
}

export default function Hero({ onCtaclick }: HeroProps) {
  const stats = [
    { label: "Board Top Positions", value: "12+", icon: Award, color: "text-emerald-400 bg-emerald-950/40 border-emerald-900/65" },
    { label: "Success Rate FSc", value: "98.4%", icon: ShieldCheck, color: "text-blue-400 bg-blue-950/40 border-blue-900/65" },
    { label: "Qualified Lecturers", value: "10+", icon: GraduationCap, color: "text-indigo-400 bg-indigo-950/40 border-indigo-900/65" },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 science-grid">
      
      {/* Decorative Science Floating Glows */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-1/10 right-1/10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content Grid */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Accreditation Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-sm border border-slate-800"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-xs font-semibold text-slate-300">
                Faisalabad's Premier Science Institute
              </span>
            </motion.div>

            {/* Main Display Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight"
            >
              Excellence in <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent">
                Matric and Intermediate levels
              </span>
            </motion.h1>

            {/* Description Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              At <strong className="text-white font-semibold">{ACADEMY_INFO.name}</strong>, we bridge the gap between traditional board learning and analytical scientific evaluation. Gain top board marks and clear competitive entry tests under expert supervision.
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onCtaclick('contact')}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Enroll Now 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onCtaclick('about')}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 font-semibold px-8 py-4 rounded-2xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                Learn More About Us
              </button>
            </motion.div>

            {/* Bullet list of trust points */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-2 text-xs text-slate-500 font-medium font-mono"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Fully Furnished Rooms
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Modern Smart Classrooms
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span> 100% Concept-Based Prep
              </div>
            </motion.div>

          </div>

          {/* Right Image Visual Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 shadow-slate-950/60">
              <img
                src={heroImage}
                alt="Science Academy Laboratory and Textbooks Banner"
                className="w-full object-cover aspect-[16/9] lg:aspect-auto lg:h-[450px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Science overlay card */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-850 hidden sm:flex items-center gap-3 animate-float max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-950/60 text-blue-400 border border-blue-900/40 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                FSc
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white leading-tight">Board Position Assured</h4>
                <p className="text-xs text-slate-400 mt-0.5 font-sans">Board rank study frameworks tailored by top examiners.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats overlay block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-16 lg:mt-24 bg-slate-900/50 backdrop-blur-md p-4 md:p-6 rounded-3xl border border-slate-800/80 shadow-2xl shadow-slate-950/30"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-start gap-3.5 p-2 md:p-4 rounded-2xl hover:bg-slate-800/30 transition-colors duration-200">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border ${stat.color} flex-shrink-0`}>
                <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <span className="block font-display font-extrabold text-xl md:text-2xl text-white font-mono tracking-tight">
                  {stat.value}
                </span>
                <span className="block text-xs md:text-sm text-slate-400 font-sans mt-0.5 font-medium leading-tight">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
