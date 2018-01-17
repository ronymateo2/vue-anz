import Vue from 'vue'
import Router from 'vue-router'
import Brochure from '@/components/Brochure/Brochure'
import Trash from '@/components/Trash/Trash'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Brochure',
      component: Brochure
    }, {
      path: '/trash',
      name: 'Trash',
      component: Trash
    }
  ]
})
