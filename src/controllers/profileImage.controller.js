import { userData as user } from "@data/userData";
export const profilePicture = document.getElementById("profile-picture");
  function updateProfilePicture(isDark) {
    profilePicture.src = isDark ? user.profilePicture2 : user.profilePicture;
  }

  // Inicializar la imagen de perfil según el tema actual
  updateProfilePicture(document.documentElement.classList.contains("dark"));

  // Escuchar el evento de cambio de tema
  window.addEventListener("themeChange", (event) => {
    updateProfilePicture(event.detail.isDark);
  });
