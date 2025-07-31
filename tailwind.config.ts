import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				tim: {
					blue: 'hsl(var(--tim-blue))',
					'blue-dark': 'hsl(var(--tim-blue-dark))',
					'blue-light': 'hsl(var(--tim-blue-light))',
					purple: 'hsl(var(--tim-blue))',
					orange: 'hsl(var(--tim-blue))',
					yellow: 'hsl(var(--tim-blue))',
					green: 'hsl(var(--tim-blue))'
				},
				button: {
					green: 'hsl(var(--button-green))',
					'green-hover': 'hsl(var(--button-green-hover))',
					orange: 'hsl(var(--button-orange))',
					'orange-hover': 'hsl(var(--button-orange-hover))'
				},
				'text-white': 'hsl(var(--text-white))',
				'text-muted': 'hsl(var(--text-muted))'
			},
			fontFamily: {
				heading: 'var(--font-heading)',
				body: 'var(--font-body)'
			},
			maxWidth: {
				container: 'var(--container-max)'
			},
			spacing: {
				'section': 'var(--section-padding)'
			},
			backgroundImage: {
				'gradient-tim': 'var(--gradient-tim)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'button': 'var(--shadow-button)',
				'hero': 'var(--shadow-hero)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
