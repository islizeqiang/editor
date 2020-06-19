import { defineConfig } from 'umi';

export default defineConfig({
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
});
