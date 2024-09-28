import { g as getEnv, v as validateEnvVariable, a as getEnvFieldType, c as createInvalidVariablesError, s as setOnSetGetEnv } from '../../chunks/astro/env-setup_yWxC-x5k.mjs';
import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const schema = {"EMAIL_HOST":{"context":"server","access":"secret","type":"string","optional":false},"EMAIL":{"context":"server","access":"secret","type":"string","optional":false},"EMAIL_PASS":{"context":"server","access":"secret","type":"string","optional":false},"EMAIL_PORT":{"context":"server","access":"secret","type":"number","optional":false},"SITE_URL":{"context":"client","access":"public","type":"string","optional":false},"YT_API":{"context":"client","access":"public","type":"string","optional":false}};

// @ts-check

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};

// used while generating the virtual module
// eslint-disable-next-line @typescript-eslint/no-unused-vars
setOnSetGetEnv((reset) => {
	EMAIL_HOST = reset ? undefined : _internalGetSecret("EMAIL_HOST");
EMAIL = reset ? undefined : _internalGetSecret("EMAIL");
EMAIL_PASS = reset ? undefined : _internalGetSecret("EMAIL_PASS");
EMAIL_PORT = reset ? undefined : _internalGetSecret("EMAIL_PORT");

});
let EMAIL_HOST = _internalGetSecret("EMAIL_HOST");
let EMAIL = _internalGetSecret("EMAIL");
let EMAIL_PASS = _internalGetSecret("EMAIL_PASS");
let EMAIL_PORT = _internalGetSecret("EMAIL_PORT");

async function sendEmail(props) {
  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: true,
    auth: {
      user: EMAIL,
      pass: EMAIL_PASS
    }
  });
  let message = {
    from: process.env.EMAIL,
    to: EMAIL,
    subject: props.subject,
    html: `
      <section style="padding: 1rem; height: 100%; width: 100%; font-family: Arial, sans-serif;">
        <header style="background-color: aliceblue; padding: 1rem; margin-bottom: 1rem;">
            <h1 style="text-align: center; font-size: 3rem; font-weight: 700; color: rgb(51, 0, 128);">Nuevo mensaje desde el portafolio 🦝</h1>
        </header>
        <main>
            <p style="font-size: 18px;  font-weigth: bold color: rgb(51, 0, 128); margin-bottom: 2rem;">Nombre: <span style="color: #010101; font-size: 16px;">${props.name}</span></p>
            <p style="font-size: 18px; font-weigth: bold  color: rgb(51, 0, 128); margin-bottom: 2rem;">Email: <span style="color: #010101; font-size: 16px;">${props.email}</span></p>
            <p style="font-size: 18px;  font-weigth: bold color: rgb(51, 0, 128); margin-bottom: 2rem;">Asunto: <span style="color: #010101; font-size: 16px;">${props.subject}</span></p>
            <p style="font-size: 18px;  font-weigth: bold color: rgb(51, 0, 128); ">Mensaje: <span style="color: #010101; font-size: 16px;">${props.html}</span></p>
        </main>
      </section>
    `
  };
  let info = await transporter.sendMail(message);
  return info;
}

const ERROR = {
  EMAIL: "Email is required",
  // Error si el correo no se proporciona.
  NAME: "Name is required",
  // Error si el nombre no se proporciona.
  INVALID_MAIL: "Valid email is required",
  // Error si el correo proporcionado no es válido.
  MESSAGE: "Message is required",
  // Error si no se proporciona un mensaje.
  SUBJECT: "Subject is required",
  // Error si no se proporciona un asunto.
  SERVER: "Internal server error"
  // Error genérico para problemas con el servidor.
};
const POST = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name") || void 0;
  const email = formData.get("email") || void 0;
  const subject = formData.get("subject") || void 0;
  const message = formData.get("message") || void 0;
  if (!name) {
    return new Response(JSON.stringify({ message: ERROR.NAME }), { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({
      message: `${ERROR.INVALID_MAIL} or ${ERROR.EMAIL}`
    }), { status: 400 });
  }
  if (!message) return new Response(JSON.stringify({ message: ERROR.MESSAGE }), { status: 400 });
  if (!subject) return new Response(JSON.stringify({ message: ERROR.SUBJECT }), { status: 400 });
  const data = {
    name,
    // El nombre del remitente.
    email,
    // El correo del remitente.
    html: message,
    // El contenido del mensaje (se envía como HTML).
    subject
    // El asunto del correo.
  };
  try {
    await sendEmail(data);
    return new Response(JSON.stringify({
      success: true,
      // Indicamos que el envío fue exitoso.
      message: "Message sent successfully"
      // Mensaje de éxito.
    }));
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({ message: ERROR.SERVER }),
      { status: 500 }
      // Devolvemos un error de servidor.
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
