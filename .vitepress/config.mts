import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: 'res/cpp_logo.svg' }]],
  title: "tiny blog ",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Petersen算法', link: '/Petersen算法' },
          { text: '折叠表达式', link: '/折叠表达式' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CrossroadW' }
    ],
    logo: 'res/cpp_logo.svg'
  }
})
