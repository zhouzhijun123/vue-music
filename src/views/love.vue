<template>
    <div>
        <table class="el-table">
          <thead>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
          </thead>
          <tbody>
            <tr
              class="el-table__row"
              v-for="(item, index) in songList"
              :key="item.id"
              @dblclick="rowDbclick(item.id)"
            >
              <td>{{ (page-1)*15+index + 1 }}</td>
              <td>
                <div class="song-wrap">
                  <div class="name-wrap">
                    <span class="name">{{ item.name }}</span>
                    <span
                      v-if="item.mvid != 0"
                      class="iconfont icon-mv"
                      @click="toMV(item.mvid)"
                    ></span>
                  </div>
                  <span class="sub-name" v-if="item.alias.length != 0">{{
                    item.alias[0]
                  }}</span>
                </div>
              </td>
              <td>{{ item.artists[0].name }}</td>
              <td>{{ item.album.name }}</td>
              <td>{{ item.duration | formatDuration }}</td>
            </tr>
          </tbody>
        </table>
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
import axios from 'axios'
import { songUrl } from '@/api/discovery';
export default {
  data(){
    return {
      type: '1',
      // 页容量
      limit:15,
      // 页码
      page: 1,
      // 总条数
      total: 150,
      songList: [],
      playList: [],
      mvList: []
    }
  },
  created(){
    this.searchResult();
  },
    methods:{
    // 双击某一行
    rowDbclick(id) {
      songUrl({
        id
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
      axios({
      url:'https://autumnfish.cn/search',
      methods:'get',
      params:{
        keywords:'古风',
        type:"1",
        offset:(this.page - 1) * 15,
        limit:15
      }
    }).then(res=>{
      console.log(res)
      this.songList=res.data.result.songs;
      this.total = res.result.songCount;
    })
    }
  }
}
</script>

<style>

</style>