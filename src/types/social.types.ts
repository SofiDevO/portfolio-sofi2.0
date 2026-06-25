export interface SocialIcon {
  icon: string;
  name: string;
  link: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
}

export interface SendEmailPayload {
  email: string;
  html: string;
  subject: string;
  name: string;
}
