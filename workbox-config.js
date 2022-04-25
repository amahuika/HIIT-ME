module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{wav,css,js,png,jpg,html,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};