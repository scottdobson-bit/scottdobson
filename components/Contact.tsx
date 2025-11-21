import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Send, CheckCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission logic
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact Me" subtitle="Booking & Inquiries" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you're looking for live performance booking, custom composition for film/media, or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-lg border border-slate-800">
              <h4 className="text-amber-500 font-bold uppercase tracking-wide mb-6">Connect Elsewhere</h4>
              <div className="grid grid-cols-2 gap-4">
                 {SOCIAL_LINKS.map((link) => (
                   <a 
                    key={link.platform} 
                    href={link.url} 
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded"
                   >
                     <span className="uppercase text-sm font-medium">{link.platform}</span>
                   </a>
                 ))}
              </div>
            </div>

            <div className="text-slate-500 text-sm">
              <p>Management: mgmt@scottdobsonmusic.com</p>
              <p>Press: press@scottdobsonmusic.com</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-950 p-8 md:p-10 rounded-xl shadow-2xl border border-slate-800 relative overflow-hidden">
             {isSubmitted && (
              <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center z-20 animate-fade-in">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400 mt-2">I'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;