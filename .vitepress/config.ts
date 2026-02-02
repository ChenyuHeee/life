import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Life',
  description: '生活随笔 / 摄影 / 书单',
  base: '/life/',
  themeConfig: {
    nav: [
      { text: 'Hobbies', link: '/hobbies' },
      { text: 'Reading', link: '/reading' },
      { text: 'Gateway', link: 'https://chenyuheee.github.io/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/chenyuheee' }]
  }
})
