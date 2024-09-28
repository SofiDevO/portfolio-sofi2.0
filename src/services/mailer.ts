import nodemailer from "nodemailer";

interface ISendEmail {
  email: string;
  html: string;
  subject: string;
  name: string;
}

async function sendEmail(props: ISendEmail) {
  const data = {
    email: import.meta.env.EMAIL,
    host: import.meta.env.EMAIL_HOST,
    port: import.meta.env.EMAIL_PORT,
    user: import.meta.env.EMAIL,
    pass: import.meta.env.EMAIL_PASS,
  };

  let transporter = nodemailer.createTransport({
    host: data.host,
    port: data.port,
    secure: false,
    auth: {
      user: data.email,
      pass: data.pass,
    },
  });

  let message = {
    from: data.email,
    to: data.email,
    subject: props.subject,
    html: `
      <section style="padding: 1rem; height: 100%; width: 100%; font-family: Arial, sans-serif;">
        <header style="background-color: aliceblue; padding: 1rem; margin-bottom: 1rem;">
            <h1 style="text-align: center; font-size: 3rem; font-weight: 700; color: rgb(51, 0, 128);">Portfolio</h1>
        </header>
        <main>
            <p style="font-size: 18px;  font-weigth: bold color: rgb(51, 0, 128); margin-bottom: 2rem;">Nombre: <span style="color: #010101; font-size: 16px;">${props.name}</span></p>
            <p style="font-size: 18px; font-weigth: bold  color: rgb(51, 0, 128); margin-bottom: 2rem;">Email: <span style="color: #010101; font-size: 16px;">${props.email}</span></p>
            <p style="font-size: 18px;  font-weigth: bold color: rgb(51, 0, 128); margin-bottom: 2rem;">Asunto: <span style="color: #010101; font-size: 16px;">${props.subject}</span></p>
            <p style="font-size: 18px;  font-weigth: bold color: rgb(51, 0, 128); ">Mensaje: <span style="color: #010101; font-size: 16px;">${props.html}</span></p>
        </main>
      </section>
    `,
  };

  let info = await transporter.sendMail(message);
  return info;
}

export { sendEmail };
