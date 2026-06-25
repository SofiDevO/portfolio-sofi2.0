export const loadVideo = () => {
  const btnOpenModal = document.querySelector(".youtube__button");
  const closeModalBtn = document.querySelector(".youtube__close__button");
  const videoThumbnail = document.querySelector(".youtubeThumbnail");
  const fastYoutubeElement = document.querySelector("fast-youtube");
  const dialog = document.querySelector(".youtube__modal__box");

  if (!fastYoutubeElement || !btnOpenModal || !dialog || !closeModalBtn) return;

  const id = fastYoutubeElement.getAttribute("id");
  const poster = id ? `https://i1.ytimg.com/vi/${id}/hqdefault.jpg` : "";
  
  if (videoThumbnail) {
    videoThumbnail.style.backgroundImage = poster
      ? `url(${poster})`
      : "url('/img/portadaLIVE.png')";
  }

  btnOpenModal.addEventListener("click", () => {
    dialog.setAttribute("open", "true");
    dialog.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", () => {
    dialog.removeAttribute("open");
    dialog.style.display = "none";
    const iframe = fastYoutubeElement.querySelector("iframe");
    if (iframe) {
      // Reload iframe source to stop video playback
      iframe.src = iframe.src.split("?")[0];
    }
  });
};
