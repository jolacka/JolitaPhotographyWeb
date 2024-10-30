import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import dotenv from 'dotenv'

// Load environment variables from the .env file
dotenv.config()

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: 'https://jolacka.github.io/Jolita-s-PHOTOGRAPHY/',
	base: '/JolitaPhotographyWeb/', // GitHub Pages repository name
	vite: {
		define: {
			// Pass the environment variable to front-end code
			'process.env.PUBLIC_CLOUDINARY_CLOUD_NAME': JSON.stringify(process.env.PUBLIC_CLOUDINARY_CLOUD_NAME),
			'process.env.PUBLIC_CLOUDINARY_API_KEY': JSON.stringify(process.env.PUBLIC_CLOUDINARY_API_KEY),
			'process.env.CLOUDINARY_API_SECRET': JSON.stringify(process.env.CLOUDINARY_API_SECRET),
			'process.env.INSTAGRAM_API_KEY': JSON.stringify(process.env.INSTAGRAM_API_KEY)
		},
		build: {
			rollupOptions: {
				output: {
					globals: {
						query: '?raw',
						import: 'default'
					}
				}
			}
		}
	}
})
