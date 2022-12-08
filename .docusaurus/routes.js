import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8cd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '655'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd90'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'acc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c87'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '770'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '217'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', '917'),
    exact: true
  },
  {
    path: '/coding-principles-for-teams',
    component: ComponentCreator('/coding-principles-for-teams', 'f94'),
    exact: true
  },
  {
    path: '/engineering-design-review',
    component: ComponentCreator('/engineering-design-review', '199'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '6ad'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '904'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '77c'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd55'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
