import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";

import astroMetaTags from "astro-meta-tags";

export default defineConfig({
	integrations: [astroMetaTags(), react()],
});
