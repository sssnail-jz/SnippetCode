import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import SnippetShow from '../views/snippet/show'
import SnippetEdit from '../views/snippet/edit'
import SnippetDetail from '../views/snippet/detail'
import Count from '../views/personal/Count.vue'
import Calculate from '../views/personal/Calculate.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      // 通过命名路由重定向
      redirect: { name: 'main' },
      children: [
        {
          path: 'main',
          name: 'main',
          component: Main,
          // 通过命名路由重定向
          redirect: { name: 'snippet-show' },
          children: [
            {
              path: 'snippet-show',
              name: 'snippet-show',
              component: SnippetShow
            },
            {
              path: 'snippet-create',
              name: 'snippet-create',
              component: SnippetEdit
            },
            {
              path: 'snippet-detail/:snippetId',
              name: 'snippet-detail',
              // 将路由参数转换为 props
              props: true,
              component: SnippetDetail
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

router.beforeEach((to, from, next) => {
  console.log(from.fullPath)
  console.log(to.fullPath)
  next()
})

export default router
