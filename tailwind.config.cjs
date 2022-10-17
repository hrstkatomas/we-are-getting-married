/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"dancing-sript": ["Dancing Script", "sans-serif"],
				cairo: ["Cairo", "sans-serif"],
			},
			keyframes: {
				fade: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			animation: {
				appear: "fade 1.5s ease-in",
				"appear-delayed": "fade 3s ease-in",
			},
			colors: {
				"midnight-purple": "#a48aa3",
			},
		},
	},
	plugins: [require("daisyui")],
};
