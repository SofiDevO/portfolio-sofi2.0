

import type { YouTubeVideo } from "@types/index";

interface YouTubeAPIResponse {
  items: Array<{
    id: { videoId: string };
    snippet: {
      title: string;
      description: string;
      thumbnails: { high: { url: string } };
      publishedAt: string;
    };
  }>;
}

interface VideoDetailsResponse {
  items: Array<{ contentDetails: { duration: string } }>;
}

/** Converts ISO 8601 duration to seconds (PT1M30S = 90 seconds) */
const parseDuration = (duration: string): number => {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  return (
    parseInt(match[1] || "0") * 3600 +
    parseInt(match[2] || "0") * 60 +
    parseInt(match[3] || "0")
  );
};

const fallbackVideoId = "bNFQxl92zu8";

const getFallbackVideo = (): YouTubeVideo => ({
  id: fallbackVideoId,
  title: "Astro Tema Oscuro Tutorial",
  description: "Fallback content when YouTube API is unavailable",
  thumbnail: `https://img.youtube.com/vi/${fallbackVideoId}/hqdefault.jpg`,
  publishedAt: new Date().toISOString(),
  duration: "PT15M30S",
});

/** Fetches the latest non-Short video from the channel */
export const fetchLatestYouTubeVideo = async (): Promise<YouTubeVideo | null> => {
  const API_KEY = import.meta.env.YT_API_KEY || import.meta.env.YT_API_SERVER || import.meta.env.YT_API;
  const CHANNEL_ID = import.meta.env.CHANNEL_ID;
  const SITE_URL = import.meta.env.PUBLIC_SITE_URL || import.meta.env.SITE_URL || "http://localhost:4321";

  if (!API_KEY) throw new Error("YouTube API key is missing");
  if (!CHANNEL_ID) throw new Error("YouTube Channel ID is missing");

  try {
    // 1. TRUCO DE OPTIMIZACIÓN (Costo: 1 unidad vs 100 unidades del search)
    // Convertimos el Channel ID (UC...) en el Playlist ID de videos subidos (UU...)
    const playlistId = CHANNEL_ID.replace(/^UC/, "UU");
    const playlistURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}`;

    // Agregamos el header Referer por si la API Key tiene restricciones de seguridad en Google Cloud
    const playlistResponse = await fetch(playlistURL, {
      headers: { Referer: SITE_URL },
    });

    if (playlistResponse.status === 403 || playlistResponse.status === 500) {
      console.warn(`YouTube API error ${playlistResponse.status}, using fallback video`);
      return getFallbackVideo();
    }

    if (!playlistResponse.ok) {
      throw new Error(`YouTube API error: ${playlistResponse.status}`);
    }

    const playlistData = await playlistResponse.json();

    if (!playlistData.items || !playlistData.items.length) {
      console.warn("YouTube API returned 0 videos. Check if your CHANNEL_ID is correct. Using fallback.");
      return getFallbackVideo();
    }

    // 2. Extraemos todos los IDs para hacer UNA SOLA petición agrupada de detalles (para ver la duración)
    const videoIds = playlistData.items.map((item: any) => item.snippet.resourceId.videoId).join(",");
    const detailsURL = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=contentDetails`;

    const detailsResponse = await fetch(detailsURL, {
      headers: { Referer: SITE_URL },
    });
    if (!detailsResponse.ok) {
      console.warn("Failed to fetch video details, using fallback.");
      return getFallbackVideo();
    }

    const detailsData: VideoDetailsResponse = await detailsResponse.json();
    const durationsMap = new Map();

    // Mapeamos las duraciones usando el ID de cada video devuelto
    detailsData.items?.forEach((item) => {
       durationsMap.set(item.id, item.contentDetails.duration);
    });

    // 3. Buscamos el primer video que dure más de 60 segundos
    for (const item of playlistData.items) {
      const videoId = item.snippet.resourceId.videoId;
      const duration = durationsMap.get(videoId);

      if (!duration || parseDuration(duration) < 60) continue;

      return {
        id: videoId
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
        publishedAt: item.snippet.publishedAt,
        duration,
      };
    }

    console.warn("All recent videos fetched were Shorts (under 60s). Using fallback.");
    return getFallbackVideo();
  } catch (error) {
    console.error("Error fetching YouTube video:", error);
    return getFallbackVideo();
  }
};
