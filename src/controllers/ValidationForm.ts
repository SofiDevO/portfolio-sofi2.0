import ToastNotification from "@src/controllers/toastAlerts.controller";

const loader = document.querySelector(".loader");

// Mensajes
let ms200 = "The message was sent successfully 🚀"; // Success message
let ms300 = "Does not meet the required format 🤔"; // Warning message
let ms400 = "You must complete all fields 🙄"; // Error message

export const formValidation = () => {
  const form = document.querySelector("form") as HTMLFormElement;

  async function handleSubmit() {
    const formData = new FormData(form);

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
    ["nameError", "emailError", "subjectError", "messageError"].forEach((id) => {
      document.querySelector(`#${id}`).textContent = "";
    });
  }

  function validateField(field) {
    const inputElement = form.querySelector(`#${field}`);
    const fieldValue = inputElement.value.trim();
    const errorElement = document.getElementById(`${field}Error`);
    let errorMsg = "";
    inputElement.classList.remove("input-success");

    switch (field) {
      case "name":
        if (fieldValue === "") {
          errorMsg = "Please enter your name.";
        } else {
          inputElement.classList.add("input-success");
        }
        break;
      case "email":
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (fieldValue === "") {
          errorMsg = "Please enter your email address.";
        } else if (!emailPattern.test(fieldValue)) {
          errorMsg = "Please enter a valid email address.";
        } else {
          inputElement.classList.add("input-success");
        }
        break;
      case "subject":
        if (fieldValue === "") {
          errorMsg = "Please enter a subject.";
        } else {
          inputElement.classList.add("input-success");
        }
        break;
      case "message":
        if (fieldValue === "") {
          errorMsg = "Please enter a message.";
        } else {
          inputElement.classList.add("input-success");
        }
        break;
    }
    inputElement.classList.remove("input-success");

    errorElement.textContent = errorMsg;
    inputElement.classList.toggle("input-error", !!errorMsg);
    return !errorMsg; // Return true if there is no error
  }

  // Validate all fields on submit
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const isValid = ["name", "email", "subject", "message"].every(field => validateField(field));

    if (isValid) {
      handleSubmit(); // Only submit if all fields are valid
    } else {
      ToastNotification(ms400, "error"); // Show error notification if validation fails
    }
  });

  // Add validation on blur for individual fields
  ["name", "email", "subject", "message"].forEach((field) => {
    const inputElement = form.querySelector(`#${field}`);
    inputElement.addEventListener("blur", () => validateField(field));
  });
};
