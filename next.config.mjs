const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
	i18n: {
		locales: ["cs"],
		defaultLocale: "cs",
	},
	images: {
		formats: ["image/avif", "image/webp"],
	},
}

export default nextConfig