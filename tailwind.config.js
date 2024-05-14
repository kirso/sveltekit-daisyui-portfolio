import themes from 'daisyui/src/theming/themes'

const themeOverrides = {
	'--rounded-box': 'var(--radius)',
	'--rounded-btn': 'var(--radius)',
	'--tab-radius': 'var(--radius)',
	'--rounded-badge': 'calc(var(--radius) * 2)',
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		fontFamily: {
			sans: `var(--font-sans)`,
		},
		container: {
			center: true,
			padding: `var(--paddding-inline)`,
		},
		extend: {},
	},
	daisyui: {
		themes: [
			{light: {...themes.pastel, ...themeOverrides}},
			{dark: {...themes.night, ...themeOverrides}},
		],
	},
	plugins: [require('daisyui')],
}
