// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-16',
			viewport: 'width=500, initial-scale=1',
			htmlAttrs: {
				lang: 'ru'
			},
			title: 'title',
			meta: [
				{charset: 'utf-8'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
				// <meta name="description" content="My amazing site">
				{name: 'description', content: 'My amazing site.'}
			],
			script: [],
			link: [],
			style: [],
			noscript: [],
		},
	},
	buildModules: [
		'@nuxtjs/style-resources',
		'@pinia/nuxt',
	],
	// css: [{ src: '~/assets/styles/reset.styl', lang: 'styl'}], <- Использовать для подгрузки критического css
	imports: {
		// autoImport: false
	},
	vite: {
		css: {
			preprocessorOptions: {
				stylus: {
					imports: [path.resolve(__dirname, './assets/styles/styl.styl')]
				}
			}
		}
	}
})
