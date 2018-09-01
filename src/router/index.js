import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import pageOne from '@/components/pageOne'
import pageTwo from '@/components/pageTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageOne',
      component: pageOne
    },
    {
      path: '/pageTwo',
      name: 'pageTwo',
      component: pageTwo
    }
  ]
})
