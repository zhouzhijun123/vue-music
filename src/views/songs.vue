<template>
  <div class="songs-container">
    <div class="tab-bar">
      <span class="item active">全部</span>
      <span class="item">华语</span>
      <span class="item">欧美</span>
      <span class="item">日本</span>
      <span class="item">韩国</span>
    </div>
    <!-- 底部的table -->
    <el-table :data="tableData">
      <el-table-column type="index"></el-table-column>
      <el-table-column width="100">
        <template slot-scope="scope">
          <div class="img-wrap">
            <img :src="scope.row.img" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
        </template>
      </el-table-column>
      <el-table-column width="280">
        <template slot-scope="scope">
          <div class="song-wrap">
            <div class="name-wrap">
              <span>{{ scope.row.songName }}</span>
              <span v-if="scope.row.hasMV != 0" class="iconfont icon-mv"></span>
            </div>
            <span>{{ scope.row.subTitle }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column width="280" prop="singer"></el-table-column>
      <el-table-column width="280" prop="albumName"></el-table-column>
      <el-table-column prop="duration"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'songs',
  data() {
    return {
      tableData: [
        {
          img:
            'http://p3.music.126.net/sL4dfIANkKupkJvPipmd5g==/109951164736488659.jpg?param=120y120',
          songName: '你要相信这不是最后一天',
          subTitle: '电视剧《加油吧实习生》插曲',
          singer: '华晨宇',
          albumName: '你要相信这不是最后一天',
          duration: '06:03',
          hasMV: 0
        },
        {
          img:
            'http://p4.music.126.net/76Hpk_9ot2h2dozv5JbbYA==/109951164737016168.jpg?param=120y120',
          songName: 'Tomorrow will be fine.',
          singer: 'Sodagreen',
          albumName: 'Tomorrow will be fine.',
          duration: '04:59',
          hasMV: 1
        },
        {
          img:
            'http://p4.music.126.net/QI_lE_SlqUXa51z56qcOSw==/109951164732550113.jpg?param=120y120',
          songName: '误解',
          singer: '戴佩妮',
          albumName: '误解',
          duration: '03:43',
          hasMV: 1
        }
      ]
    };
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
  .song-wrap {
    >span{
      margin-top: 20px;
      display: inline-block;
      color:#BEBEBE;
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
</style>
