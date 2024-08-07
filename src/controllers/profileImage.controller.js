import { userData as data } from "@src/data/userData";

export const profilePicture = document.getElementById("profile-picture");

addEventListener("DOMContentLoaded", (event) => {
  function updateProfilePicture(isDark) {
    profilePicture.src = isDark ? data.profilePicture2 : data.profilePicture;
  }

  // Inicializar la imagen de perfil según el tema actual
  updateProfilePicture(document.documentElement.classList.contains("dark"));

  // Escuchar el evento de cambio de tema
  window.addEventListener("themeChange", (event) => {
    updateProfilePicture(event.detail.isDark);
  });
});
