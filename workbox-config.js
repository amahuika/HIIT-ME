module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{wav,css,js,png,jpg,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};