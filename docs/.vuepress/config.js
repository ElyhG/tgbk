module.exports = {
	head: [
		['link', { rel: 'icon', href: `favicon.ico` }]
	],
	title: '文化输出现象',
	description: '',
	base: '/',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/'	},
			{ text: '指路超话', link: 'https://weibo.com/p/100808e1cf1a9614404b6306213211856249d8/super_index' },
		],
		sidebar: {
			'/': [{
				title: '偷国纪实', collapsable: false, children: [
					// { title: '树莓派4b安装Ubuntu', path: 'raspberry-pi' },
				],
			}],
		},
		sidebarDepth: 4
	}
}