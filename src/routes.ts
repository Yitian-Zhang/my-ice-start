import Home from '@/pages/Home';
import About from '@/pages/About';
import ReactStart from '@/pages/ReactStart';
import TicGame from '@/components/TicGame';

/**
 * 项目路由配置
 */
const routes = [
  {
    path: '/tic-tac-toe',
    component: TicGame,
  },
  {
    path: '/react-get-start',
    component: ReactStart,
  },
  {
    path: '/about',   // 路由URL
    component: About, // 响应组件About
  },
  {
    path: '/', // 如果使用/，则需要放在最后面
    component: Home,
  }
];

export default routes;
