import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://itssofi.dev",
  integrations: [react()],
  output: "server",
  adapter: vercelServerless(),
});
