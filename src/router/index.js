import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Article from '../views/article/Article.vue'
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
          redirect: '/home/article',
          children: [
            {
              path: 'article',
              component: Article
            }
          ]
        }
      ]
    }
  ]
})

export default router
