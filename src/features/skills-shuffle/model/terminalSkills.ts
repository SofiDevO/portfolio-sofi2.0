export const initTerminalSkills = (): void => {
  const sectionSkills = document.getElementById("skills__avatar");
  const skillsTerminal = document.querySelector<HTMLElement>(".skills__popup");
  const btnClose = document.querySelector<HTMLElement>(".btn__red");

  if (!sectionSkills || !skillsTerminal) return;

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillsTerminal.classList.add("active");
        btnClose?.addEventListener("click", () => {
          skillsTerminal.classList.remove("active");
        });
      } else {
        skillsTerminal.classList.remove("active");
      }
    });
  }, options);

  observer.observe(sectionSkills);

  const terminalPopover = document.querySelector<HTMLDialogElement>(".popup");
  btnClose?.addEventListener("click", () => {
    terminalPopover?.close();
  });
};
