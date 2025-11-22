
import { Album, SocialLink } from './types';

export const ARTIST_NAME = "Scott Dobson";
export const SPOTIFY_ARTIST_ID = "54bJfCtUt7inbtQg07ZIdd";
export const APPLE_MUSIC_ARTIST_URL = "https://music.apple.com/gb/artist/scott-dobson/1839466698";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Spotify", url: `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`, iconName: "spotify" },
  { platform: "Suno (AI)", url: "https://suno.com/@scootied", iconName: "globe" },
  { platform: "Facebook", url: "https://facebook.com/scottdobson", iconName: "facebook" },
];
