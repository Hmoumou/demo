import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/two',
      name: 'two',
      component:()=>import('../components/two.vue')
    },
    {
      path: '/three',
      name: 'three',
      component:()=>import('../components/three.vue')
    }
  ]
})
