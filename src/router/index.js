import Vue from 'vue'
import Router from 'vue-router'
import PageIndex from '@/components/PageIndex'
import PageAbout from '@/components/PageAbout'
import PagePlan from '@/components/PagePlan'
import PageMap from '@/components/PageMap'
import PageContact from '@/components/PageContact'
import PageWorks from '@/components/PageWorks'
import PageWorksIndep from '@/components/PageWorksIndep'
import PageTemplate from '@/components/PageTemplate'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/template',
      name: 'PageTemplate',
      component: PageTemplate
    }, {
      path: '/',
      name: 'PageIndex',
      component: PageIndex,
      meta: {
        nopadding: true
      }
    }, {
      path: '/about',
      name: 'PageAbout',
      component: PageAbout
    }, {
      path: '/works',
      name: 'PageWorks',
      component: PageWorks,
      meta: {
        nopadding: true
      }
    },{
      path: '/works/:id',
      name: 'PageWorksIndep',
      component: PageWorksIndep
    }, {
      path: '/map',
      name: 'PageMap',
      component: PageMap,
      meta: {
        // nopadding: true
      }
    }, {
      path: '/plan',
      name: 'PagePlan',
      component: PagePlan
    }, {
      path: '/contact',
      name: 'PageContact',
      component: PageContact
    }
  ]
})

router.beforeEach((to,from,next)=>{
  window.scrollTo(0,0)
  next()
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
  new WOW().init();

})

export default router