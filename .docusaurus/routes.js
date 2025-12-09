import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/documentation/docs', 'd60'),
    routes: [
      {
        path: '/documentation/docs',
        component: ComponentCreator('/documentation/docs', 'a4f'),
        routes: [
          {
            path: '/documentation/docs',
            component: ComponentCreator('/documentation/docs', 'cf2'),
            routes: [
              {
                path: '/documentation/docs/category/components',
                component: ComponentCreator('/documentation/docs/category/components', 'ae9'),
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
