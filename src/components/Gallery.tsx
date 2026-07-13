import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';
import { Eye, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'campus' | 'classroom' | 'labs' | 'events'>('all');
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const filters: { id: 'all' | 'campus' | 'classroom' | 'labs' | 'events'; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Campus Facade' },
    { id: 'classroom', label: 'Classrooms' },
    { id: 'labs', label: 'Laboratories' },
    { id: 'events', label: 'Events & Awards' }
  ];

  const filteredItems = selectedFilter === 'all'
    ? GALLERY
    : GALLERY.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Decorative vertical lines representing visual boundaries */}
      <div className="absolute right-0 top-0 w-12 h-full bg-slate-900/10 -z-10 border-l border-slate-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-400 font-mono block bg-slate-900/80 px-3.5 py-1.5 rounded-full w-max mx-auto border border-slate-800">
            Campus Galleries
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
            An Inspiring Environment Built for Focus
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded mx-auto mt-4" />
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            Take a virtual tour of our modern state-of-the-art campus in Peoples Colony, Faisalabad. Explore our physical science labs, modern classrooms, and high-energy student events.
          </p>
        </div>

        {/* Gallery Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer border ${
                selectedFilter === filter.id
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/15'
                  : 'bg-slate-900 text-slate-400 border-slate-800/80 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Interactive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-slate-800/80 shadow-sm cursor-pointer"
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
              >
                
                {/* Visual Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Glassy hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent transition-opacity duration-300 ${
                  hoveredItemId === item.id ? 'opacity-100' : 'opacity-0 sm:opacity-40'
                }`} />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end h-1/2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-350">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-blue-400 font-mono bg-blue-950/60 border border-blue-900/60 w-max px-2.5 py-0.5 rounded-md mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-sans mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Circular indicator top right */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-white" />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic visual placeholder note */}
        <div className="mt-12 bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl text-center flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
          <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
          <span>Faisalabad parents are always welcome to request a physical campus guided tour. Contact administration below.</span>
        </div>

      </div>
    </section>
  );
}
