function nav() {
	return [
		{ text: 'Version', items: [
			{ text: '0.1.x', link: '/0.1.x/guide/what-is-red'}
		]}
	]
}

function sidebar() {
	return {
		'/0.1.x/': [
			{
				text: 'Guide',
				items: [
					{ text: 'What is Red?', link: '/0.1.x/guide/what-is-red' },
					{ text: 'Getting Started', link: '/0.1.x/guide/getting-started' },
					{ text: 'Namespaces', link: '/0.1.x/guide/namespaces' },
				]
			},

			{
				text: 'API',
				items: [
					{ text: 'Red', link: '/0.1.x/api/red' },
					{ text: 'Server', link: '/0.1.x/api/server' },
					{ text: 'Client', link: '/0.1.x/api/client' },
				]
			},

			{
				text: 'Util',
				items: [
					{ text: 'Signal', link: '/0.1.x/util/signal' },
					{ text: 'Promise', link: '/0.1.x/util/promise' },
					{ text: 'Spawn', link: '/0.1.x/util/spawn' },
					{ text: 'Clock', link: '/0.1.x/util/clock' },
				]
			}
		]
	}
}

export default {
	title: 'Red',
	lang: 'en-US',
	head: [
		['link', { rel: 'icon', href: '/favicon.png' }],
	],

	themeConfig: {
		logo: '/logo.png',
		siteTitle: false,
		outline: 'deep',

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/uncontained0/red' },
			{ icon: 'discord', link: 'https://discord.gg/mchCdAFPWU' },
		],

		nav: nav(),
		sidebar: sidebar(),
	}
}