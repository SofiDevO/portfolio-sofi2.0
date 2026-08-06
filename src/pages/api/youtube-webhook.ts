import type { APIRoute } from "astro/dist";
import crypto from "node:crypto";

// GET endpoint to handle the WebSub verification challenge
export const GET: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  const challenge = url.searchParams.get("hub.challenge");

  if (challenge) {
    // Return the challenge with a 200 status code to verify the webhook
    return new Response(challenge, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return new Response("Missing hub.challenge", { status: 400 });
};

// POST endpoint to handle incoming notifications when a new video is published
export const POST: APIRoute = async ({ request }) => {
  try {
    const rawBody = await request.text();
    const secret = import.meta.env.YT_SECRET;

    if (secret) {
      const signature = request.headers.get("x-hub-signature");
      if (!signature) {
        console.error("Missing x-hub-signature header.");
        return new Response("Forbidden: Missing signature", { status: 403 });
      }

      const expectedSignature = `sha1=${crypto
        .createHmac("sha1", secret)
        .update(rawBody)
        .digest("hex")}`;

      if (signature !== expectedSignature) {
        console.error("Invalid x-hub-signature.");
        return new Response("Forbidden: Invalid signature", { status: 403 });
      }
    }

    const deployHookUrl = import.meta.env.VERCEL_DEPLOY_HOOK_URL;

    if (!deployHookUrl) {
      console.error("VERCEL_DEPLOY_HOOK_URL is not configured.");
      return new Response("Webhook received but Vercel deploy hook is not configured.", { status: 500 });
    }


    const vercelResponse = await fetch(deployHookUrl, {
      method: "POST",
    });

    if (vercelResponse.ok) {
      console.log("Successfully triggered Vercel deploy hook.");
      return new Response("Webhook received and deploy triggered.", { status: 200 });
    } else {
      console.error(`Failed to trigger Vercel deploy: ${vercelResponse.statusText}`);
      return new Response("Webhook received but failed to trigger deploy.", { status: 500 });
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
