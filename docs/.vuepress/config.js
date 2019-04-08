module.exports = {
  title: "午后南杂",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
    ],
    logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
    // 作者
    author: 'reco_luan',
    // valine 设置
    // valineConfig: {
    //   appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',
    //   appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr',
    // },
  },
  markdown: {
    lineNumbers: true
  }
}  