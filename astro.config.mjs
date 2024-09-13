import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https:/Frida-ai.com",
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  experimental: {
    env: {
      schema: {
        EMAIL_HOST: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        EMAIL: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        EMAIL_PASS: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        EMAIL_PORT: envField.number({
          context: "server",
          access: "secret",
          optional: false,
        }),
        PUBLIC_BACKEND_URL: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        YT_API_KEY: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
      },
    },
  },
});
