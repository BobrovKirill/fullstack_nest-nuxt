// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
	head: {
	 charset: 'utf-16',
	 viewport: 'width=500, initial-scale=1',
	 htmlAttrs: {
		lang: 'ru'
	 },
	 title: 'nuxt.config.ts title',
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
		// <style type="text/css">:root { color: red }</style>
	 ],
	 noscript: [
		// <noscript>JavaScript is required</noscript>
	 ],

	},
 },
 modules: [
	'@pinia/nuxt',
 ],
 imports: {
	autoImport: false
 }
})
