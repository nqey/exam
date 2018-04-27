import Vue from 'vue';
import Router from 'vue-router';

const login = r => require.ensure([], (require) => { r(require('@/page/login')); }, 'login');
const loginMsg = r => require.ensure([], (require) => { r(require('@/page/login/msg')); }, 'loginMsg');
const exam = r => require.ensure([], (require) => { r(require('@/page/exam')); }, 'exam');
const examResult = r => require.ensure([], (require) => { r(require('@/page/exam/result')); }, 'examResult');

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/exam',
      name: 'exam',
      component: exam,
    },
    {
      path: '/exam/result',
      name: 'examResult',
      component: examResult,
    },
    {
      path: '/login/:id',
      name: 'login',
      component: login,
    },
    {
      path: '/msg',
      name: 'loginMsg',
      component: loginMsg,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({
      path: '/login',
    });
  } else {
    next();
  }
});

export default router;
