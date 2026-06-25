import { userData } from "@entities/user/model/userData";

const profilePicture = document.getElementById("profile-picture") as HTMLImageElement | null;

const updateProfilePicture = (isDark: boolean): void => {
  if (!profilePicture) return;
  profilePicture.src = isDark ? userData.profilePicture2 : userData.profilePicture;
};

export const initProfileImage = (): void => {
  updateProfilePicture(document.documentElement.classList.contains("dark"));

  window.addEventListener("themeChange", (event: Event) => {
    const customEvent = event as CustomEvent<{ isDark: boolean }>;
    updateProfilePicture(customEvent.detail.isDark);
  });
};
