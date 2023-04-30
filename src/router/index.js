import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyNotes from '@/components/MyNotes'
import MyProjects from '@/components/MyProjects'
import ContactMe from '@/components/ContactMe'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/MyNotes',
      name: 'MyNotes',
      component: MyNotes
    },
    {
      path: '/MyProjects',
      name: 'MyProjects',
      component: MyProjects
    },
    {
      path: '/ContactMe',
      name: 'ContactMe',
      component: ContactMe
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
