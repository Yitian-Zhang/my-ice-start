const headerMenuConfig = [];

/**
 * 菜单配置
 */
const asideMenuConfig = [
  {
    name: 'Home',
    path: '/',
    icon: 'chart-pie',
  },

  {
    name: 'ReactStart', // react get start with blog
    path: '/react-get-start',
    icon: 'chart-pie',
  },

  {
    name: 'TicTacToe',
    path: '/tic-tac-toe',
    icon: 'chart-pie',
  },

  {
    name: 'ClockApp',
    path: '/clock-app',
    icon: 'chart-pie',
  },

  {
    name: '商家平台',
    icon: 'atm',
    children: [
      {
        path: '/seller',
        name: '商家首页',
      },
      {
        path: '/seller/list',
        name: '商家列表',
      },
      {
        path: '/seller/detail',
        name: '商家详情',
      },
      {
        path: '/seller/404',
        name: '商家 404',
      },
    ],
  },
  {
    name: '小二平台',
    icon: 'account',
    children: [
      {
        path: '/waiter',  // 这里的路径没有设置，怎么映射的？
        name: '小二首页',
      },
      {
        path: '/waiter/list',
        name: '小二列表',
      },
      {
        path: '/waiter/detail',
        name: '小二详情',
      },
      {
        path: '/waiter/404',
        name: '小二 404',
      },
    ],
  },
  {
    name: 'About',
    path: '/about',
    icon: 'chart-pie',
  },
];

export { headerMenuConfig, asideMenuConfig };
