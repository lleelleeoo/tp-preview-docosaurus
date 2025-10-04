import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TP Preview',
  tagline: 'Articles and Opportunities',
  favicon: 'img/favicon.ico',

  url: 'https://lleelleeoo.github.io',
  baseUrl: '/tp-preview-docosaurus/',

  organizationName: 'lleelleeoo',
  projectName: 'tp-preview-docosaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'be',
    locales: ['be', 'en'],
    localeConfigs: {
      be: {
        label: 'Беларуская',
        direction: 'ltr',
        htmlLang: 'be-BY',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'articles',
        path: './content/blog',
        routeBasePath: 'articles',
        include: ['**/*.{md,mdx}'],
        blogTitle: 'Articles',
        blogDescription: 'Articles',
        blogSidebarCount: 0,
        showReadingTime: false,
        feedOptions: {
          type: null,
        },
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'opportunities',
        path: './content/blog',
        routeBasePath: 'opportunities',
        include: ['**/*.{md,mdx}'],
        blogTitle: 'Opportunities',
        blogDescription: 'Opportunities',
        blogSidebarCount: 0,
        showReadingTime: false,
        feedOptions: {
          type: null,
        },
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'TP Preview',
      hideOnScroll: false,
      items: [
        {
          to: '/articles',
          label: 'Articles',
          position: 'left',
        },
        {
          to: '/opportunities',
          label: 'Opportunities',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} TP Preview`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
