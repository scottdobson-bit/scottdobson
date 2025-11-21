export interface Song {
  id: string;
  title: string;
  duration: string;
  fileUrl: string; // Mock URL
  downloadCount?: number;
}

export interface Album {
  id: string;
  title: string;
  year: number;
  coverUrl: string;
  description: string;
  tracks: Song[];
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'twitter' | 'instagram' | 'youtube' | 'spotify' | 'mail';
}