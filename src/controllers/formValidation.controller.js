import ToastNotification from "@controllers/toastAlerts.controller"; // Importamos la función de notificaciones
const loader = document.querySelector(".loader"); // Seleccionamos el elemento con la clase 'loader' para mostrar un indicador de carga

let succesMsg = "el mensaje se envió correctamente 🚀"; // Mensaje de éxito
let errorMsg = "debes completar todos los campos 🙄"; // Mensaje de error
let alertMsg = "No cumple con el formato requerido 🤔"; // Mensaje de alerta
// Función principal que valida el formulario
export const formValidation = () => {
  // document.addEventListener("DOMContentLoaded", () => {
  //   const form = document.querySelector("form"); // Seleccionamos el formulario en la página

  //   // Función asincrónica que maneja el envío del formulario
  //   async function handleSubmit(form) {
  //     const formData = new FormData(form); // Recogemos los datos del formulario en un objeto FormData
  //     try {
  //       loader.classList.add("success"); // Mostramos un indicador de éxito mientras se procesa la solicitud
  //       const response = await fetch("/api/email-sender", {
  //         method: "POST", // Enviamos los datos del formulario usando el método POST
  //         body: formData, // Enviamos el FormData como cuerpo de la solicitud
  //       });

  //       if (response.ok) {
  //         const result = await response.json(); // Convertimos la respuesta a JSON
  //         // Limpiamos los mensajes de error si la respuesta es exitosa
  //         document.querySelector("#nameError").textContent = "";
  //         document.querySelector("#emailError").textContent = "";
  //         document.querySelector("#subjectError").textContent = "";
  //         document.querySelector("#messageError").textContent = "";
  //         loader.classList.remove("success"); // Quitamos el indicador de carga
  //         form.reset(); // Reiniciamos el formulario
  //         ToastNotification(succesMsg, "success"); // Mostramos una notificación de éxito
  //       } else {
  //         loader.classList.remove("success"); // Quitamos el indicador de carga si hay un error
  //         ToastNotification(errorMsg, "error"); // Mostramos una notificación de error
  //       }
  //     } catch (error) {
  //       console.error("Error:", error); // En caso de error en la solicitud, lo mostramos en la consola
  //     }
  //   }

  //   // Evento que captura el envío del formulario
  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault(); // Prevenimos el comportamiento por defecto (recargar la página)
  //     handleSubmit(form); // Llamamos a la función de envío del formulario
  //   });

  //   // Función que valida cada campo individualmente
  //   function validateField(field) {
  //     const inputElement = form.querySelector(`#${field}`); // Seleccionamos el campo que queremos validar
  //     const fieldValue = inputElement.value.trim(); // Obtenemos el valor del campo y eliminamos espacios en blanco
  //     const errorElement = document.getElementById(`${field}Error`); // Seleccionamos el elemento donde mostraremos el error
  //     let errorMsg = ""; // Inicializamos el mensaje de error vacío

  //     // Validamos los campos del formulario según el campo
  //     switch (field) {
  //       case "name":
  //         if (fieldValue === "") {
  //           errorMsg = "Please enter your name."; // Si el nombre está vacío, mostramos este error
  //           ToastNotification(errorMsg, "warning"); // Mostramos una notificación de advertencia
  //         }
  //         break;
  //       case "email":
  //         const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Expresión regular para validar emails
  //         if (fieldValue === "") {
  //           errorMsg = "Please enter your email."; // Si el campo de email está vacío
  //           ToastNotification(errorMsg, "warning");
  //         } else if (!emailPattern.test(fieldValue)) {
  //           errorMsg = "Please enter a valid email."; // Si el email no tiene un formato válido
  //           ToastNotification(errorMsg, "warning");
  //         }
  //         break;
  //       case "subject":
  //         if (fieldValue === "") {
  //           errorMsg = "Please enter a subject."; // Si el campo de asunto está vacío
  //           ToastNotification(errorMsg, "warning");
  //         }
  //         break;
  //       case "message":
  //         if (fieldValue === "") {
  //           errorMsg = "Please enter your message."; // Si el mensaje está vacío
  //           ToastNotification(errorMsg, "warning");
  //         }
  //         break;
  //     }

  //     // Mostramos el mensaje de error en la página si es necesario
  //     errorElement.textContent = errorMsg;

  //     // Si hay un error, añadimos una clase CSS de error al input
  //     inputElement.classList.toggle("input-error", !!errorMsg);
  //   }

  //   // Iteramos sobre los campos que queremos validar: nombre, email, asunto y mensaje
  //   ["name", "email", "subject", "message"].forEach((field) => {
  //     const inputElement = form.querySelector(`#${field}`); // Seleccionamos cada campo
  //     // Añadimos un evento que valida el campo cuando el usuario deja de enfocarlo (blur)
  //     inputElement.addEventListener("blur", () => validateField(field));
  //   });
  // });
}
