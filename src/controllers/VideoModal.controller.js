import { fetchYouTubeVideos } from '@src/services/youtubeLatestVid';

const btnOpenModal = document.querySelector(".youtube__button");
const closeModalBtn = document.querySelector(".modal__close__button");
const videoThumbnail = document.querySelector(".youtubeThumbnail");
const stopVideo = document.querySelector("iframe");
const channelId = "UC36_js-krsAHAEAWpEDhHtw"; // Youtube Channel ID

const initializeModal = (iframe, videoData) => {
  const videoNumber = iframe.getAttribute("vnum");
  const video = videoData[videoNumber];
  const videoId = video.link.split("v=")[1];
  const embeddUrl = `https://youtube.com/embed/${videoId}?controls=1&autoplay=1`;

  iframe.setAttribute("src", embeddUrl);
  videoThumbnail.style.backgroundImage = video.thumbnail === ""
    ? `url('/img/portadaLIVE.png')`
    : `url(${video.thumbnail})`;

  btnOpenModal.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    iframe.setAttribute("src", embeddUrl); // Autoplay video
  });

  closeModalBtn.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.close();
    stopVideo.setAttribute("src", ""); // Stop video
  });
};

export const loadVideo = async (iframe) => {
  try {
    const videoData = await fetchYouTubeVideos(channelId);
    initializeModal(iframe, videoData);
  } catch (error) {
    console.error("Error loading video:", error);
  }
};

// Initialize video modal for all iframes with class "latestVideoEmbed"
const iframes = document.getElementsByClassName("latestVideoEmbed");
if (iframes.length > 0) {
  loadVideo(iframes[0]);
}
