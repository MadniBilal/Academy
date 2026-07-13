import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../data';
import { Course } from '../types';
import * as LucideIcons from 'lucide-react';

interface CoursesProps {
  onCtaclick: (sectionId: string) => void;
}

export default function Courses({ onCtaclick }: CoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'FSc' | 'Matric'>('All');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const categories: ('All' | 'FSc' | 'Matric')[] = ['All', 'FSc', 'Matric'];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter(course => course.category === selectedCategory);

  // Helper to dynamically render a Lucide Icon by string name
  const renderIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return <LucideIcons.BookOpen className="w-6 h-6" />;
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden science-grid">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-400 font-mono block bg-slate-900/80 px-3.5 py-1.5 rounded-full w-max mx-auto border border-slate-800">
            Our Academic Programs
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
            Your Path to Academic Success
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded mx-auto mt-4" />
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            Select your path. Our specialized curriculums are engineered to help students conquer standard boards while unlocking advanced engineering and medical college entries.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setExpandedCourseId(null);
              }}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/15 scale-102 border border-blue-500'
                  : 'bg-slate-900 text-slate-400 border border-slate-800/80 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {category === 'All' ? 'All Programs' : category}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course: Course) => {
              const isExpanded = expandedCourseId === course.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={course.id}
                  className="bg-slate-900/40 rounded-3xl border border-slate-800/80 shadow-lg hover:shadow-2xl hover:border-slate-700/80 transition-all duration-300 overflow-hidden group flex flex-col h-full"
                >
                  {/* Top Bar Accent */}
                  <div className={`h-1.5 w-full ${
                    course.category === 'FSc' ? 'bg-blue-500' :
                    course.category === 'Matric' ? 'bg-indigo-500' : 'bg-teal-500'
                  }`} />

                  {/* Header / Main content */}
                  <div className="p-6 sm:p-8 flex-grow space-y-5">
                    
                    {/* Header: Icon & Category badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                        course.category === 'FSc' ? 'text-blue-400 bg-blue-950/40 border-blue-900/50' :
                        course.category === 'Matric' ? 'text-indigo-400 bg-indigo-950/40 border-indigo-900/50' :
                        'text-teal-400 bg-teal-950/40 border-teal-900/50'
                      }`}>
                        {renderIcon(course.iconName)}
                      </div>
                      <span className={`text-[10px] uppercase font-bold tracking-widest font-mono px-3 py-1 rounded-full border ${
                        course.category === 'FSc' ? 'text-blue-400 bg-blue-950/30 border-blue-900/40' :
                        course.category === 'Matric' ? 'text-indigo-400 bg-indigo-950/30 border-indigo-900/40' :
                        'text-teal-400 bg-teal-950/30 border-teal-900/40'
                      }`}>
                        {course.category} Stream
                      </span>
                    </div>

                    {/* Course Title */}
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <LucideIcons.Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">
                      {course.description}
                    </p>

                    {/* Collapsible Key Subjects & Features details */}
                    <div className="pt-2">
                      <button
                        onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                      >
                        {isExpanded ? 'Hide Program Syllabus' : 'View Syllabus & Key Benefits'}
                        <LucideIcons.ChevronDown className={`w-3.5 h-3.5 transition-transform duration-350 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-4 pt-4 border-t border-slate-800 space-y-4"
                          >
                            {/* Subjects list */}
                            <div className="space-y-2">
                              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 font-mono block">
                                Major Subjects Covered:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {course.subjects.map((sub, idx) => (
                                  <span key={idx} className="bg-slate-800/50 border border-slate-700/50 text-slate-300 px-2.5 py-1 rounded-lg text-xs font-medium font-sans">
                                    {sub}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Features Bullet details */}
                            <div className="space-y-2">
                              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 font-mono block">
                                Core Course Features:
                              </span>
                              <ul className="space-y-2">
                                {course.features.map((feat, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                                    <LucideIcons.Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                  {/* Bottom Action Grid */}
                  <div className="p-6 bg-slate-900/60 border-t border-slate-850 flex items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-500 font-mono font-medium">
                      Classes: Mon - Sat
                    </span>
                    <button
                      onClick={() => onCtaclick('contact')}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all flex items-center gap-1 group cursor-pointer"
                    >
                      Inquire / Enroll 
                      <LucideIcons.ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Free consultation call-out box */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-850 rounded-3xl p-8 text-white relative overflow-hidden border border-slate-800 shadow-2xl shadow-slate-950/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2 text-center md:text-left max-w-2xl relative z-10">
            <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
              Unsure which program fits your professional timeline?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Schedule a 100% free physical campus consultation. Our career advisers in Muhammad Bin Qasim school Tandlianwala will evaluate your pre-requisites and plan your optimal intermediate or entry test structure.
            </p>
          </div>
          <button
            onClick={() => onCtaclick('contact')}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/10 transition-all shrink-0 cursor-pointer text-sm"
          >
            Book Free Campus Consult
          </button>
        </div>

      </div>
    </section>
  );
}
