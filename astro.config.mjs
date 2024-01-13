import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import metaTags from "astro-meta-tags";

import astroMetaTags from "astro-meta-tags";

export default defineConfig({
	integrations: [astroMetaTags()],
});
