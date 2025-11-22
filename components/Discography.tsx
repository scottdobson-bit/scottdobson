import React from 'react';
import SectionTitle from './SectionTitle';
import { SPOTIFY_ARTIST_ID } from '../constants';

const Discography: React.FC = () => {
  return (
    <section id="discography" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Discography" subtitle="Stream on Spotify" />
        
        <div className="w-full max-w-4xl mx-auto bg-slate-950 rounded-xl shadow-2xl overflow-hidden border border-slate-800">
          {/* 
             Spotify Artist Embed 
             This automatically pulls the Top Tracks, Latest Release, and Albums from the Artist ID.
          */}
          <iframe 
            style={{ borderRadius: '12px' }} 
            src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`} 
            width="100%" 
            height="450" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Scott Dobson Spotify Player"
          ></iframe>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors font-medium uppercase tracking-wider text-sm"
          >
            View Full Profile on Spotify &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Discography;