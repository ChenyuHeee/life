import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Life',
  description: '生活随笔 / 摄影 / 书单',
  base: '/life/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/life/icon.svg' }],
    ['meta', { name: 'theme-color', content: '#EC4899' }]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Hobbies', link: '/hobbies' },
      { text: 'Reading', link: '/reading' },
      { text: 'Gateway', link: 'https://chenyuheee.github.io/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/chenyuheee' }]
  }
})
