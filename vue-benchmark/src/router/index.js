import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PostView from '../views/PostView.vue';

const routes = [
  {
    path: '/posts/:id',
    name: 'PostView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
    component: PostView,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
