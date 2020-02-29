<template>
  <div class="songs-container" v-loading="loading">
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
    <el-table class="song-table" :data="tableData" >
      <el-table-column type="index"></el-table-column>
      <el-table-column width="100">
        <template slot-scope="scope">
          <div class="img-wrap">
            <img :src="scope.row.album.picUrl" alt="" />
            <span
              class="iconfont icon-play"
              @click="playMusic(scope.row.id)"
            ></span>
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
import { songUrl } from '@/api/discovery';
export default {
  name: 'songs',
  data() {
    return {
      type: 0,
      tableData: [],
      // 是否加载
      loading:false
    };
  },
  methods: {
    getData() {
      this.loading = true;
      topSongs({
        type: this.type
      }).then(res => {
        // window.console.log(res);
        this.tableData = res.data;
        this.loading = false
      });
    },
    playMusic(id) {
      songUrl({
        id: id
      }).then(res => {
        // window.console.log(res)
        // this.songUrl = res.data[0].url
        this.$parent.url = res.data[0].url;
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

</style>
