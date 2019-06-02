/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Formik',
  tagline: 'Build forms in React, without tears.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Formik',
      logo: {
        alt: 'Forik Logo',
        src: 'img/formik.svg',
      },
      style: 'dark',
      links: [
        // { doc: 'docs/overview', label: 'Docs', position: 'left' },
        // { page: 'docs/users', label: 'Users', position: 'left' },
        // { page: 'help', label: 'Help', position: 'left' },
        { to: 'docs/overview', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/jaredpalmer/formik',
          label: 'GitHub',
          position: 'right',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'The Palmer Group',
        src: 'img/palmer.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} The Palmer Group, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
        },
      },
    ],
  ],
};
