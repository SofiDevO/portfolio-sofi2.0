import ToastNotification from "@src/controllers/toastAlerts.controller";

const loader = document.querySelector(".loader");

// Mensajes
let ms200 = "The message was sent successfully 🚀"; // Success message
let ms300 = "Does not meet the required format 🤡"; // Warning message
let ms400 = "You must complete all fields 🙄"; // Error message
let ms500 = "Yuou already used this email 😹🫵🏻"; // Email already used
let ms600 = "This email contains forbidden words"; // Forbidden words in email

export const formValidation = () => {
  const form = document.querySelector("form") as HTMLFormElement;

  // Función para guardar email en una cookie
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  // Función para obtener el valor de una cookie
  function getCookie(name) {
    const cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split("=");
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }

  // Palabras prohibidas
  const forbiddenWords = ["test", "falso", "prueba", "correo", ];

  // Validar si el email contiene palabras prohibidas
  function containsForbiddenWords(email) {
    return forbiddenWords.some((word) => email.toLowerCase().includes(word));
  }

  async function handleSubmit() {
    const formData = new FormData(form);
    const email = formData.get("email").toString();

    // Verificar si el email ya ha sido usado
    if (getCookie("usedEmail") === email) {
      ToastNotification(ms500, "error"); // Alerta de que el mensaje ya fue enviado
      return; // Detener el envío si el email ya fue usado
    }

    // Verificar si el email contiene palabras prohibidas
    if (containsForbiddenWords(email)) {
      ToastNotification(ms600, "error");
      return; // Detener el envío si el email contiene palabras prohibidas
    }

    try {
      loader.classList.add("success");

      const response = await fetch("api/email-sender", {
        method: "POST",
        body: formData,
      });

      loader.classList.remove("success");

      console.log("Response Status:", response.status);

      if (response.ok) {
        clearErrors();
        form.reset();
        // Guardar email en cookie por 2 días
        setCookie("usedEmail", email, 2);
        ToastNotification(ms200, "success");
      } else {
        ToastNotification(ms300, "error");
      }
    } catch (error) {
      console.error("Error:", error);
      loader.classList.remove("loading");
      ToastNotification(ms400, "error");
    }
  }

  function clearErrors() {
    ["nameError", "emailError", "subjectError", "messageError"].forEach(
      (id) => {
        document.querySelector(`#${id}`).textContent = "";
      }
    );
  }

  function validateField(field) {
    const inputElement = form.querySelector(`#${field}`) as HTMLInputElement;
    const fieldValue = inputElement.value.trim();
    const errorElement = document.getElementById(`${field}Error`);
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    inputElement.classList.remove("input-success");
    let errorMessage;

    let synonyms = {
      name: "name",
      email: "email",
      subject: "subject",
      message: "message",
    };

    let errorMsg = {
      emptyField: (e) => `Please enter a ${synonyms[e]}`,
      invalidField: (e) => `Please enter a valid ${synonyms[e]} format`,
    };

    if (fieldValue === "") {
      errorMessage = errorMsg.emptyField(field);
      errorElement.textContent = errorMessage;
      inputElement.classList.toggle("input-error", !!errorMessage);
      return false;
    }

    if (field === "email" && !emailPattern.test(fieldValue)) {
      errorMessage = errorMsg.invalidField(field);
      errorElement.textContent = errorMessage;
      inputElement.classList.toggle("input-error", !!errorMessage);
      return false;
    }

    inputElement.classList.remove("input-error");
    errorElement.textContent = "";
    inputElement.classList.add("input-success");
    return true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = ["name", "email", "subject", "message"].every((field) =>
      validateField(field)
    );

    if (isValid) {
      handleSubmit();
    } else {
      ToastNotification(ms400, "error");
    }
  });

  ["name", "email", "subject", "message"].forEach((field) => {
    const inputElement = form.querySelector(`#${field}`);
    inputElement.addEventListener("blur", () => validateField(field));
  });
};
