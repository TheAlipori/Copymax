/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			
			keyframes: {
				fadeIn: {
				  '0%': { opacity: '0' },
				  '100%': { opacity: '1' },
				},
				slideIn: {
				  '0%': { transform: 'translateY(100%)' },
				  '100%': { transform: 'translateY(0)' },
				},
			  },
			  animation: {
				fadeIn: 'fadeIn 2s ease-in-out',
				slideIn: 'slideIn 1s ease-out',
			  },
		},
	},
	plugins: [],
	darkMode: false, // Desactiva el modo oscuro

}
