import Vue from 'vue'
import Router from 'vue-router'
import PageIndex from '@/components/PageIndex'
import PageAbout from '@/components/PageAbout'
import PagePlan from '@/components/PagePlan'
import PageMap from '@/components/PageMap'
import PageContact from '@/components/PageContact'
import PageNews from '@/components/PageNews'
import PageWorks from '@/components/PageWorks'
import PageWorksIndep from '@/components/PageWorksIndep'
import PageWorksIndepData from '@/components/PageWorksIndepData'
import PageTemplate from '@/components/PageTemplate'

import SectionHohoho from '@/sections/hohoho'
import SectionPrismatic from '@/sections/prismatic'
import SectionMushroom from '@/sections/mushroom'
import SectionEng82 from '@/sections/eng82'
Vue.use(Router)

let router =  new Router({
  // mode: "history",
  // base: "/THE2018/",
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
    }, {
      path: '/works/n/:workname',
      name: 'PageWorksIndep',
      component: PageWorksIndep,
      meta: {
        type: "description"
      }
    }, {
      path: '/works/n/:workname/data',
      name: 'PageWorksIndep',
      component: PageWorksIndep,
      meta: {
        type: "data"
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
      path: '/news',
      name: 'PageNews',
      component: PageNews
    }, {
      path: '/contact',
      name: 'PageContact',
      component: PageContact
    }, {
      path: '/hohoho',
      name: 'SectionHohoho',
      component: SectionHohoho
    }, {
      path: '/prismatic',
      name: 'SectionPrismatic',
      component: SectionPrismatic
    }, {
      path: '/app/hohoho',
      name: 'SectionHohoho',
      component: SectionHohoho
    }, {
      path: '/app/prismatic',
      name: 'SectionPrismatic',
      component: SectionPrismatic
    }, {
      path: '/app/mushroom',
      name: 'SectionMushroom',
      component: SectionMushroom
    }, {
      path: '/app/Eng82',
      name: 'SectionEng82',
      component: SectionEng82
    }
  ]
})

router.beforeEach((to,from,next)=>{
  next()
})

router.afterEach((to, from) => {
  if ((to.path.indexOf('/works/n') != -1 && from.path.indexOf('/works/n') != -1)) {
    let tt = to.path.split("/")[3].split("/")[0]
    let ff = from.path.split("/")[3].split("/")[0]
    console.log(tt, ff)
    if (tt == ff) {

    } else {
      window.scrollTo(0, 0)
    }
  }
  setTimeout(() => {
    
    if ( (to.path.indexOf('/works/n') != -1 && from.path.indexOf('/works/n') != -1)){
     
    } else {
  
      window.scrollTo(0, 0)
    }
  }, 400);
  new WOW().init();

})

export default router