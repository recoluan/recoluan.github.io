module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    }
  },
  authorAvatar: '/head.png',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'reco_luan',
  // valine 设置
  valineConfig: {
    appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',
    appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    notify: true,
    recordIP: true,
    hideListAccessNumber: true
  },
  friendLink: [
    {
      title: '午后南杂',
      desc: 'Enjoy when you can, and endure when you must.',
      email: '1156743527@qq.com',
      link: 'https://www.recoluan.com'
    },
    {
      title: 'vuepress-theme-reco',
      desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: 'https://vuepress-theme-reco.recoluan.com'
    },
  ],
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2017'
}