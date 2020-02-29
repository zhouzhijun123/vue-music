import Vue from 'vue';
import App from './App.vue';

// 导入Element-ui
import element from '@/utils/element'
Vue.use(element)

// 导入全局初始化样式
import '@/style/base.scss';

// 路由整合
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入对应的路由
import discovery from '@/views/discovery.vue';
import playlists from '@/views/playlists.vue';
import playlist from '@/views/playlist.vue';
import songs from '@/views/songs.vue';
import mvs from '@/views/mvs.vue';
import mv from '@/views/mv.vue';
import result from '@/views/result.vue';

/**
 * 重写路由的push方法
 */
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

const router = new VueRouter({
  routes: [
    {
      // 发现音乐
      path: '/',
      redirect: '/discovery'
    },
    {
      // 发现音乐
      path: '/discovery',
      component: discovery
    },
    {
      // 推荐歌单
      path: '/playlists',
      component: playlists
    },
    {
      // 推荐歌单
      path: '/playlist',
      component: playlist
    },
    {
      // 最新音乐
      path: '/songs',
      component: songs
    },
    {
      // 最新音乐
      path: '/mvs',
      component: mvs
    },
    // mv详情
    {
      path: '/mv',
      component: mv
    },
    // 搜索结果页
    {
      path: '/result',
      component: result
    }
  ]
});
import moment from 'moment';
// 全局过滤器
Vue.filter('formatDuration',(dt)=>{
  // 转分
  let min = Math.ceil(dt / 1000 / 60);
  min = min < 10 ? '0' + min : min;
  // 秒
  let sec = Math.ceil((dt / 1000) % 60);
  sec = sec < 10 ? '0' + sec : sec;
  return min + ':' + sec;
})
Vue.filter('formatTime', (time)=>{
  return moment(time).format('YYYY-MM-DD hh:mm:ss');
})
Vue.filter('formatCount',(count)=>{
  if (count / 10000 > 10) {
    return parseInt(count / 10000) + '万';
  } else {
    return count;
  }
})




Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 挂载到Vue示例上
  router
}).$mount('#app');
