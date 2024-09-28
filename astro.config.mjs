import { defineConfig } from "astro/config";

import react from "@astrojs/react";


import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: vercelServerless(),

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
        SITE_URL: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
        YT_API: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
      },
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
  }
