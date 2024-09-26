// Importamos el tipo APIRoute de Astro para definir la ruta de la API.
// También importamos la función 'sendEmail', que se encargará de enviar el correo electrónico.
import type { APIRoute } from 'astro';
import { sendEmail } from '@src/services/mailer';

// Definimos un objeto 'ERROR' que contiene mensajes de error comunes.
// Esto nos permite reutilizar mensajes de error en todo el código para una mejor organización.
const ERROR = {
    EMAIL: "Email is required",           // Error si el correo no se proporciona.
    NAME: "Name is required",             // Error si el nombre no se proporciona.
    INVALID_MAIL: "Valid email is required",  // Error si el correo proporcionado no es válido.
    MESSAGE: "Message is required",       // Error si no se proporciona un mensaje.
    SUBJECT: "Subject is required",       // Error si no se proporciona un asunto.
    SERVER: "Internal server error",      // Error genérico para problemas con el servidor.
}

// Definimos el método POST para manejar solicitudes POST a esta ruta de la API.
// Usamos 'async' ya que manejamos operaciones asíncronas como enviar correos.
export const POST: APIRoute = async ({ request }) => {

    // Extraemos los datos del formulario a partir de la solicitud (request).
    // 'request.formData()' nos da los datos del formulario que se enviaron.
    const formData = await request.formData();

    // Extraemos los campos 'name', 'email', 'subject', y 'message' del formulario.
    // Si alguno de estos campos no está presente, su valor será 'undefined'.
    const name = formData.get('name') as string || undefined;
    const email = formData.get('email') as string || undefined;
    const subject = formData.get('subject') as string || undefined;
    const message = formData.get('message') as string || undefined;

    // Validamos si el campo 'name' está vacío. Si es así, devolvemos un error 400.
    if (!name) {
        return new Response(JSON.stringify({message: ERROR.NAME}), { status: 400 });
    }

    // Validamos si el campo 'email' está vacío o si no tiene un formato válido de correo electrónico.
    // Si falla, devolvemos un error 400.
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return new Response(JSON.stringify({
            message: `${ERROR.INVALID_MAIL} or ${ERROR.EMAIL}`
        }), {status: 400});
    }

    // Validamos si el campo 'message' está vacío. Si es así, devolvemos un error 400.
    if (!message)  return new Response(JSON.stringify({message: ERROR.MESSAGE}), { status: 400 });

    // Validamos si el campo 'subject' está vacío. Si es así, devolvemos un error 400.
    if (!subject)  return new Response(JSON.stringify({message: ERROR.SUBJECT}), { status: 400 });

    // Creamos un objeto 'data' con la información que vamos a enviar en el correo electrónico.
    const data = {
        name,       // El nombre del remitente.
        email,      // El correo del remitente.
        html: message,  // El contenido del mensaje (se envía como HTML).
        subject,    // El asunto del correo.
    };

    // Intentamos enviar el correo electrónico usando 'sendEmail'.
    // Si todo sale bien, devolvemos una respuesta exitosa.
    try {
        await sendEmail(data);
        return new Response(JSON.stringify({
            success: true,  // Indicamos que el envío fue exitoso.
            message: "Message sent successfully"  // Mensaje de éxito.
        }));

    // Si ocurre algún error durante el envío del correo, lo capturamos y devolvemos un error 500.
    } catch (e) {
        console.error(e);  // Registramos el error en la consola para depuración.
        return new Response(
            JSON.stringify({message: ERROR.SERVER}), {status: 500}  // Devolvemos un error de servidor.
        );
    }
}
