import { Album, SocialLink } from './types';

export const ARTIST_NAME = "Scott Dobson";
export const SPOTIFY_ARTIST_ID = "54bJfCtUt7inbtQg07ZIdd";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Spotify", url: `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`, iconName: "spotify" },
  { platform: "Instagram", url: "#", iconName: "instagram" },
  { platform: "YouTube", url: "#", iconName: "youtube" },
  { platform: "Twitter", url: "#", iconName: "twitter" },
];

// NOTE: This array is now used primarily for the "Downloads" section to offer exclusive/demo tracks.
// The main Discography section uses the Spotify Artist Embed.
export const DISCOGRAPHY: Album[] = [
  {
    id: "album-1",
    title: "Echoes of the City (Demo)",
    year: 2023,
    coverUrl: "https://picsum.photos/400/400?random=1",
    description: "A gritty exploration of urban life through a fusion of jazz and electronic soundscapes.",
    spotifyAlbumId: "", 
    tracks: [
      { id: "t1", title: "Neon Rain", duration: "3:45", fileUrl: "#" },
      { id: "t2", title: "Subway Dreams", duration: "4:12", fileUrl: "#" },
      { id: "t3", title: "Midnight Coffee", duration: "2:58", fileUrl: "#" },
    ]
  },
  {
    id: "album-2",
    title: "The Quiet Hours (Acoustic)",
    year: 2021,
    coverUrl: "https://picsum.photos/400/400?random=2",
    description: "Acoustic sessions recorded in a remote cabin. Raw, emotional, and unfiltered.",
    spotifyAlbumId: "", 
    tracks: [
      { id: "t4", title: "Timberline", duration: "3:30", fileUrl: "#" },
      { id: "t5", title: "Fading Embers", duration: "4:05", fileUrl: "#" },
    ]
  },
  {
    id: "album-3",
    title: "Analog Heart",
    year: 2019,
    coverUrl: "https://picsum.photos/400/400?random=3",
    description: "Scott's debut album that started it all. Synth-pop anthems for the modern age.",
    spotifyAlbumId: "", 
    tracks: [
      { id: "t6", title: "Circuit Breaker", duration: "3:15", fileUrl: "#" },
      { id: "t7", title: "Digital Love", duration: "3:50", fileUrl: "#" },
      { id: "t8", title: "Rewind", duration: "4:20", fileUrl: "#" },
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