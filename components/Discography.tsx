
import React from 'react';
import SectionTitle from './SectionTitle';
import { SPOTIFY_ARTIST_ID } from '../constants';

const Discography: React.FC = () => {
  // We use dangerouslySetInnerHTML to ensure the iframe attributes (specifically 'allow' and 'referrerpolicy')
  // are rendered exactly as required by the browser's security model for Encrypted Media (DRM).
  // React can sometimes sanitize or malform strict security attributes.
  const spotifyEmbedHtml = `
    <iframe 
      style="border-radius:12px" 
      src="https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0" 
      width="100%" 
      height="450" 
      frameBorder="0" 
      allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="eager"
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  `;

  return (
    <section id="discography" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Official Discography" subtitle="Streaming Everywhere" />
        
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-slate-800 p-1">
             <div 
               className="w-full"
               dangerouslySetInnerHTML={{ __html: spotifyEmbedHtml }} 
             />
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-slate-500 text-xs italic mb-6">
              * Playback may be limited to 30-second previews if you are not logged into Spotify Premium in this browser.
            </p>
          </div>
          
          <div className="text-center flex flex-col md:flex-row justify-center gap-4">
            <a 
              href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 rounded-full font-bold tracking-wide uppercase text-sm"
            >
              Open in Spotify
            </a>
            <a 
              href="https://suno.com/@scootied"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-full font-bold tracking-wide uppercase text-sm"
            >
              Explore Suno AI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discography;
