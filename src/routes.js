import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App';
import FormPage from './components/FormPage/FormPage';
import DefaultLayout from './layouts/DefaultLayout';
import index from './components/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: App,
      children: [
        {
          path: '/',
          name: 'app',
          component: DefaultLayout,
          children: [
            {
              path: '/',
              name: 'app.index',
              component: index
            },
            {
              path: 'form',
              name: 'app.form',
              component: FormPage
            }
          ]
        }
      ]
    }
  ]
});

export default router;
