import { defineConfig } from 'umi';

const IS_WEB = !!process.env.IS_WEB;

const headScripts = IS_WEB
  ? []
  : [
      {
        content: `window.electron = require('electron')`,
      },
    ];

export default defineConfig({
  history: {
    type: 'hash',
  },
  hash: true,
  publicPath: './',
  outputPath: '../../dist/renderer',
  headScripts,
  favicon: '/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      redirect: '/mind',
    },
    {
      path: '/mind',
      component: './Mind',
    },
    {
      path: '/flow',
      component: './Flow',
    },
  ],
  title: '图形编辑器',
  devServer: {
    port: 8011,
  },
});
