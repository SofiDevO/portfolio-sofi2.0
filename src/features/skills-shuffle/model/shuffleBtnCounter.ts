const shuffleButton = document.querySelector<HTMLElement>(".image__button");
const hideSkills = document.querySelectorAll<HTMLElement>(".hero__skills");
let botonShuffle = 0;

export const clickHandler = (): void => {
  botonShuffle++;
  if (botonShuffle === 9) {
    document.documentElement.classList.add("customScheme");
    document.documentElement.classList.remove("dark", "dark-mode");
    localStorage.setItem("theme", "customScheme");
    hideSkills.forEach((skill) => {
      skill.style.display = "none";
    });
  }
};

export const initShuffleCounter = (): void => {
  shuffleButton?.addEventListener("click", clickHandler);
};
