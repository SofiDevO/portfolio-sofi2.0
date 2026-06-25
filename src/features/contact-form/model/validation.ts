import ToastNotification from "@features/contact-form/model/toastAlerts";
import { words } from "@entities/user/model/words";

const loader = document.querySelector(".loader") as HTMLElement | null;

const ms200 = "The message was sent successfully 🚀";
const ms300 = "Does not meet the required format 🤡";
const ms400 = "You must complete all fields 🙄";
const ms500 = "You already used this email 😹🫵🏻";
const ms600 = "No te quieras hacer el Piola 😎";
const ms700 = "Messasage cannot be sent ";
const ms900 = "The name cannot contain numbers, signs, or hyphens";

function setCookie(name: string, value: string, days: number): void {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name: string): string | null {
  const cookieArr = document.cookie.split(";");
  for (const cookiePair of cookieArr) {
    const [key, val] = cookiePair.split("=");
    if (name === key.trim()) return decodeURIComponent(val);
  }
  return null;
}

function containsForbiddenWords(text: string): boolean {
  return words.some((word) => text.toLowerCase().includes(word));
}

export const formValidation = (): void => {
  const form = document.querySelector("form") as HTMLFormElement | null;
  if (!form) return;

  const synonyms: Record<string, string> = {
    name: "name",
    email: "email",
    subject: "subject",
    message: "message",
  };

  const errorMsg = {
    emptyField: (e: string) => `Please enter a ${synonyms[e]}`,
    invalidField: (e: string) => `Please enter a valid ${synonyms[e]} format`,
    minLength: (e: string) => `The ${synonyms[e]} must have at least 3 characters`,
    emailMaxLength: (e: string) => `The ${synonyms[e]} cannot exceed 15 characters`,
  };

  function validateField(field: string): boolean {
    const inputElement = form.querySelector(
      `#${field}`
    ) as HTMLInputElement | HTMLTextAreaElement | null;
    if (!inputElement) return false;

    const fieldValue = inputElement.value.trim();
    const errorElement = document.getElementById(`${field}Error`);
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    inputElement.classList.remove("input-success");

    let errorMessage = "";

    if (field === "name") {
      const namePattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
      if (!namePattern.test(fieldValue)) {
        errorMessage = ms900;
      }
    }

    if (!errorMessage && fieldValue === "") {
      errorMessage = errorMsg.emptyField(field);
    }

    if (!errorMessage && field === "email" && fieldValue.length > 30) {
      errorMessage = errorMsg.emailMaxLength(field);
    }

    if (!errorMessage && fieldValue.length < 3) {
      errorMessage = errorMsg.minLength(field);
    }

    if (!errorMessage && field === "email" && !emailPattern.test(fieldValue)) {
      errorMessage = errorMsg.invalidField(field);
    }

    if (errorElement) errorElement.textContent = errorMessage;
    inputElement.classList.toggle("input-error", !!errorMessage);

    if (!errorMessage) {
      inputElement.classList.add("input-success");
      return true;
    }
    return false;
  }

  function clearErrors(): void {
    ["nameError", "emailError", "subjectError", "messageError"].forEach((id) => {
      const el = document.querySelector(`#${id}`);
      if (el) el.textContent = "";
    });
  }

  async function handleSubmit(): Promise<void> {
    const formData = new FormData(form);
    const email = (formData.get("email") as string) ?? "";
    const message = (formData.get("message") as string) ?? "";

    if (getCookie("usedEmail") === email) {
      ToastNotification(ms500, "error");
      return;
    }

    if (containsForbiddenWords(email)) {
      ToastNotification(ms600, "error");
      return;
    }

    if (containsForbiddenWords(message)) {
      ToastNotification(ms700, "error");
      return;
    }

    try {
      loader?.classList.add("success");

      const response = await fetch("api/email-sender", {
        method: "POST",
        body: formData,
      });

      loader?.classList.remove("success");

      if (response.ok) {
        clearErrors();
        form.reset();
        setCookie("usedEmail", email, 2);
        ToastNotification(ms200, "success");
      } else {
        ToastNotification(ms300, "error");
      }
    } catch (error) {
      console.error("Error:", error);
      loader?.classList.remove("loading");
      ToastNotification(ms400, "error");
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = ["name", "email", "subject", "message"].every(validateField);
    if (isValid) {
      handleSubmit();
    } else {
      ToastNotification(ms400, "error");
    }
  });

  ["name", "email", "subject", "message"].forEach((field) => {
    const inputElement = form.querySelector(`#${field}`);
    inputElement?.addEventListener("blur", () => validateField(field));
  });
};
