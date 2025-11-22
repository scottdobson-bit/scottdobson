import React from 'react';
import SectionTitle from './SectionTitle';
import { SPOTIFY_ARTIST_ID } from '../constants';
import { ExternalLink, Music, ArrowRight } from 'lucide-react';

const Discography: React.FC = () => {
  return (
    <section id="discography" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Official Discography" subtitle="Streaming Everywhere" />
        
        <div className="w-full max-w-5xl mx-auto">
          {/* Main Streaming Card */}
          <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Visual Side */}
            <div className="md:w-2/5 relative min-h-[300px] md:min-h-full">
              <img 
                src="https://picsum.photos/seed/scottmusic/800/800?grayscale" 
                alt="Latest Release" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">
                  On Spotify
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">Complete<br/>Collection</h3>
              </div>
            </div>

            {/* Content Side */}
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Experience the Music</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Dive into the complete discography. From atmospheric soundscapes to driving compositions, stream the full catalog in high fidelity directly on your preferred platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Music className="h-5 w-5" />
                  <span>Listen on Spotify</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
                
                <a 
                  href="https://suno.com/@scootied"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 border border-slate-700"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Suno AI Sketches</span>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800/50 flex items-center justify-between text-sm text-slate-500">
                <span>Latest releases available now</span>
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>Streaming Live</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Discography;