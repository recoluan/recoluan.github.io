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
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Categories', 
        icon: 'reco-category',
        items: [
          { items: [
            { text: 'FrontEnd', link: '/categories/frontEnd', icon: 'reco-npm' },
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
    //search config 
    search: true,
    searchMaxSuggestions: 10,
    // auto create sidebar
    sidebar: 'auto',
    // whether you can click the tags in the list
    tagClick: true,
    // last Updated Date
    lastUpdated: 'Last Updated', // string | boolean
    // particles
    showParticles: true,
    // particlesConfig
    particlesConfig: {
      color: '136, 136, 136', // color of line
      count: 100, // number of particle
    },
    // author
    author: 'reco_luan',
    // valine config
    valineConfig: {
      appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',// your appId
      appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr', // your appKey
    }
  }  
}  