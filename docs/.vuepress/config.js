module.exports = {
  title: "午后南杂",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Categories', 
        items: [
          { text: 'FrontEnd', link: '/categories/frontEnd' },
          { text: 'BackEnd', link: '/categories/backEnd' },
          { text: 'Essay', link: '/categories/essay' },
          { text: 'Other', link: '/categories/other' }
        ]
      },
      { text: 'Tags', link: '/tags/' },
      { text: 'Three-Month Study', link: '/threeMonthStudy/' },
      { text: 'GitHub', link: 'https://github.com/recoluan/vuepress-theme-reco' },
    ],
    logo: '/head.png',
    //搜索
    search: true,
    searchMaxSuggestions: 10,
    // 自动生成文本
    sidebar: 'auto',
    tagClick: true,
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
    // valine配置
    valineConfig: {
      appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',// your appId
      appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr', // your appKey
    }
  }
}