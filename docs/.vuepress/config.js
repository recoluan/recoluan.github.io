module.exports = {
  title: "Afternoon Grocery Store",
  description: 'Enjoy when you can, and endure when you master.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', 
        items: [
          { text: '前端', link: '/categories/front' },
          { text: '后端', link: '/categories/back' },
          { text: '随笔', link: '/categories/essay' },
          { text: '其他', link: '/categories/other' }
        ]
      },
      { text: '标签墙', link: '/tags/' },
      { text: '关于我', link: '/views/personalInfo/' },
      { text: 'GitHub', link: 'https://gitlab.com/recoluan/notes' },
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