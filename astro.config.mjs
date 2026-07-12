// @ts-check
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://janaushdhi.oriz.in",
	base: process.env.PUBLIC_BASE_PATH ?? "/",
	output: "static",
	trailingSlash: "ignore",
	build: { format: "directory" },
	prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
	integrations: [
		sitemap({
			changefreq: "daily",
			priority: 0.7,
			filter: (page) => !/\/(account|sign-in|sign-out|pricing)\/?$/.test(page),
		}),
		AstroPWA({
			registerType: "autoUpdate",
			injectRegister: null,
			strategies: "generateSW",
			manifest: {
				id: "/",
				name: "Janaushdhi — affordable generic medicines",
				short_name: "Janaushdhi",
				description:
					"Free price intelligence for Pradhan Mantri Jan Aushadhi generic medicines. No ads.",
				start_url: "/",
				scope: "/",
				display: "standalone",
				orientation: "portrait-primary",
				lang: "en-IN",
				background_color: "#FAFAF9",
				theme_color: "#0F766E",
				icons: [
					{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
					{ src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
					{
						src: "/icons/icon-maskable-192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "/icons/icon-maskable-512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
			},
			workbox: {
				globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest,woff,woff2}"],
				navigateFallback: null,
				// Never serve stale live-data / account routes.
				navigateFallbackDenylist: [/^\/(account|sign-in|sign-out|pricing)/],
				runtimeCaching: [
					{
						urlPattern: ({ url }) =>
							url.origin === self.location.origin &&
							!/^\/(account|sign-in|sign-out|pricing)/.test(url.pathname),
						handler: "StaleWhileRevalidate",
						options: { cacheName: "pages" },
					},
					{
						// Cross-origin (gov.in live data, analytics) → network only, never cache.
						urlPattern: ({ url }) => url.origin !== self.location.origin,
						handler: "NetworkOnly",
					},
				],
			},
		}),
	],
});
