/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors:{
				'green-personalised': 'rgba(37,175,139,1)'
			}
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};
