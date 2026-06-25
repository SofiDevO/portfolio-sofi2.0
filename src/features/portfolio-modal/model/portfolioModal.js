const cardSection = document.querySelector(".card__section");
const modal = document.querySelector("#portfolio-modal");
const modalImg = document.querySelector(".modal__image");
const modalTitle = document.querySelector(".modal__title");
const modalDescription = document.querySelector(".modal__fragment");
const modalTecnology = document.querySelector(".modal-thecnology");
const modalDemo = document.querySelector(".modal__demo");
const modalRepo = document.querySelector(".modal__repo");
const closeBtn = document.querySelector(".close-btn");

cardSection?.addEventListener("click", (e) => {
  const element = e.target;

  const button = element.closest(".card__btn");
  if (!button) return;

  e.stopPropagation();

  const card = button.closest(".card");
  if (!card) return;

  const modalData = card.dataset.modal;
  if (!modalData) return;

  const data = JSON.parse(modalData);

  modalImg.src = data.imgSrc;
  modalImg.alt = `Imagen de portada de ${data.title}`;
  modalTitle.innerText = data.title;
  
  let finalContent = data.content || "";
  if (data.isRepoPrivate) {
    finalContent += `<span class="private-alert">Este proyecto es privado si eres reclutador puedes contactarme en el boton de abajo para solicitar acceso al repositorio</span>`;
  }
  modalDescription.innerHTML = finalContent;
  
  modalDemo.href = data.demoURL;
  
  if (data.isRepoPrivate) {
    modalRepo.href = "/contact";
    modalRepo.innerHTML = `Soy reclutador <iconify-icon icon="ic:baseline-mail" width="18" height="18"></iconify-icon>`;
  } else {
    modalRepo.href = data.repoURL;
    modalRepo.innerHTML = `Ver Repo <iconify-icon icon="mdi:github" width="18" height="18"></iconify-icon>`;
  }

  modalTecnology.innerHTML = "";
  const cardTecnology = card.querySelector(".thecnology");
  if (cardTecnology) {
    const skillsData = JSON.parse(cardTecnology.dataset.skills || "[]");
    const iconsData = JSON.parse(cardTecnology.dataset.icons || "[]");

    modalTecnology.innerHTML = iconsData
      .map(
        (icon, index) => `
          <div class="skill-item">
            <iconify-icon icon="${icon}" width="28" height="28"></iconify-icon>
            <span class="skill__tooltip">${skillsData[index]}</span>
          </div>
        `,
      )
      .join("");
  }

  modal.classList.add("open");
  modal.setAttribute("open", "true");

  // Remove Pinterest injected button from DOM
  setTimeout(() => {
    const pinterestBtn = document.querySelector(".pinsavepinterest-pin-it-button");
    if (pinterestBtn) {
      pinterestBtn.remove();
    }
  }, 100);
});

closeBtn?.addEventListener("click", () => {
  modal.classList.remove("open");
  modal.removeAttribute("open");
});

modal?.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
    modal.removeAttribute("open");
  }
});
