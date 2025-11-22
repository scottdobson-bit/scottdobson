import { Album, SocialLink } from './types';

export const ARTIST_NAME = "Scott Dobson";
export const SPOTIFY_ARTIST_ID = "54bJfCtUt7inbtQg07ZIdd";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Spotify", url: `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`, iconName: "spotify" },
  { platform: "Suno (AI)", url: "https://suno.com/@scootied", iconName: "globe" },
  { platform: "Instagram", url: "#", iconName: "instagram" },
  { platform: "YouTube", url: "#", iconName: "youtube" },
];