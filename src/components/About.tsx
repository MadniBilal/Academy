import { motion } from 'motion/react';
import { Target, Award, Eye, Compass, FlaskConical, Users, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '../data';

export default function About() {
  const pillars = [
    {
      title: "Result-Driven Methodology",
      description: "Our student-centric frameworks align direct BISE board answer guidelines with core conceptual building blocks.",
      icon: Award,
      color: "text-blue-400 bg-blue-950/40 border-blue-900/50"
    },
    {
      title: "Regular Assessments",
      description: "Weekly tests, progress tracking, and timely feedback help students identify their strengths and continuously improve their performance..",
      icon: Target,
      color: "text-teal-400 bg-teal-950/40 border-teal-900/50"
    },
    {
      title: "Distinguished Scholars Panel",
      description: "Learn directly from authors of books, ex-board paper setters, and senior subject specialists.",
      icon: Users,
      color: "text-indigo-400 bg-indigo-950/40 border-indigo-900/50"
    }
  ];

  const valuePoints = [
    "Regular chapter-wise tests to monitor progress, strengthen concepts,.",
    "Board exam and entry test preparation with structured practice sessions.",
    "Small class divisions allowing dedicated teacher-student engagement.",
    "Comprehensive past paper workshops covering the last 10 board years.",
    "A disciplined and supportive learning environment that encourages focus."
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Structural visual guidelines */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-900/10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-400 font-mono block bg-slate-900/80 px-3.5 py-1.5 rounded-full w-max mx-auto border border-slate-800">
            About Our Academy
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
         Talent Science Academy, Where Excellence Meets Innovation
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded mx-auto mt-4" />
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
           Since 2020, Talent Science Academy has been empowering students with quality education in Mathematics, Physics, Chemistry, and Biology. Our experienced faculty, result-driven approach, and commitment to excellence prepare students for board examinations, entry tests, and successful careers in science and engineering.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Content (Left) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Our Educational Vision and Philosophy
              </h3>
              <p className="text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
               At Talent Science Academy, we believe that education is more than memorizing facts—it's about understanding concepts and developing the ability to think critically. Our teaching approach emphasizes clarity, logical reasoning, and practical problem-solving, enabling students to build a strong academic foundation.
              </p>
            </div>

            {/* Mission & Vision Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/85 hover:border-blue-500/40 shadow-sm relative group transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Our Mission</h4>
                <p className="text-xs sm:text-sm text-slate-400 font-sans mt-2 leading-relaxed">
                  To deliver stellar, concept-driven science education that secures top board achievements and guarantees competitive university admissions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/85 hover:border-teal-500/40 shadow-sm relative group transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Our Vision</h4>
                <p className="text-xs sm:text-sm text-slate-400 font-sans mt-2 leading-relaxed">
                  To elevate scientific thought in Faisalabad, establishing a benchmark where analytical reasoning and board-level accuracy go hand-in-hand.
                </p>
              </div>
            </div>

            {/* Pillar Points Check List */}
            <div className="space-y-3.5 pt-4">
              <h4 className="font-display font-bold text-lg text-white">
                The TSA Advantage — Why Students Choose Us
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-3">
                {valuePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Pillars Cards Display (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-xl tracking-tight block border-b border-slate-800 pb-3 font-mono uppercase text-xs tracking-wider text-blue-400">
              Key Instructional Pillars
            </h3>
            
            <div className="space-y-4">
              {pillars.map((pillar, i) => (
                <div 
                  key={i} 
                  className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/60 hover:bg-slate-900/80 hover:border-slate-700/80 transition-all duration-200 flex items-start gap-4 shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 ${pillar.color}`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base md:text-lg text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inspirational Quote Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-850 text-slate-300 border border-slate-800/80 shadow-lg shadow-slate-950/20">
              <span className="text-[10px] tracking-widest font-bold uppercase block text-blue-400 font-mono mb-2">
                Academy Principal Message
              </span>
              <p className="font-display font-semibold italic text-base leading-relaxed text-white">
                We don't just teach subjects—we teach students how to think, understand, and solve problems with confidence so that they can succeed in future.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-900/40 text-blue-300 border border-blue-800/50 flex items-center justify-center font-bold text-xs">
                  TSA
                </div>
                <div>
                  <h5 className="font-display font-bold text-xs text-white">Porf.ADNAN</h5>
                  <p className="text-[10px] text-slate-400 font-sans">Talent Science Academy Tandlianwala</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
