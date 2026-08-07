import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import vercelServerless from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import path from "path";

const __dirname = path.resolve();

// Variables and mixins are injected globally into every SCSS file via additionalData.
// Uses absolute paths so the custom importer is not needed for these two core files.
const scssGlobals = (cwd) => `
  @use "${cwd}/src/app/sass/_variables" as *;
  @use "${cwd}/src/app/sass/_mixins" as *;
`;

// https://astro.build/config
export default defineConfig({
  site: "https://itssofi.dev",
  env: {
    schema: {
      LOCAL_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      SITE_URL: envField.string({
        context: "client",
        access: "public",
      }),
      YT_API_KEY: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      CHANNEL_ID: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
  integrations: [react(), mdx()],
  output: "server",
  adapter: vercelServerless(),
  vite: {
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "src/app"),
        "@widgets": path.resolve(__dirname, "src/widgets"),
        "@features": path.resolve(__dirname, "src/features"),
        "@entities": path.resolve(__dirname, "src/entities"),
        "@shared": path.resolve(__dirname, "src/shared"),
        "@types": path.resolve(__dirname, "src/types"),
        "@pages": path.resolve(__dirname, "src/pages"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          // Globally injects _variables and _mixins into every SCSS file.
          // No need to @use them manually in individual partials.
          additionalData: scssGlobals(process.cwd()),
          importers: [
            {
              findFileUrl(url) {
                // SCSS @use/@forward alias resolution for FSD layers
                const aliases = {
                  "@app/": "src/app/",
                  "@widgets/": "src/widgets/",
                  "@features/": "src/features/",
                  "@entities/": "src/entities/",
                  "@shared/": "src/shared/",
                  "@types/": "src/types/",
                  "@pages/": "src/pages/",
                  "@types/": "src/types/",
                };

                const match = Object.entries(aliases).find(([alias]) =>
                  url.startsWith(alias),
                );

                if (match) {
                  const [alias, replacement] = match;
                  const relativePath = url.replace(alias, replacement);
                  return new URL(`file://${process.cwd()}/${relativePath}`);
                }
              },
            },
          ],
        },
      },
    },
  },
});
