// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import {fileURLToPath} from "url";

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
	 script: [
		// <script src="https://myawesome-lib.js"></script>
	 ],
	 link: [
		// <link rel="stylesheet" href="https://myawesome-lib.css">
	 ],
	 // please note that this is an area that is likely to change
	 style: [
	 ],
	 noscript: [
		// <noscript>JavaScript is required</noscript>
	 ],
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
 styleResources: {
	//array of strings that are paths to the file:
	// stylus: ['@/assets/styles/variables.styl']
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
