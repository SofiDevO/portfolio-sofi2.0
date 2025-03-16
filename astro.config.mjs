import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import vercelServerless from "@astrojs/vercel";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://itssofi.dev",
  integrations: [react(), mdx()],
  output: "server",
  adapter: vercelServerless(),

    serverIslands: true,

});