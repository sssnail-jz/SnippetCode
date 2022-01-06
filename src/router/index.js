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
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Main,
          redirect: '/home/snippet-show',
          children: [
            {
              path: 'snippet-show',
              component: SnippetShow
            },
            {
              path: 'snippet-create',
              component: SnippetEdit
            },
            {
              path: 'snippet-detail',
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

export default router
