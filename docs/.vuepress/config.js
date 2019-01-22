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
      { text: 'Home', link: '/' },
      { text: 'Categories', 
        items: [
          { text: 'FrontEnd', link: '/categories/frontEnd' },
          { text: 'BackEnd', link: '/categories/backEnd' },
          { text: 'Essay', link: '/categories/essay' },
          { text: 'Article', link: '/categories/article' },
          { text: 'Other', link: '/categories/other' }
        ]
      },
      { text: 'Tags', link: '/tags/' },
      { text: 'Three-Month Study', link: '/threeMonthStudy/' },
      { text: 'GitHub', link: 'https://github.com/recoluan/vuepress-theme-reco' },
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
      count: 66, // number of particle
    },
    // valine config
    valineConfig: {
      appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',// your appId
      appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr', // your appKey
    }
  }  
}  