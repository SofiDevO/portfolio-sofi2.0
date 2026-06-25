const themeToggleBtn = document.querySelector(".theme-toggle") as HTMLElement | null;

const applyTheme = (theme: string): void => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const initThemeToggle = (): void => {
  const savedTheme = localStorage.getItem("theme") ?? "dark";
  applyTheme(savedTheme);

  themeToggleBtn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
};
