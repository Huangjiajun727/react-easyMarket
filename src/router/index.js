import AsyncComponent from '../component/AsyncComponent';

const Home = AsyncComponent(() => import('../view/home'));
const Profile = AsyncComponent(() => import('../view/profile'));
const Login = AsyncComponent(() => import('../view/login'));
const Topic = AsyncComponent(() => import('../view/topic'));
const Cart = AsyncComponent(() => import('../view/cart'));
const Catelog = AsyncComponent(() => import('../view/catelog'));

const routes = [
    {
        name: '首页',
        isTab: true,
        link: '/home',
        component: Home
    },
    {
        name: '个人中心',
        isTab: true,
        link: '/profile',
        component: Profile
    },
    {
        name: '登录',
        link: '/login',
        isTab: false,
        component: Login
    },
    {
        name: '专题',
        link: '/topic',
        isTab: true,
        component: Topic
    },
    {
        name: '购物车',
        link: '/cart',
        isTab: true,
        component: Cart
    },
    {
        name: '分类',
        link: '/catelog',
        isTab: true,
        component: Catelog
    },
]

export default routes;