'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Conteneur principal - Design Editorial/SaaS Premium */}
      <div className="w-full max-w-6xl mx-auto bg-white rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.08)] overflow-hidden grid grid-cols-1 lg:grid-cols-5 animate-in fade-in zoom-in duration-700">
        
        {/* Panneau de gauche : Sombre & Élégant */}
        <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-between bg-charcoal text-parchment relative overflow-hidden">
          {/* Motif discret (dot grid) au lieu des gros cercles flous */}
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Let's build <br/><span className="font-bold">something great.</span>
            </h1>
            <p className="text-almond/80 text-lg mb-12 max-w-sm font-light leading-relaxed">
              Whether you have a question, a project idea, or just want to connect, I'd love to hear from you.
            </p>

            <div className="space-y-10">
              <div className="group flex items-start space-x-5">
                <div className="mt-1 w-12 h-12 flex items-center justify-center border border-white/20 rounded-full bg-white/5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/40 group-hover:scale-105 shrink-0">
                  <Mail className="w-5 h-5 text-parchment transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-almond/50 mb-1.5 font-semibold">Email</p>
                  <a href="mailto:yanis.chelghoum@epitech.eu" className="text-lg font-medium text-white hover:text-parchment transition-colors">
                    yanis.chelghoum@epitech.eu
                  </a>
                </div>
              </div>

              <div className="group flex items-start space-x-5">
                <div className="mt-1 w-12 h-12 flex items-center justify-center border border-white/20 rounded-full bg-white/5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/40 group-hover:scale-105 shrink-0">
                  <MapPin className="w-5 h-5 text-parchment transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-almond/50 mb-1.5 font-semibold">Location</p>
                  <p className="text-lg font-medium text-white">
                    Strasbourg, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-20 pt-8 border-t border-white/10 flex gap-4">
             <p className="text-sm text-almond/40 font-medium">Looking forward to our chat.</p>
          </div>
        </div>

        {/* Panneau de droite : Formulaire Minimaliste */}
        <div className="lg:col-span-3 p-10 lg:p-16 bg-[#FDFCFB]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-10 tracking-tight">Send a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Champ Nom (Floating Label) */}
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block py-3 px-0 w-full text-base text-charcoal bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-charcoal peer transition-colors"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-charcoal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Full Name
                  </label>
                </div>
                
                {/* Champ Email */}
                <div className="relative z-0 w-full group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block py-3 px-0 w-full text-base text-charcoal bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-charcoal peer transition-colors"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-charcoal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email Address
                  </label>
                </div>
              </div>

              {/* Champ Sujet */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block py-3 px-0 w-full text-base text-charcoal bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-charcoal peer transition-colors"
                  placeholder=" "
                />
                <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-charcoal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Subject
                </label>
              </div>

              {/* Champ Message */}
              <div className="relative z-0 w-full group">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="block py-3 px-0 w-full text-base text-charcoal bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-charcoal peer transition-colors resize-none"
                  placeholder=" "
                />
                <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-charcoal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Message
                </label>
              </div>

              {/* Bouton de soumission */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full sm:w-auto inline-flex items-center justify-center overflow-hidden rounded-full py-4 px-10 font-medium text-white transition-all duration-300 hover:shadow-xl hover:shadow-charcoal/20 ${
                    submitted 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-charcoal hover:bg-jetblack'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  <span className={`relative z-10 flex items-center justify-center gap-2 ${isSubmitting ? 'animate-pulse' : ''}`}>
                    {isSubmitting ? 'Sending...' : submitted ? 'Message sent!' : 'Send Message'}
                    {!isSubmitting && !submitted && <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
                  </span>
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}