import { fetchYouTubeVideos } from '@src/services/youtubeLatestVid';

const btnOpenModal = document.querySelector(".youtube__button");
const closeModalBtn = document.querySelector(".modal__close__button");
const videoThumbnail = document.querySelector(".youtubeThumbnail");
const stopVideo = document.querySelector("iframe");
const channelId = "UC36_js-krsAHAEAWpEDhHtw"; // Youtube Channel ID

const initializeModal = (iframe) => {
  const videoLink = iframe.getAttribute("data-link");
  const thumbnail = iframe.getAttribute("data-thumbnail");
  const videoId = videoLink.split("v=")[1];
  const embeddUrl = `https://youtube.com/embed/${videoId}?controls=1&autoplay=1`;

  videoThumbnail.style.backgroundImage = thumbnail === ""
    ? `url('/img/portadaLIVE.png')`
    : `url(${thumbnail})`;

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
    initializeModal(iframe);
};

// Initialize video modal for all iframes with class "latestVideoEmbed"
const iframes = document.getElementsByClassName("latestVideoEmbed");
if (iframes.length > 0) {
  loadVideo(iframes[0]);
}
