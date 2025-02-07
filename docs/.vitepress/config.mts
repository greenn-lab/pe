import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PE Answer Repository",
  description: "PEAR",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './assets/logo.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '7IF30EL09N',
        apiKey: '11c27ac00f06a90a8cb8ee1858860320',
        indexName: 'all-of-answer'
      }
    },

  }
})
