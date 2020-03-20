import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Tabbar from '../components/tabbar.vue'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import Listen from '../pages/listen.vue'//听吧组件
import Mine from '../pages/mine.vue'//我的组件
import Play from '../pages/play.vue'//播放组件
import Find from '../pages/find.vue'//发现组件
import Account from '../pages/account.vue'//账号组件
//听吧的二级路由
import Recommend from '../twopages/recommend.vue'//推荐组件
import Publish from '../twopages/publish.vue'//出版组件
import Original from '../twopages/original.vue'//原创组件
import Program from '../twopages/program.vue'//节目组件
import Children from '../twopages/children.vue'//儿童组件
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '',
    //   name: 'listen',
    //   component: Listen
    // },

     {
      path: '/listen',
      name: 'listen',
      component: Listen,children:[
        {path: '/listen',redirect: 'recommend'},
        {path: 'recommend',name: 'recommend',component: Recommend},
        {path: 'publish',name: 'publish',component: Publish},
        {path: 'original',name: 'original',component: Original},
        {path: 'program',name: 'program',component: Program},
        {path: 'children',name: 'children',component: Children},
      ]
    },
    // {
    // path: '/',redirect: '/listen',
    // component: Listen
    // },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
  ]
})
