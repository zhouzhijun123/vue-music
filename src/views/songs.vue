<template>
  <div class="songs-container">
    <div class="tab-bar">
      <span class="item" :class="{ active: type == 0 }" @click="type = 0"
        >全部</span
      >
      <span class="item" :class="{ active: type == 7 }" @click="type = 7"
        >华语</span
      >
      <span class="item" :class="{ active: type == 96 }" @click="type = 96"
        >欧美</span
      >
      <span class="item" :class="{ active: type == 8 }" @click="type = 8"
        >日本</span
      >
      <span class="item" :class="{ active: type == 16 }" @click="type = 16"
        >韩国</span
      >
    </div>
    <!-- 底部的table -->
    <el-table class="song-table" :data="tableData">
      <el-table-column type="index"></el-table-column>
      <el-table-column width="100">
        <template slot-scope="scope">
          <div class="img-wrap">
            <img :src="scope.row.album.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
        </template>
      </el-table-column>
      <el-table-column width="280">
        <template slot-scope="scope">
          <div class="song-wrap">
            <div class="name-wrap">
              <span>{{ scope.row.name }}</span>
              <span v-if="scope.row.mvid != 0" class="iconfont icon-mv"></span>
            </div>
            <span>{{ scope.row.subTitle }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column width="280">
        <template slot-scope="scope">
          {{ scope.row.artists[0].name }}
        </template>
      </el-table-column>
      <el-table-column width="280">
        <template slot-scope="scope">
          {{ scope.row.album.name }}
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          {{ scope.row.duration | formatDuration }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { topSongs } from '@/api/songs';
export default {
  name: 'songs',
  data() {
    return {
      type: 0,
      tableData: []
    };
  },
  methods: {
    getData() {
      topSongs({
        type: this.type
      }).then(res => {
        // window.console.log(res);
        this.tableData = res.data;
      });
    }
  },
  watch: {
    type() {
      this.getData();
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss">
.songs-container {
  .tab-bar {
    display: flex;
    justify-content: flex-end;
    .item {
      font-size: 15px;
      color: gray;
      margin-right: 20px;
      cursor: pointer;
      &.active {
        color: #dd6d60;
      }
    }
  }
  .song-table {
    .song-wrap {
      > span {
        margin-top: 20px;
        display: inline-block;
        color: #bebebe;
      }
      .icon-mv {
        padding-left: 5px;
        color: #dd6d60;
      }
    }
    .img-wrap {
      position: relative;
      width: 70px;
      height: 70px;
      img {
        width: 70px;
        height: 70px;
        border-radius: 5px;
      }
      .icon-play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25px;
        height: 25px;
        color: #dd6d60;
        font-size: 12px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.8);
        &::before {
          transform: translateX(1px);
        }
      }
    }
  }
}
</style>
