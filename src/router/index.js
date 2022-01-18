import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import SnippetShow from '../views/snippet/show'
import SnippetEdit from '../views/snippet/edit'
import SnippetDetail from '../views/snippet/detail'
import Count from '../views/personal/Count.vue'
import Calculate from '../views/personal/Calculate.vue'
import SnippetLogin from '@/components/SnippetLogin'
import Profile from '../views/user/profile'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'login' }
    },
    {
      path: '/login',
      name: 'login',
      component: SnippetLogin
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { title: 'Home' },
      // 通过命名路由重定向
      redirect: { name: 'main' },
      children: [
        {
          path: 'main',
          name: 'main',
          component: Main,
          meta: { title: 'Main' },
          // 通过命名路由重定向
          redirect: { name: 'snippet-show' },
          children: [
            {
              path: 'snippet-show',
              name: 'snippet-show',
              meta: { title: 'SnippetShow' },
              component: SnippetShow
            },
            {
              path: 'snippet-create',
              name: 'snippet-create',
              meta: { title: 'SnippetCreate' },
              component: SnippetEdit
            },
            {
              path: 'snippet-detail/:snippetId',
              name: 'snippet-detail',
              props: true,
              meta: { title: 'SnippetDetail' },
              component: SnippetDetail
            },
            {
              path: 'profile/:userId',
              name: 'profile',
              props: true,
              meta: { title: 'Profile' },
              component: Profile
            },
            {
              path: 'count',
              component: Count
            },
            {
              path: 'calculate',
              component: Calculate
            }
          ]
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(from.fullPath)
//   console.log(to.fullPath)
//   next()
// })

export default router
