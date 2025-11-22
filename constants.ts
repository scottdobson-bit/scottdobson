
import { Album, SocialLink } from './types';

export const ARTIST_NAME = "Scott Dobson";
export const SPOTIFY_ARTIST_ID = "54bJfCtUt7inbtQg07ZIdd";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Spotify", url: `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`, iconName: "spotify" },
  { platform: "Suno (AI)", url: "https://suno.com/@scootied", iconName: "globe" },
  { platform: "Instagram", url: "#", iconName: "instagram" },
  { platform: "YouTube", url: "#", iconName: "youtube" },
];

// NOTE: The main Discography is handled by the Spotify Embed in components/Discography.tsx.
// This array is for the "Downloads" section, featuring exclusive content not found on streaming services.
export const DISCOGRAPHY: Album[] = [
  {
    id: "ai-experiments",
    title: "The Suno Archives (Vol. 1)",
    year: 2024,
    coverUrl: "https://picsum.photos/400/400?grayscale&blur=1",
    description: "Generative sketches and algorithmic compositions created via Suno AI.",
    spotifyAlbumId: "", 
    tracks: [
      { id: "s1", title: "Prompt: Neon Horizon", duration: "2:15", fileUrl: "#" },
      { id: "s2", title: "Algorithmic Drift (Demo)", duration: "3:42", fileUrl: "#" },
      { id: "s3", title: "Binary Soul", duration: "4:10", fileUrl: "#" },
    ]
  },
  {
    id: "human-sessions",
    title: "Analog/Digital",
    year: 2023,
    coverUrl: "https://picsum.photos/400/400?grayscale&random=2",
    description: "Bridging the gap between traditional instrumentation and neural networks.",
    spotifyAlbumId: "", 
    tracks: [
      { id: "l1", title: "Improvisation in A Minor", duration: "5:30", fileUrl: "#" },
      { id: "l2", title: "Echoes (Raw Stem)", duration: "4:45", fileUrl: "#" },
    ]
  }
];

export const ALL_DOWNLOADS = DISCOGRAPHY.flatMap(album => 
  album.tracks.map(track => ({
    ...track,
    albumTitle: album.title,
    albumCover: album.coverUrl
  }))
);
