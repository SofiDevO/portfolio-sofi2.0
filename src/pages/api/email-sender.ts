import type { APIRoute } from "astro";
import { sendEmail } from "@src/services/mailer";

const ERROR = {
  EMAIL: "Email is required",
  NAME: "Name is required",
  INVALID_MAIL: "Valid email is required",
  MESSAGE: "Message is required",
  SUBJECT: "Subject is required",
  SERVER: "Internal server error",
};

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const name = (formData.get("name") as string) || undefined;
  const email = (formData.get("email") as string) || undefined;
  const subject = (formData.get("subject") as string) || undefined;
  const message = (formData.get("message") as string) || undefined;

  if (!name) {
    return new Response(JSON.stringify({ message: ERROR.NAME }), {
      status: 400,
    });
  }

  // Email format validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({
        message: `${ERROR.INVALID_MAIL} or ${ERROR.EMAIL}`,
      }),
      { status: 400 }
    );
  }

  if (!message)
    return new Response(JSON.stringify({ message: ERROR.MESSAGE }), {
      status: 400,
    });

  if (!subject)
    return new Response(JSON.stringify({ message: ERROR.SUBJECT }), {
      status: 400,
    });

  const data = {
    name,
    email,
    html: message,
    subject,
  };

  try {
    await sendEmail(data);
    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully",
      })
    );
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({ message: ERROR.SERVER }),
      { status: 500 }
    );
  }
};
