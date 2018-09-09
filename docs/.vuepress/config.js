module.exports = {
  title: "Afternoon Grocery Store",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Categories', 
        items: [
          { text: 'FrontEnd', link: '/categories/front' },
          { text: 'BackEnd', link: '/categories/back' },
          { text: 'Essay', link: '/categories/essay' },
          { text: 'Other', link: '/categories/other' }
        ]
      },
      { text: 'Tags', link: '/tags/' },
      { text: 'GitHub', link: 'https://gitlab.com/recoluan/recoluan.gitlab.io' },
    ],
    //搜索
    search: true,
    searchMaxSuggestions: 10,
    // 自动生成文本
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
  }
}