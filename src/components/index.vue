<template>
  <div class="index-container">
    <div class="nav">
      <ul>
        <li @click="activeIndex = 0" :class="{ active: activeIndex == 0 }">
          <router-link to="/discovery">
            <span class="iconfont icon-find-music"></span>
            发现音乐
          </router-link>
        </li>
        <li @click="activeIndex = 1" :class="{ active: activeIndex == 1 }">
          <router-link to="/playlists">
            <span class="iconfont icon-music-list"></span>
            推荐歌单
          </router-link>
        </li>
        <li @click="activeIndex = 2" :class="{ active: activeIndex == 2 }">
          <router-link to="/songs">
            <span class="iconfont icon-music"></span>
            最新音乐
          </router-link>
        </li>
        <li @click="activeIndex = 3" :class="{ active: activeIndex == 3 }">
          <router-link to="/mvs">
            <span class="iconfont icon-mv"></span>
            最新MV
          </router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="player">
      <audio controls></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      activeIndex: 0
    };
  }
};
</script>

<style lang="scss">
.index-container {
  display: flex;
  .nav {
    background-color: #ededed;
    width: 300px;
    height: 100%;
    li {
      height: 60px;
      cursor: pointer;
      display: flex;
      align-items: center;
      &:hover {
        background-color: #e7e7e7;
      }
      .iconfont {
        margin-right: 10px;
        font-size: 20px;
      }
      a {
        color: black;
        padding-left: 30px;
        font-size: 18px;
        line-height: 60px;
        width: 100%;
        height: 100%;
      }
      &.active {
        a {
          color: #dd6d60;
        }
        .iconfont {
          color: #dd6d60;
        }
      }
    }
  }
  .main {
    flex: 1;
    overflow-y: scroll;
  }
  .player {
    background: #f1f3f4;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  audio {
    width: 100%;
    border-radius: none;
  }
}
</style>
