function nav() {
	return [
		{ text: 'Version', items: [
			{ text: '1.0', link: '/1.0/guide/what-is-red' },
			{ text: '1.1', link: '/1.1/guide/what-is-red' },
		]},
		{ text: 'Changelog', link: '/changelog' },
	]
}

function sidebar() {
	return {
		'/1.0/': [
			{
				text: 'Guide',
				items: [
					{ text: 'What is Red?', link: '/1.0/guide/what-is-red' },
					{ text: 'Getting Started', link: '/1.0/guide/getting-started' },
					{ text: 'Namespaces', link: '/1.0/guide/namespaces' },
					{ text: 'System Architecture', link: '/1.0/guide/systems' },
				]
			},
			{
				text: 'Reference',
				items: [
					{ text: 'Red', link: '/1.0/api/Red' },
					{ text: 'Server', link: '/1.0/api/Server' },
					{ text: 'Client', link: '/1.0/api/Client' },
					{ text: 'Promise', link: '/1.0/api/Promise' },
					{ text: 'Signal', link: '/1.0/api/Signal' },
					{ text: 'Clock', link: '/1.0/api/Clock' },
				]
			}
		],

		'/1.1/': [
			{
				text: 'Guide',
				items: [
					{ text: 'What is Red?', link: '/1.1/guide/what-is-red' },
					{ text: 'Getting Started', link: '/1.1/guide/getting-started' },
					{ text: 'Namespaces', link: '/1.1/guide/namespaces' },
					{ text: 'System Architecture', link: '/1.1/guide/systems' },
				],
			},
			{
				text: 'Reference',
				items: [
					{ text: 'Red', link: '/1.1/api/Red' },
					{ text: 'Server', link: '/1.1/api/Server' },
					{ text: 'Client', link: '/1.1/api/Client' },
					{ text: 'Promise', link: '/1.1/api/Promise' },
					{ text: 'Signal', link: '/1.1/api/Signal' },
					{ text: 'Clock', link: '/1.1/api/Clock' },
				]
			}
		]
	}
}

export default {
	title: 'Red',
	description: 'A simple, fast, and powerful networking library.',
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