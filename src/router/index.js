import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Test1 from '@/page/test/test1'
import Test2 from '@/page/test/test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }, {
      path: '/test1',
      component: Test1
    }, {
      path: '/test2',
      component: Test2
    }
  ]
})
