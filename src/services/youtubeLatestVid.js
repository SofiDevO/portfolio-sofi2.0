export const fetchYouTubeVideos = async (channelId) => {
  const API_key = import.meta.env.YT_API ? import.meta.env.YT_API : "";

  const channelURL = encodeURIComponent(
    `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
  );
  const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}&api_key=${API_key}`;

  console.log(reqURL);

  try {
    const response = await fetch(reqURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    if (result.items && result.items.length > 0) {
      return result.items;
    } else {
      throw new Error("No videos found in the feed.");
    }
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};
