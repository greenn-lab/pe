import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Pear',
  tagline: 'PE Answers Repository',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://greenn-lab.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/pe/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'greenn-lab', // Usually your GitHub org/user name.
  projectName: 'pe', // Usually your repo name.

  // themes: ['@docusaurus/theme-search-algolia'],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
            id: 'answers',
            path: 'docs/answers',
            routeBasePath: '/',
            sidebarPath: './sidebars.ts',
            sidebarCollapsed: true,
            sidebarCollapsible: true,
            editUrl: 'https://github.com/greenn-lab/pe/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: '7IF30EL09N',
      apiKey: '3e61706213550b96176af29587bef541',
      indexName: 'greenn-pe-crawler',
      contextualSearch: true,
      // searchPagePath: 'search',
    },
    navbar: {
      title: 'Pear',
      logo: {
        alt: 'Wanna PE?',
        src: 'img/logo.png',
      }
    },
    footer: {
      style: 'dark',
      copyright: `(C)${new Date().getFullYear()} Green. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
