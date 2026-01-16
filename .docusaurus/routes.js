import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/__docusaurus/debug',
    component: ComponentCreator('/documentation/__docusaurus/debug', 'c3b'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/config',
    component: ComponentCreator('/documentation/__docusaurus/debug/config', 'e83'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/content',
    component: ComponentCreator('/documentation/__docusaurus/debug/content', '8fc'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentation/__docusaurus/debug/globalData', 'f7c'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentation/__docusaurus/debug/metadata', 'dc0'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/documentation/__docusaurus/debug/registry', '352'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/documentation/__docusaurus/debug/routes', '7c8'),
    exact: true
  },
  {
    path: '/documentation/blog',
    component: ComponentCreator('/documentation/blog', '978'),
    exact: true
  },
  {
    path: '/documentation/blog/archive',
    component: ComponentCreator('/documentation/blog/archive', 'f74'),
    exact: true
  },
  {
    path: '/documentation/blog/authors',
    component: ComponentCreator('/documentation/blog/authors', '6b6'),
    exact: true
  },
  {
    path: '/documentation/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/documentation/blog/authors/all-sebastien-lorber-articles', '385'),
    exact: true
  },
  {
    path: '/documentation/blog/authors/yangshun',
    component: ComponentCreator('/documentation/blog/authors/yangshun', 'c52'),
    exact: true
  },
  {
    path: '/documentation/blog/first-blog-post',
    component: ComponentCreator('/documentation/blog/first-blog-post', '5e7'),
    exact: true
  },
  {
    path: '/documentation/blog/long-blog-post',
    component: ComponentCreator('/documentation/blog/long-blog-post', '0ab'),
    exact: true
  },
  {
    path: '/documentation/blog/mdx-blog-post',
    component: ComponentCreator('/documentation/blog/mdx-blog-post', '329'),
    exact: true
  },
  {
    path: '/documentation/blog/tags',
    component: ComponentCreator('/documentation/blog/tags', 'c5d'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/docusaurus',
    component: ComponentCreator('/documentation/blog/tags/docusaurus', '69f'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/facebook',
    component: ComponentCreator('/documentation/blog/tags/facebook', '91e'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hello',
    component: ComponentCreator('/documentation/blog/tags/hello', 'fbf'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hola',
    component: ComponentCreator('/documentation/blog/tags/hola', 'be1'),
    exact: true
  },
  {
    path: '/documentation/blog/welcome',
    component: ComponentCreator('/documentation/blog/welcome', '8da'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page', '1c7'),
    exact: true
  },
  {
    path: '/documentation/docs',
    component: ComponentCreator('/documentation/docs', 'ccd'),
    routes: [
      {
        path: '/documentation/docs',
        component: ComponentCreator('/documentation/docs', '0cd'),
        routes: [
          {
            path: '/documentation/docs',
            component: ComponentCreator('/documentation/docs', '540'),
            routes: [
              {
                path: '/documentation/docs/category/components',
                component: ComponentCreator('/documentation/docs/category/components', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/avatar',
                component: ComponentCreator('/documentation/docs/component/avatar', '677'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/badge',
                component: ComponentCreator('/documentation/docs/component/badge', '3c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/button',
                component: ComponentCreator('/documentation/docs/component/button', 'a18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/calendar',
                component: ComponentCreator('/documentation/docs/component/calendar', '537'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/card',
                component: ComponentCreator('/documentation/docs/component/card', 'ebd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/checkbox',
                component: ComponentCreator('/documentation/docs/component/checkbox', '7d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/contentCard',
                component: ComponentCreator('/documentation/docs/component/contentCard', '318'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/dataTable',
                component: ComponentCreator('/documentation/docs/component/dataTable', '777'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/dialog',
                component: ComponentCreator('/documentation/docs/component/dialog', '26d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/drawer',
                component: ComponentCreator('/documentation/docs/component/drawer', 'c46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/dropdown',
                component: ComponentCreator('/documentation/docs/component/dropdown', 'ba8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/heading',
                component: ComponentCreator('/documentation/docs/component/heading', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/input',
                component: ComponentCreator('/documentation/docs/component/input', 'e18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/inputNumber',
                component: ComponentCreator('/documentation/docs/component/inputNumber', '582'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/paper',
                component: ComponentCreator('/documentation/docs/component/paper', 'de9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/popover',
                component: ComponentCreator('/documentation/docs/component/popover', '461'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/progressbar',
                component: ComponentCreator('/documentation/docs/component/progressbar', '9e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/radio',
                component: ComponentCreator('/documentation/docs/component/radio', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/skeleton',
                component: ComponentCreator('/documentation/docs/component/skeleton', 'd78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/statCardA',
                component: ComponentCreator('/documentation/docs/component/statCardA', '382'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/statCardB',
                component: ComponentCreator('/documentation/docs/component/statCardB', '15e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/statCardC',
                component: ComponentCreator('/documentation/docs/component/statCardC', '80b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/switch',
                component: ComponentCreator('/documentation/docs/component/switch', '8c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/tabs',
                component: ComponentCreator('/documentation/docs/component/tabs', 'f22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/text',
                component: ComponentCreator('/documentation/docs/component/text', '7b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/textArea',
                component: ComponentCreator('/documentation/docs/component/textArea', '778'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/components',
                component: ComponentCreator('/documentation/docs/components', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/dependencies',
                component: ComponentCreator('/documentation/docs/dependencies', '482'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/globalsetup',
                component: ComponentCreator('/documentation/docs/globalsetup', '4ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/intro',
                component: ComponentCreator('/documentation/docs/intro', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/themes',
                component: ComponentCreator('/documentation/docs/themes', '8c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/tokens',
                component: ComponentCreator('/documentation/docs/tokens', '8ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/working_example',
                component: ComponentCreator('/documentation/docs/working_example', '1e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/documentation/',
    component: ComponentCreator('/documentation/', '4a1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
