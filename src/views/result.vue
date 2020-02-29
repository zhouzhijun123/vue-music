<template>
  <div class="result-container">
    <div class="title-wrap">
      <h2 class="title">{{ $route.query.keywords }}</h2>
      <span class="sub-title">找到{{ total }}个结果</span>
    </div>
    <el-tabs v-model="type">
      <el-tab-pane label="歌曲" name="1">
        <el-table
          stripe
          class="song-table"
          :data="songList"
          @row-dblclick="rowDbclick"
        >
          <el-table-column type="index"></el-table-column>
          <el-table-column width="280" label="音乐标题">
            <template slot-scope="scope">
              <div class="song-wrap">
                <div class="name-wrap">
                  <span>{{ scope.row.name }}</span>
                  <span
                    v-if="scope.row.mvid != 0"
                    class="iconfont icon-mv"
                    @click="toMV(scope.row.mvid)"
                  ></span>
                </div>
                <span v-if="scope.row.alias.length != 0">{{
                  scope.row.alias[0]
                }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column width="280" label="歌手">
            <template slot-scope="scope">
              {{ scope.row.artists[0].name }}
            </template>
          </el-table-column>
          <el-table-column width="280" label="专辑">
            <template slot-scope="scope">
              {{ scope.row.album.name }}
            </template>
          </el-table-column>
          <el-table-column label="时长">
            <template slot-scope="scope">
              {{ scope.row.duration | formatDuration }}
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="1000">
        <div class="items">
          <div
            class="item"
            v-for="item in playList"
            :key="item.id"
            @click="toPlaylist(item.id)"
          >
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{ item.playCount | formatCount }}</span>
              </div>
              <img :src="item.coverImgUrl" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="MV" name="1004">
        <div class="items">
          <div
            class="item"
            v-for="item in mvList"
            :key="item.id"
            @click="toMV(item.id)"
          >
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
              <div class="name">{{ item.name }}</div>
              <div class="singer">{{ item.artistName }}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 分页器 -->
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      :page-size="limit"
    >
    </el-pagination>
  </div>
</template>

<script>
import { search } from '@/api/result';
import { songUrl } from '@/api/discovery';
export default {
  name: 'result',
  data() {
    return {
      type: '1',
      // 页容量
      limit: 30,
      // 页码
      page: 1,
      // 总条数
      total: 0,
      songList: [],
      playList: [],
      mvList: [],
    };
  },
  watch: {
    type: 'searchResult',
    '$route.query.keywords': 'searchResult'
  },
  created() {
    this.searchResult();
  },
  methods: {
    toPlaylist(id) {
      this.$router.push(`/playlist?id=${id}`);
    },
    // 双击某一行
    rowDbclick(row) {
      songUrl({
        id: row.id
      }).then(res => {
        // window.console.log(res)
        // this.songUrl = res.data[0].url
        this.$parent.url = res.data[0].url;
      });
    },
    // 去mv页面
    toMV(mvid) {
      this.$router.push(`/mv?id=${mvid}`);
    },
    // 页码改变
    handleCurrentChange(val) {
      this.page = val;
      this.searchResult();
    },
    searchResult() {
      const { limit, type } = this;
      const { keywords } = this.$route.query;
      search({
        limit,
        type,
        keywords,
        offset: (this.page - 1) * this.limit
      }).then(res => {
        // window.console.log(res)
        // 根据类型不同
        switch (this.type) {
          case '1':
            this.songList = res.result.songs;
            this.total = res.result.songCount;
            break;
          case '1000':
            this.playList = res.result.playlists;
            this.total = res.result.playlistCount;
            break;

          default:
            this.mvList = res.result.mvs;
            this.total = res.result.mvCount;
            break;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.result-container {
  .title-wrap {
    display: flex;
    align-items: flex-end;
    margin-bottom: 30px;
    .title {
      margin-right: 10px;
    }
    .sub-title {
      font-size: 15px;
      color: #bebebe;
    }
  }
  .el-tabs__item {
    font-size: 18px;
  }
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: none;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .item {
      width: 200px;
      cursor: pointer;
      margin-right: 20px;
      margin-bottom: 20px;
      .img-wrap {
        width: 100%;
        position: relative;
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
          align-items: center;
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
      .name {
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .info-wrap {
        .singer {
          font-size: 15px;
          color: #bebebe;
        }
      }
    }
  }
}
</style>
