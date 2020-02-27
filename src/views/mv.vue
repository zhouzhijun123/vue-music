<template>
  <div class="mv-container">
    <div class="mv-wrap">
      <h3 class="title">mv详情</h3>
      <!-- mv -->
      <div class="video-wrap">
        <video controls :src="mvUrl"></video>
      </div>
      <!-- mv信息 -->
      <div class="info-wrap">
        <div class="singer-info">
          <img src="../assets/avatar.jpg" alt="" />
          <span class="name">TF Boys</span>
        </div>
        <div class="mv-info">
          <h2 class="title">TF BOYS LIVE 秀 王源《淘汰》</h2>
          <span class="date">发布：2014-11-04</span>
          <span class="number">播放：94526次</span>
        </div>
      </div>
      <!-- 精彩评论 -->
      <div v-if="hotComments.length != 0" class="comment-wrap">
        <p class="title">
          精彩评论<span class="number">({{ hotComments.length }})</span>
        </p>
        <div
          class="comments-wrap"
          v-for="item in hotComments"
          :key="item.commentId"
        >
          <div class="item">
            <div class="icon-wrap">
              <img :src="item.user.avatarUrl" alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">{{ item.user.nickname }}：</span>
                <span class="comment">{{ item.content }}</span>
              </div>
              <div v-if="item.beReplied.length != 0" class="re-content">
                <span class="name"
                  >{{ item.beReplied[0].user.nickname }}：</span
                >
                <span class="comment">{{ item.beReplied[0].content }}</span>
              </div>
              <div class="date">{{ item.time | formatTime }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 最新评论 -->
      <!-- 最新评论 -->
      <div class="comment-wrap" v-if="comments.length != 0">
        <p class="title">
          最新评论<span class="number">({{ total }})</span>
        </p>
        <div class="comments-wrap">
          <div class="item" v-for="item in comments" :key="item.commentId">
            <div class="icon-wrap">
              <img :src="item.user.avatarUrl" alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">{{ item.user.nickname }}：</span>
                <span class="comment">{{ item.content }}</span>
              </div>
              <div v-if="item.beReplied.length != 0" class="re-content">
                <span class="name"
                  >{{ item.beReplied[0].user.nickname }}：</span
                >
                <span class="comment">{{ item.beReplied[0].content }}</span>
              </div>
              <div class="date">{{ item.time | formatTime }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页器 -->
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        :page-size="5"
      >
      </el-pagination>
    </div>
    <div class="mv-recommend">
      <h3 class="title">相关推荐</h3>
      <div class="mvs">
        <div class="items" v-for="item in simiMV" :key="item.id">
          <div class="item">
            <div class="img-wrap">
              <img :src="item.cover" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">{{ item.playCount | formatCount }}</div>
              </div>
              <span class="time">{{ item.duration | formatDuration }}</span>
            </div>
            <div class="info-wrap">
              <div class="name">{{ item.briefDesc }}</div>
              <div class="singer">{{ item.artistName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mvUrl, simiMV, mvComments } from '@/api/mv';
export default {
  name: 'mv',
  data() {
    return {
      // mv地址
      mvUrl: '',
      simiMV: [],
      // 热门评论
      hotComments: [],
      // 普通评论
      comments: [],
      // 分页相关数据
      // 每页数据
      limit: 20,
      // 页码
      page: 1,
      // 总条数
      total: 0
    };
  },
  filters: {
    formatCount(count) {
      if (count / 10000 > 10) {
        return parseInt(count / 10000) + '万';
      } else {
        return count;
      }
    }
  },
  methods: {
    // 页码改变
    handleCurrentChange(val) {
      this.page = val;
      this.getComments();
    },
    // 获取评论
    getComments() {
      const { id } = this.$route.query;
      mvComments({ id, offset: (this.page - 1) * 5 }).then(res => {
        // window.console.log(res)
        if (res.hotComments) {
          this.hotComments = res.hotComments;
        }
        this.comments = res.comments;
        this.total = res.total;
      });
    }
  },
  created() {
    const { id } = this.$route.query;
    mvUrl({ id }).then(res => {
      this.mvUrl = res.data.url;
    });
    simiMV({ mvid: id }).then(res => {
      // window.console.log(res)
      this.simiMV = res.mvs;
    });
    // 获取评论
    this.getComments();
  }
};
</script>

<style lang="scss">
.mv-container {
  display: flex;
  .title {
    margin-bottom: 20px;
  }
  .mv-wrap {
    width: 700px;
    margin-right: 35px;
    .date {
      margin-right: 25px;
    }
    .date,
    .number {
      color: #bebebe;
      font-size: 14px;
    }
    .video-wrap {
      width: 100%;
      height: 390px;
      margin-bottom: 20px;
      video {
        border-radius: 5px;
        height: 100%;
        width: 100%;
        outline: none;
      }
    }
    .info-wrap {
      margin-bottom: 50px;
      .singer-info {
        display: flex;
        align-items: center;
        margin-bottom: 35px;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
      .mv-info {
        .title {
          font-size: 30px;
        }
      }
    }
    .comment-wrap {
      margin-bottom: 70px;
      .title {
        font-size: 25px;
        .number {
          color: black;
          font-size: 20px;
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
  .mv-recommend {
    flex: 1;
    .mvs {
      .items {
        display: flex;
        flex-wrap: wrap;
        .item {
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 10px;
          cursor: pointer;

          &:hover {
            background-color: #f5f5f5;
          }
          .img-wrap {
            width: 180px;
            position: relative;
            margin-right: 10px;
            > .icon-play {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 40px;
              height: 40px;
              color: #dd6d60;
              font-size: 20px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(255, 255, 255, 0.8);
              opacity: 0;
              &::before {
                transform: translateX(3px);
              }
            }
            &:hover > .icon-play {
              opacity: 1;
            }
            img {
              width: 100%;
              border-radius: 5px;
            }
            .num-wrap {
              position: absolute;
              color: white;
              top: 0;
              right: 0;
              display: flex;
              align-content: center;
              font-size: 15px;
              padding-right: 5px;
              padding-top: 2px;
              .icon-play {
                font-size: 12px;
                display: flex;
                align-items: center;
                margin-right: 5px;
              }
            }
            .time {
              position: absolute;
              bottom: 5px;
              right: 5px;
              color: white;
              font-size: 15px;
            }
          }
          .info-wrap {
            .name {
              font-size: 15px;
            }
            .singer {
              font-size: 14px;
              color: #c5c5c5;
            }
          }
        }
      }
    }
  }
}
</style>
