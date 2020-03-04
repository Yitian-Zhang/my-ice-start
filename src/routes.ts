import Home from '@/pages/Home';
import About from '@/pages/About';
import ReactStart from '@/pages/ReactStart';
import TicGame from '@/components/TicGame';
import ClockApp from '@/pages/ClockApp';
import CommonApp from '@/pages/CommonApp';
import ProductFilterTable from '@/components/ProductFilterTable';
import UserDetailForm from '@/components/UserDetailForm';
import UserListTable from '@/components/UserListTable';
import UserCreateForm from '@/components/UserCreateForm';

/**
 * 项目路由配置
 */
const routes = [
  {
    path: '/user/create',
    component: UserCreateForm,
  },
  {
    path: '/user/list',
    component: UserListTable,
  },
  {
    path: '/user/detail',
    component: UserDetailForm,
  },
  {
    path: '/react-practice',
    component: ProductFilterTable,
  },
  {
    path: '/common-app',
    component: CommonApp,
  },
  {
    path: '/clock-app',
    component: ClockApp,
  },
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
