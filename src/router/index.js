import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import SnippetList from '../views/snippet/SnippetList.vue'
import SnippetEdit from '../views/snippet/SnippetEdit.vue'
import Calculate from '../views/calculate/Calculate.vue'
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
              component: SnippetEdit
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
