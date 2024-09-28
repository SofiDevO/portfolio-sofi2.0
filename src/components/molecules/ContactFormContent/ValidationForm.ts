const loader = document.querySelector(".loader") as HTMLDivElement;

// !messages formats
let ms200 = "El mensaje se envió correctamente 🚀"; // Mensaje de éxito
let ms300 = "Debes completar todos los campos 🙄"; // Mensaje de error
let ms400 = "Debes completar todos los campos 🙄"; // Mensaje de error

export const formValidation = () => {
  const form = document.querySelector("form") as HTMLFormElement;

  const name = form.querySelector("#name") as HTMLInputElement;
  const email = form.querySelector("#email") as HTMLInputElement;
  const subject = form.querySelector("#subject") as HTMLInputElement;
  const message = form.querySelector("#message") as HTMLInputElement;

  async function handleSubmit() {
    // obtenemos todos los datos insertados en el formulario
    const formData = new FormData(form);

    console.log(formData);
    console.log(ms200);
  }

  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    subject.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    alert("No puedes dejar este campo en blanco");
  } else return handleSubmit();
};
