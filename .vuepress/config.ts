import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: "午后南杂",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: 'reco',
  lang: 'zh-CN',
  themeConfig: {
    style: '@vuepress-reco/style-default',
    logo: '/head.png',
    // logo: '/hero_black.png',
    author: 'reco_luan',
    authorAvatar: '/head.png',
    docsRepo: 'https://github.com/recoluan/recoluan.github.io',
    docsBranch: 'gh-pages-source',
    lastUpdatedText: '',
    navbar:
    [
      { 
        text: 'Contact',
        children: [
          { text: 'GitHub', link: 'https://github.com/recoluan' },
          { text: '简书', link: 'https://www.jianshu.com/u/cd674a19515e' },
          { text: 'CSDN', link: 'https://blog.csdn.net/recoluan' },
          { text: '博客圆', link: 'https://www.cnblogs.com/luanhewei/' }
        ]
      }
    ],
    // valine 设置
    valineConfig: {
      appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',
      appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      verify: true, // 验证码服务
      // notify: true, //
      recordIP: true,
      // hideComments: true
    },
    autoAddCategoryToNavbar: true
  },
})
