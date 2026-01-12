const cardSection = document.querySelector(".card__section");
  const modal = document.querySelector("#portfolio-modal")
  const modalImg = document.querySelector(".modal__image")
  const modalTitle = document.querySelector(".modal__title")
  const modalDescription = document.querySelector(".modal__fragment")
  const modalTechnology = document.querySelector(".modal__technology")
  const modalDemo = document.querySelector(".modal__demo")
  const modalRepo = document.querySelector(".modal__repo")
  const closeBtn = document.querySelector(".close-btn")

  cardSection?.addEventListener("click", (e) => {
    const element = e.target ;

    const button = element.closest(".card__btn")
    if (!button) return;

    e.stopPropagation();

    const card = button.closest(".card") ;
    if (!card) return;

    const modalData = card.dataset.modal;
    if (!modalData) return;

    const data = JSON.parse(modalData);

    modalImg.src = data.imgSrc;
    modalImg.alt = `Imagen de portada de ${data.title}`;
    modalTitle.innerText = data.title;
    modalDescription.innerHTML = data.description;
    modalDemo.href = data.demoURL;
    modalRepo.href = data.repoURL;

    modalTechnology.innerHTML = "";
    const cardTechnology = card.querySelector(".technology") ;
    if (cardTechnology) {
      const skillsData = JSON.parse(cardTechnology.dataset.skills || '[]');
      const iconsData = JSON.parse(cardTechnology.dataset.icons || '[]');
      modalTechnology.innerHTML = iconsData
        .map((icon, index) => `
          <div class="skill-item">
            <iconify-icon icon="${icon}" width="40" height="40"></iconify-icon>
            <span class="skill__tooltip">${skillsData[index]}</span>
          </div>
        `)
        .join("");
    }

    modal.classList.add("open");
    modal.setAttribute("open", "true");
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