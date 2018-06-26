import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'

// demo/knowledge
const SortMethods = r => require.ensure([],()=>r(require('@/pages/demo/knowledge/SortMethods')),'demo')
const Vertical = r => require.ensure([],()=>r(require('@/pages/demo/knowledge/VerticalCenter')),'demo')
const CleanFloat = r => require.ensure([],()=>r(require('@/pages/demo/knowledge/CleanFloat')),'demo')
const MianShi = r => require.ensure([],()=>r(require('@/pages/demo/knowledge/MianShi')),'demo')
const QuChong = r => require.ensure([],()=>r(require('@/pages/demo/knowledge/QuChong')),'demo')
const Fibonacci = r => require.ensure([],()=>r(require('@/pages/demo/knowledge/Fibonacci')),'demo')
const Demo = r => require.ensure([],()=>r(require('@/pages/demo/Demo')),'demo')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/knowledge/sort',
      name:'SortMethods',
      component:SortMethods
    },
    {
      path:'/knowledge/vertical',
      name:'Vertical',
      component:Vertical
    },
    {
      path:'/knowledge/cleanFloat',
      name:'CleanFloat',
      component:CleanFloat
    },
    {
      path:'/knowledge/mianShi',
      name:'MianShi',
      component:MianShi
    },
    {
      path:'/knowledge/quChong',
      name:'QuChong',
      component:QuChong
    },
    {
      path:'/knowledge/fibonacci',
      name:'Fibonacci',
      component:Fibonacci
    },
    {
      path:'/demo',
      name:'Demo',
      component:Demo
    },
  ]
})
