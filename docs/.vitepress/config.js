function nav() {
	return [
		{ text: 'Guide', link: '/guide/introduction/what-is-red' },
		{
			text: 'API Reference',
			items: [
				{ text: '1.2', link: '/1.2/Red' },
				{ text: '1.1', link: '/1.1/Red' },
				{ text: '1.0', link: '/1.0/Red' },
			]
		},
		{ text: 'Changelog', link: '/changelog' },
	]
}

function sidebar() {
	return {
		'/guide/': [
			{
				text: 'Introduction',
				items: [
					{ text: 'What is Red?', link: '/guide/introduction/what-is-red' },
					{ text: 'Installation & Tooling', link: '/guide/introduction/installation-tooling' },
					{ text: 'Where Next & FAQ', link: '/guide/introduction/where-next-faq' },
				]
			},
			{
				text: 'Namespaces',
				items: [
					{ text: 'What is a Namespace?', link: '/guide/namespaces/what-is-namespace' },
					{ text: 'Listening to Events', link: '/guide/namespaces/listening-events' },
					{ text: 'Sending and Invoking Events', link: '/guide/namespaces/sending-invoking-events' },
					{ text: 'Replicating Data', link: '/guide/namespaces/replicating-data' },
				]
			},
			{
				text: 'Hacking Red',
				items: [
					{ text: 'Introduction', link: '/guide/hacking-red/introduction' },
					{ text: 'Identifiers', link: '/guide/hacking-red/identifiers' },
					{ text: 'Event Data Structure', link: '/guide/hacking-red/event-data-structure' },
				]
			},
		],

		'/1.0/': [
			{
				text: 'API Reference',
				items: [
					{ text: 'Red', link: '/1.0/Red' },
					{ text: 'Server', link: '/1.0/Server' },
					{ text: 'Client', link: '/1.0/Client' },
					{ text: 'Promise', link: '/1.0/Promise' },
					{ text: 'Signal', link: '/1.0/Signal' },
					{ text: 'Clock', link: '/1.0/Clock' },
				]
			}
		],

		'/1.1/': [
			{
				text: 'API Reference',
				items: [
					{ text: 'Red', link: '/1.1/Red' },
					{ text: 'Server', link: '/1.1/Server' },
					{ text: 'Client', link: '/1.1/Client' },
					{ text: 'Promise', link: '/1.1/Promise' },
					{ text: 'Signal', link: '/1.1/Signal' },
					{ text: 'Clock', link: '/1.1/Clock' },
				]
			}
		],

		'/1.2/': [
			{
				text: 'API Reference',
				items: [
					{ text: 'Red', link: '/1.2/Red' },
					{ text: 'Server', link: '/1.2/Server' },
					{ text: 'Client', link: '/1.2/Client' },
					{ text: 'Promise', link: '/1.2/Promise' },
					{ text: 'Signal', link: '/1.2/Signal' },
					{ text: 'Clock', link: '/1.2/Clock' },
				]
			}
		],
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