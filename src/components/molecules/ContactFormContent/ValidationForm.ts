export const formValidation = () => {
  const form = document.querySelector("form") as HTMLFormElement;

  ["name", "email", "subject", "message"].forEach((field) => {
    const inputElement = form.querySelector(`#${field}`) as HTMLInputElement;
    console.log(inputElement);
  });
};
