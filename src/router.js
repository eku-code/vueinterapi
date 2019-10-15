import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import ('@/views/Main'),
      children: [
        {
          path: '/posts',
          name: 'Post',
          component: () => import ('@/components/Post')
        },
        {
          path: '/template',
          name: 'Template',
          component: () => import ('@/components/Template')
        },
        {
          path: '',
          name: 'Main',
          component: () => import ('@/components/Info')
        }
      ]
    }
  ]
})
