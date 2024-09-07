const loadVideo = async (iframe) => {
    const cid = "UC36_js-krsAHAEAWpEDhHtw"; //this is the Channel ID from your Youtube channel URL
    const API_key = "&api_key=wmbjfv0ybbzjsaceaojxrbm9aaelzzq2bbe7mgws"; //in order to get your free public API_key, you will need to create an acc. in https://rss2json.com/
    const channelURL = encodeURIComponent(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`
    );
    const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}&api_key=${API_key}`;
    try {
      const response = await fetch(reqURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      if (result.items && result.items.length > 0) {
        const videoNumber = iframe.getAttribute("vnum");
        const link = result.items[videoNumber].link;
        const id = link.split("v=")[1];
        const thumbvid = result.items[videoNumber].image;
        iframe.setAttribute(
          "src",
          `https://youtube.com/embed/${id}?controls=1&autoplay=0`
        );

        const videoResponse = result.feed;
        console.log(videoResponse);
        const videoThumbnail = document.querySelector(
          ".youtubeThumbnail" ) as HTMLElement;
        if (videoResponse.image === "") {
          videoThumbnail.style.backgroundImage = `url('https://i3.ytimg.com/vi/28ATCe8AUAQ/hqdefault.jpg')`;
        } else {
          videoThumbnail.style.backgroundImage = `url(${videoResponse.image})`;
        }
      } else {
        throw new Error("No videos found in the feed.");
      }
    } catch (error) {
      console.error("Error loading video:", error);
    }
  };
