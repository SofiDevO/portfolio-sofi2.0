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
    secure: true,
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
      <div style="background-color: #1a133b; padding: 28px 16px; font-family: Arial, sans-serif; width: 100%; -webkit-text-size-adjust: 100%;">
        <center>
          <table width="600" style="max-width:600px; width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding: 0 0 18px 0; text-align: center;">
                <div style="background: linear-gradient(90deg, rgba(120,84,255,0.12), rgba(80,44,200,0.08)); padding: 18px; border-radius: 10px; display: inline-block;">
                  <h1 style="margin:0; font-size:28px; color:#ffffff; font-weight:700; letter-spacing:0.2px;">Portfolio</h1>
                </div>
              </td>
            </tr>

            <tr>
              <td style="background-color: #241a3f; border-radius: 8px; padding: 18px; color: #e9e7ee;">
                <p style="margin:0 0 12px; font-size:16px;">
                  <strong style="color:#bdb6ff; display:inline-block; min-width:88px;">Nombre:</strong>
                  <span style="color:#ffffff; font-size:15px;">${props.name}</span>
                </p>

                <p style="margin:0 0 12px; font-size:16px;">
                  <strong style="color:#bdb6ff; display:inline-block; min-width:88px;">Email:</strong>
                  <span style="color:#ffffff; font-size:15px;">${props.email}</span>
                </p>

                <p style="margin:0 0 12px; font-size:16px;">
                  <strong style="color:#bdb6ff; display:inline-block; min-width:88px;">Asunto:</strong>
                  <span style="color:#ffffff; font-size:15px;">${props.subject}</span>
                </p>

                <p style="margin:0; font-size:16px; line-height:1.4;">
                  <strong style="color:#bdb6ff; display:block; margin-bottom:6px;">Mensaje:</strong>
                  <span style="color:#e6e4ef; font-size:15px;">${props.html}</span>
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding-top:16px; text-align:center; color:#9b94b8; font-size:12px;">
                Enviado desde el formulario de contacto
              </td>
            </tr>
          </table>
        </center>
      </div>
    `,
  };

  let info = await transporter.sendMail(message);
  return info;
}

export { sendEmail };
