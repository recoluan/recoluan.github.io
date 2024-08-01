import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: "Reco's Personal Homepage",
  description: "Reco's Personal Homepage",
  bundler: viteBundler(),
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: recoTheme({
    colorMode: "dark",
    style: "@vuepress-reco/style-default",
    logo: "/head.png",
    author: "reco_luan",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/recoluan/recoluan.github.io",
    docsBranch: "gh-pages-source",
    commentConfig: {
      type: "valine",
      options: {
        appId: "Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz",
        appKey: "iLQlev5jo2Cm5pLcI0z3qhtr",
        placeholder: "填写邮箱可以收到回复提醒哦！",
        verify: true, // 验证码服务
        // notify: true, //
        recordIP: true,
        // hideComments: true
      },
    },
  }),
});
