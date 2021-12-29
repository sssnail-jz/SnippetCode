import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import SnippetList from '../views/snippet/SnippetList.vue'
import SnippetDetail from '../views/snippet/SnippetDetail.vue'
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
          redirect: '/home/snippet-list',
          children: [
            {
              path: 'snippet-list',
              component: SnippetList
            },
            {
              path: 'snippet-create',
              component: SnippetDetail
            }
          ]
        }
      ]
    }
  ]
})

export default router
