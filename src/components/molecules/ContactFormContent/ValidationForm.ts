import ToastNotification from "@src/controllers/toastAlerts.controller";

const loader = document.querySelector(".loader") as HTMLDivElement;

// !messages formats
let ms200 = "El mensaje se envió correctamente 🚀"; // Mensaje de éxito
let ms300 = "No cumple con el formato requerido 🤔"; // Mensaje de alerta
let ms400 = "Debes completar todos los campos 🙄"; // Mensaje de error

export const formValidation = () => {
  const form = document.querySelector("form") as HTMLFormElement;

  async function handleSubmit() {
    // obtenemos todos los datos insertados en el formulario
    const formData = new FormData(form);

    try {
      // mostramos el loader mientras se procesa la solicitud
      loader.classList.add("success");

      // enviamos la solicitud a la api
      const response = await fetch("api/email-sender", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        loader.classList.remove("success");

        form.reset();

        ToastNotification(ms200, "success");
      } else {
        loader.classList.remove("success");

        ToastNotification(ms300, "error");
      }
    } catch (error) {
      ToastNotification(ms400, "error");
    }
  }

  ["name", "email", "subject", "message"].forEach((field) => {
    const inputField = document.getElementById(field) as HTMLInputElement;
    const errorApart = document.getElementById(`${field}Error`) as HTMLElement;

    const dataEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (inputField.value.trim() === "") {
      errorApart.textContent = "No puedes dejar este campo en blanco";
      inputField.classList.add("input-error");
    } else {
      if (field === "email" && !dataEmail.test(inputField.value.trim())) {
        errorApart.textContent = "Debes insertar un email válido";
        inputField.classList.add("input-error");
      } else {
        errorApart.textContent = "";
        inputField.classList.remove("input-error");
      }
    }
  });

  if (document.querySelectorAll(".input-error").length === 0) {
    handleSubmit();
  }
};
