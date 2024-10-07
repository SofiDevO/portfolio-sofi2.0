import nodemailer from "nodemailer";
import * as EmailValidator from "email-validator";

interface ISendEmail {
  email: string;  // Email del remitente
  html: string;   // Contenido del mensaje
  subject: string; // Asunto del mensaje
  name: string; // Nombre del remitente
}

async function sendEmail(props: ISendEmail) {
  const data = {
    email: import.meta.env.EMAIL, // Tu email autorizado
    host: import.meta.env.EMAIL_HOST,
    port: import.meta.env.EMAIL_PORT,
    user: import.meta.env.EMAIL,
    pass: import.meta.env.EMAIL_PASS,
  };

  // Verificación del formato del email
  if (!EmailValidator.validate(props.email)) {
    throw new Error("El correo electrónico no tiene un formato válido.");
  }

  let transporter = nodemailer.createTransport({
    host: data.host,
    port: data.port,
    secure: false,
    auth: {
      user: data.email,
      pass: data.pass,
    },
  });

  // Mensaje a enviar
  let messageToYou = {
    from: data.email, // Tu email (donde recibirás el mensaje)
    replyTo: props.email, // El correo de la persona que te contacta
    to: data.email, // Tu email (donde recibirás el mensaje)
    subject: props.subject,
    html: `
      <section style="padding: 1rem; height: 100%; width: 100%; font-family: Arial, sans-serif;">
        <header style="background-color: aliceblue; padding: 1rem; margin-bottom: 1rem;">
            <h1 style="text-align: center; font-size: 3rem; font-weight: 700; color: rgb(51, 0, 128);">Portfolio</h1>
        </header>
        <main>
            <p style="font-size: 18px; font-weight: bold; color: rgb(51, 0, 128); margin-bottom: 2rem;">Nombre: <span style="color: #010101; font-size: 16px;">${props.name}</span></p>
            <p style="font-size: 18px; font-weight: bold; color: rgb(51, 0, 128); margin-bottom: 2rem;">Email: <span style="color: #010101; font-size: 16px;">${props.email}</span></p>
            <p style="font-size: 18px; font-weight: bold; color: rgb(51, 0, 128); margin-bottom: 2rem;">Asunto: <span style="color: #010101; font-size: 16px;">${props.subject}</span></p>
            <p style="font-size: 18px; font-weight: bold; color: rgb(51, 0, 128);">Mensaje: <span style="color: #010101; font-size: 16px;">${props.html}</span></p>
        </main>
      </section>
    `,
  };

  try {
    let info = await transporter.sendMail(messageToYou);
    return info;

  } catch (error) {
    console.error("Error al enviar el correo:", error.message);
    throw new Error("No se pudo enviar el correo electrónico.");
  }
}

export { sendEmail };
