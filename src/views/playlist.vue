<template>
  <div class="playlist-container">
    <div class="top-wrap">
      <div class="img-wrap">
        <img src="../assets/playListCover.jpg" alt="" />
      </div>
      <div class="info-wrap">
        <p class="title">俗世里的烟火气|总有些瞬间 让你热泪盈眶</p>
        <div class="author-wrap">
          <img class="avatar" src="../assets/avatar.jpg" alt="" />
          <span class="name">原创君</span>
          <span class="time">2020-2-26 创建</span>
        </div>
        <div class="play-wrap">
          <span class="iconfont icon-circle-play"></span>
          <span class="text">播放全部</span>
        </div>
        <div class="tag-wrap">
          <span class="title">标签:</span>
          <ul>
            <li>华语</li>
            <li>怀旧</li>
            <li>感动</li>
          </ul>
        </div>
        <div class="desc-wrap">
          <span class="title">简介:</span>
          <span class="desc"
            >你是否曾在某个瞬间 被一次日落击中心中最柔软的部分 曾在回家途中
            被袅袅升起的饭菜香味感动得热泪盈眶？ 生活或许有时不尽如人意
            却总有一些叫“烟火气”的东西 使得我们在这个俗世中 依然保持希望
            封面来自网络</span
          >
        </div>
      </div>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲列表" name="1">
        <el-table class="song-table" :data="tableData">
          <el-table-column type="index"></el-table-column>
          <el-table-column width="100" label="">
            <template slot-scope="scope">
              <div class="img-wrap" @click="playMusic(scope.row.id)">
                <img :src="scope.row.al.picUrl" alt="" />
                <span class="iconfont icon-play"></span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="音乐标题">
            <template slot-scope="scope">
              <div class="song-wrap">
                <div class="name-wrap">
                  <span>{{ scope.row.name }}</span>
                  <span
                    v-if="scope.row.mv != 0"
                    class="iconfont icon-mv"
                  ></span>
                </div>
                <span>{{ scope.row.subTitle }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column width="280" label="歌手">
            <template slot-scope="scope">
              {{ scope.row.ar[0].name }}
            </template>
          </el-table-column>
          <el-table-column width="280" prop="albumName" label="专辑">
            <template slot-scope="scope">
              {{ scope.row.al.name }}
            </template>
          </el-table-column>
          <el-table-column prop="duration" label="时长">
            <template slot-scope="scope">
              {{ scope.row.dt | formatDuration }}
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="评论(66)" name="2">
        <!-- 精彩评论 -->
        <div class="comment-wrap">
          <p class="title">精彩评论<span class="number">(666)</span></p>
          <div class="comments-wrap">
            <div class="item">
              <div class="icon-wrap">
                <img src="../assets/avatar.jpg" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">爱斯基摩：</span>
                  <span class="comment">谁说的，长大了依旧可爱哈</span>
                </div>
                <div class="re-content">
                  <span class="name">小苹果：</span>
                  <span class="comment">还是小时候比较可爱</span>
                </div>
                <div class="date">2020-02-12 17:26:11</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 最新评论 -->
        <div class="comment-wrap">
          <p class="title">最新评论<span class="number">(666)</span></p>
          <div class="comments-wrap">
            <div class="item">
              <div class="icon-wrap">
                <img src="../assets/avatar.jpg" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">爱斯基摩：</span>
                  <span class="comment">谁说的，长大了依旧可爱哈</span>
                </div>
                <div class="re-content">
                  <span class="name">小苹果：</span>
                  <span class="comment">还是小时候比较可爱</span>
                </div>
                <div class="date">2020-02-12 17:26:11</div>
              </div>
            </div>
            <div class="item">
              <div class="icon-wrap">
                <img src="../assets/avatar.jpg" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">爱斯基摩：</span>
                  <span class="comment">谁说的，长大了依旧可爱哈</span>
                </div>
                <div class="re-content">
                  <span class="name">小苹果：</span>
                  <span class="comment">还是小时候比较可爱</span>
                </div>
                <div class="date">2020-02-12 17:26:11</div>
              </div>
            </div>
            <div class="item">
              <div class="icon-wrap">
                <img src="../assets/avatar.jpg" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">爱斯基摩：</span>
                  <span class="comment">谁说的，长大了依旧可爱哈</span>
                </div>
                <div class="re-content">
                  <span class="name">小苹果：</span>
                  <span class="comment">还是小时候比较可爱</span>
                </div>
                <div class="date">2020-02-12 17:26:11</div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { playlistDetail } from '@/api/playlist';
import {songUrl} from '@/api/discovery';
export default {
  name: 'playlist',
  data() {
    return {
      activeIndex: '1',
      tableData: []
    };
  },
  filters: {
    formatDuration(dt) {
      // 转分
      let min = Math.ceil(dt / 1000 / 60);
      min = min < 10 ? '0' + min : min;
      // 秒
      let sec = Math.ceil((dt / 1000) % 60);
      sec = sec < 10 ? '0' + sec : sec;
      return min + ':' + sec;
    }
  },
  created() {
    const { id } = this.$route.query;
    playlistDetail({
      id
    }).then(res => {
      // window.console.log(res)
      // 歌曲信息
      this.tableData = res.playlist.tracks;
    });
  },
  methods: {
    playMusic(id) {
      songUrl({
        id: id
      }).then(res => {
        // window.console.log(res)
        // this.songUrl = res.data[0].url
        this.$parent.url = res.data[0].url;
      });
    }
  }
};
</script>

<style lang="scss">
.playlist-container {
  margin: auto;
  padding-top: 40px;
  .top-wrap {
    display: flex;
    span {
      font-size: 17px;
    }
    .img-wrap {
      margin-right: 30px;
      img {
        width: 230px;
        height: 230px;
      }
    }
    .info-wrap {
      .title {
        margin-bottom: 20px;
      }
      .author-wrap {
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .name {
          margin-right: 10px;
        }
        .time {
          font-size: 14px;
        }
      }
      .play-wrap {
        width: 120px;
        height: 35px;
        border-radius: 4px;
        background: linear-gradient(to right, #e85e4d, #c6483c);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
        span {
          color: white;
          &.iconfont {
            margin-right: 8px;
          }
          &.text {
            font-size: 16px;
          }
        }
      }
      .tag-wrap {
        display: flex;
        margin-bottom: 15px;
        span {
          margin: 0;
        }
        ul {
          display: flex;
          align-items: center;
        }
        li {
          font-size: 15px;
          &:not(:last-child)::after {
            content: '/';
            margin: 0 4px;
          }
        }
      }
      .desc-wrap {
        span {
          &:last-child {
            font-size: 15px;
          }
        }
      }
      span:first-child {
        margin-right: 10px;
      }
    }
  }

  .comment-wrap {
    margin-bottom: 70px;
    .title {
      font-size: 20px;
      .number {
        color: black;
        font-size: 18px;
      }
    }
    .item {
      display: flex;
      padding-top: 20px;
      .icon-wrap {
        margin-right: 15px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
      &:not(:last-child) {
        .content-wrap {
          border-bottom: 1px solid #f2f2f1;
        }
      }
      .date {
        color: #bebebe;
        font-size: 14px;
      }

      .content-wrap {
        padding-bottom: 20px;

        flex: 1;
        .name {
          color: #517eaf;
          font-size: 14px;
        }
        .comment {
          font-size: 14px;
        }
        .content,
        .re-content {
          margin-bottom: 10px;
        }
        .re-content {
          padding: 10px;
          background-color: #e6e5e6;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
