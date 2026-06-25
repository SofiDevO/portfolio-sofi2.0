const toastBox = document.querySelector(".toast-alerts");

export default function ToastNotification(msg, type = "info") {
  if (!toastBox) {
    console.error("Toast container not found.");
    return;
  }

  let alertType;

  switch (type) {
    case "success":
      alertType = "success";

      break;
    case "error":
      alertType = "error";
      break;
    case "warning":
      alertType = "warning";
      break;
    default:
      alertType = "info";
  }

  // Create the toast
  const toast = document.createElement("div");
  toast.classList.add("toast-message", alertType);
  toast.innerHTML = msg;

  // Append the toast to the toastBox
  toastBox.appendChild(toast);
  toastBox.classList.add("show");

  // Eliminar el toast después de 5 segundos
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
