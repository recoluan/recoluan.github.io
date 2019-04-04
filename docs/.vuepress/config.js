module.exports = {
  title: "午后南杂",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Categories', 
        icon: 'reco-category',
        items: [
          { items: [
            { text: 'FrontEnd', link: '/categories/frontEnd' },
            { text: 'BackEnd', link: '/categories/backEnd' },
          ] },
          { items: [
            { text: 'Essay', link: '/categories/essay' },
            { text: 'Article', link: '/categories/article' },
          ] },
          {
            items: [
              { text: 'Other', link: '/categories/other' }
            ]
          }
        ]
      },
      { text: 'Tags', link: '/tags/', icon: 'reco-tag' },
      { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
      { text: 'Three-Month Study', link: '/threeMonthStudy/', icon: 'reco-three' },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'NPM', link: 'https://www.npmjs.com/~reco_luan', icon: 'reco-npm' },
          { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' },
          { text: '简书', link: 'https://www.jianshu.com/u/cd674a19515e', icon: 'reco-jianshu' },
          { text: 'CSDN', link: 'https://blog.csdn.net/recoluan', icon: 'reco-csdn' },
          { text: '博客圆', link: 'https://www.cnblogs.com/luanhewei/', icon: 'reco-bokeyuan' },
          { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A', icon: 'reco-wechat' },
        ]
      }
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
    valineConfig: {
      appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',// your appId
      appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr', // your appKey
    },
    // 密钥
    keyPage: {
      keys: ['930105'],
      color: '#fb9b5f',
      lineColor: '#fb9b5f'
    }
  },
  markdown: {
    lineNumbers: true
  } 
}  