import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Map, ExternalLink } from 'lucide-react';
import { ACADEMY_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'fsc-medical',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple verification validations
    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError("Please enter a valid Pakistani contact phone number.");
      return;
    }

    setLoading(true);

    // Simulate server transaction
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const programLabels: Record<string, string> = {
    'fsc-medical': 'FSc Pre-Medical',
    'fsc-engineering': 'FSc Pre-Engineering',
    'matric': 'Matriculation (Science Group)',
    'general': 'General Campus Inquiry'
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Absolute graphic shapes */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-slate-900/10 rounded-full -z-10 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-400 font-mono block bg-slate-900/80 px-3.5 py-1.5 rounded-full w-max mx-auto border border-slate-800">
            Admissions and Inquiries
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
            Begin Your Academy Enrollment Today
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded mx-auto mt-4" />
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            Have questions about admissions, fees, class timing, or transport routes? Contact our Campus Tandlianwala office or fill out the pre-registration form below.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Info and Map Placeholder */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800/80">
            
            {/* Direct Details */}
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                Our Administrative Campus
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/40 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-900/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 font-mono tracking-wider">Campus Address</h4>
                    <p className="text-sm text-slate-300 font-sans mt-0.5 font-medium leading-relaxed">
                      {ACADEMY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/40 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-900/40">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 font-mono tracking-wider">Hotline & WhatsApp</h4>
                    <p className="text-sm text-slate-300 font-sans mt-0.5 font-medium">
                      Landline: {ACADEMY_INFO.phone} <br />
                      Cell: {ACADEMY_INFO.mobile}
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/40 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-900/40">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 font-mono tracking-wider">Admissions Email</h4>
                    <p className="text-sm text-slate-300 font-sans mt-0.5 font-mono">
                      {ACADEMY_INFO.email}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/40 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-900/40">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 font-mono tracking-wider">Admissions Office Hours</h4>
                    <p className="text-sm text-slate-300 font-sans mt-0.5 font-medium">
                      Mon - Sat: 08:00 AM - 08:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Faisalabad Map Visual Mock */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-slate-400 font-mono tracking-wider">Campus Location Map</h4>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900 h-48 flex items-center justify-center group">
                
                {/* Custom Vector Blueprint Map Representation */}
                <div className="absolute inset-0 science-grid-dark opacity-30 bg-slate-950 pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/90 text-center p-4">
                  <Map className="w-8 h-8 text-blue-400 mb-2 animate-float" />
                  <span className="text-xs font-mono text-blue-100 uppercase tracking-widest font-bold">
                    Peoples Colony No. 1
                  </span>
                  <span className="text-[10px] text-slate-400 font-sans mt-1">
                    Faisalabad, Punjab, Pakistan
                  </span>
                  
                  {/* Action Link Mock */}
                  <a
                    href={`https://maps.google.com/?q=${ACADEMY_INFO.mapCoordinates}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Open Google Maps <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Right: Interactive Admission Inquiry Card */}
          <div className="lg:col-span-7 bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-md">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white leading-tight">
                      Pre-Register / Admission Inquiry
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Provide details below to book a seat or request fee breakdowns.
                    </p>
                  </div>

                  {/* Error Notification */}
                  {error && (
                    <div className="p-3 bg-rose-950/40 border border-rose-900/50 text-rose-300 rounded-xl text-xs flex items-start gap-2 animate-pulse-subtle">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                      Student Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Zain Ali Butt"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:bg-slate-900/60 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>

                  {/* Contact Grid: Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Phone Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                        Contact Mobile No. <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="e.g. 03007654321"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:bg-slate-900/60 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. student@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:bg-slate-900/60 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>

                  </div>

                  {/* Program Stream Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="program" className="block text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                      Select Program Stream <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:bg-slate-900/60 focus:border-blue-500 outline-none transition-all cursor-pointer"
                    >
                      <option className="bg-slate-950" value="fsc-medical">FSc Pre-Medical (Intermediate)</option>
                      <option className="bg-slate-950" value="fsc-engineering">FSc Pre-Engineering (Intermediate)</option>
                      <option className="bg-slate-950" value="matric">Matriculation (Science Group)</option>
                      <option className="bg-slate-950" value="general">General Query / Career Consultation</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                      Your Query or Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Ask about fee structures, transport, or scholarships..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:bg-slate-900/60 focus:border-blue-500 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/40 disabled:text-slate-400 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Verifying and Registering...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Admission Inquiry</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success Feedback card state */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-4 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-emerald-950/40 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-900/50 shadow-sm animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
                      Inquiry Registered Successfully!
                    </h3>
                    <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                      Thank you <strong className="text-white font-semibold">{formData.name}</strong>. Your pre-registration for <span className="font-semibold text-blue-400">{programLabels[formData.program]}</span> has been stored in our system.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 max-w-sm w-full text-xs text-left space-y-2 text-slate-400">
                    <div>
                      <span className="font-mono uppercase font-bold text-[9px] text-slate-500 block">Assigned Program</span>
                      <span className="font-bold text-slate-200 text-xs sm:text-sm">{programLabels[formData.program]}</span>
                    </div>
                    <div>
                      <span className="font-mono uppercase font-bold text-[9px] text-slate-500 block">Assigned Contact Mobile</span>
                      <span className="font-mono font-bold text-blue-400 text-xs sm:text-sm">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="font-mono uppercase font-bold text-[9px] text-slate-500 block">Admissions Timeline</span>
                      <p className="font-sans leading-normal text-slate-400 mt-0.5">
                        Our admissions counselor will call you back within 24 hours to schedule your diagnostics test and provide fee catalog handouts.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', program: 'fsc-medical', message: '' });
                    }}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline cursor-pointer"
                  >
                    Submit Another Admissions Query
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
