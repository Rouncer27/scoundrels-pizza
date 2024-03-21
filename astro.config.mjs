import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://scoundrelspizza.com",
  image: {
    domains: ["scoundrels.swbdatabases3.com"]
  },
  integrations: [sitemap(), react()]
});