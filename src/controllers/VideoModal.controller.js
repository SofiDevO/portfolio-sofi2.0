const btnOpenModal = document.querySelector(".youtube__button");
const closeModalBtn = document.querySelector(".modal__close__button");
const videoThumbnail = document.querySelector(".youtubeThumbnail");
const iframe = document.querySelector(".latestVideoEmbed");

const initializeModal = (iframe) => {
  // muestra el puro link del poster que esta dentro del video
  const poster = iframe.style.backgroundImage.slice(5, -2);

  // inserta el link dentro del apartado si existe el poster dentro del componente <Youtube/>
  // que esta dentro de YotubeModal.astro
  poster ? videoThumbnail.style.backgroundImage = `url(${poster})` : "url('/img/portadaLIVE.png')";

  const dialog = document.querySelector(".youtube__modal__box");

  btnOpenModal.addEventListener("click", () => {
    dialog.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", () => {
    dialog.style.display = "none";  
    const Video = document.querySelector(".latestVideoEmbed iframe");
    // pause el video si se esta reproduciendo después de cerrar la modal
    Video.src = Video.src.split("?")[0];
  });
};

export const loadVideo = () => {
  iframe ? initializeModal(iframe) : null
};

