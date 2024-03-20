import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://scoundrelspizza.com",
  image: {
    domains: ["scoundrels.swbdatabases3.com"]
  },
  integrations: [sitemap()]
});