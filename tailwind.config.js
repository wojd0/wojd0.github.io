/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			bahnschrift: ['Bahnschrift', 'sans-serif'],
			josefin: ['Josefin Sans', 'sans-serif'],
			lato: ['Lato', 'sans-serif'],
		},
	},
	plugins: [],
};
