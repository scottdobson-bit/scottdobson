import React from 'react';
import { ARTIST_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-white tracking-widest uppercase mb-1">{ARTIST_NAME}</h4>
          <p className="text-slate-500 text-sm">© {currentYear} All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 text-slate-500 text-sm">
           <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;