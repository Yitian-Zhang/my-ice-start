import * as React from 'react';
import { createApp } from 'ice'
import { ConfigProvider } from '@alifd/next';
import NotFound from '@/components/NotFound'; // 自定义组件
import PageLoading from '@/components/PageLoading'; // 自定义组件
import BasicLayout from '@/layouts/BasicLayout'; // 自定义组件

/**
 * 项目入口脚本
 */
const appConfig = {
  app: {
    rootId: 'icestark-container', // 定义在index.html页面中的root元素
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    ),
  },
  router: {
    type: 'browser',              // 本地开发启动配置，线上部署时修改改变
  },
  icestark: {
    type: 'framework',
    Layout: BasicLayout,          // 使用项目中自定义的BasicLayout布局
    getApps: async () => {
      const apps = [{
        path: '/seller',          // 页面请求路径
        title: '商家平台',
        url: [
          '//ice.alicdn.com/icestark/child-seller-react/index.js',
          '//ice.alicdn.com/icestark/child-seller-react/index.css',
        ],
      }, {
        path: '/waiter',
        title: '小二平台',
        url: [
          '//ice.alicdn.com/icestark/child-waiter-vue/app.js',
          '//ice.alicdn.com/icestark/child-waiter-vue/app.css'
        ],
      }, {
        // path: '/test',
        // title: 'test',
        // url: [
        //   'http://localhost:3334/js/index.js',
        //   'http://localhost:3334/css/index.css'
        // ]
      }];
      return apps;
    },
    appRouter: {
      NotFoundComponent: NotFound,
      LoadingComponent: PageLoading,
    },
  },
};

createApp(appConfig)
