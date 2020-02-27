<template>
  <div class="playlists-container">
    <!-- 同步 -->
    <div class="top-card">
      <div class="icon-wrap">
        <img src="../assets/listCover.jpg" alt="" />
      </div>
      <div class="content-wrap">
        <div class="tag">精品歌单</div>
        <div class="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, laborum.
        </div>
        <div class="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          velit suscipit cumque incidunt ad vitae quos dicta temporibus, at,
          labore harum libero. Officiis commodi illo, minus sed ad ab provident,
          maxime nobis culpa esse iste quibusdam! Doloribus itaque quia
          recusandae? Incidunt cumque non et minus magni dolores repudiandae
          quia quas esse ipsam labore doloremque, maxime nobis odio ab.
          Distinctio nemo nostrum numquam dolores labore laboriosam doloremque
          harum vero aliquam sit et quam laborum magnam animi, quae beatae
          fugiat sapiente! Perspiciatis libero atque ratione quam reprehenderit
          numquam distinctio. Maxime reprehenderit, dicta placeat enim
          laudantium voluptatem, ab eveniet nulla asperiores minima quidem!
        </div>
      </div>
      <img src="../assets/listCover.jpg" alt="" class="bg" />
      <div class="bg-mask"></div>
    </div>
    <div class="tab-container">
      <!-- tab栏 顶部 -->
      <div class="tab-bar">
        <span class="item active">全部</span>
        <span class="item">欧美</span>
        <span class="item">华语</span>
        <span class="item">流行</span>
        <span class="item">说唱</span>
        <span class="item">摇滚</span>
        <span class="item">民谣</span>
        <span class="item">电子</span>
        <span class="item">轻音乐</span>
        <span class="item">影视原声</span>
        <span class="item">ACG</span>
        <span class="item">怀旧</span>
        <span class="item">治愈</span>
        <span class="item">旅行</span>
      </div>
      <!-- tab的内容区域 -->
      <div class="tab-content">
        <div class="items">
          <div class="item">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">66892</span>
              </div>
              <img src="../assets/cover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">编辑推荐：一起探索这个未知的音乐罐头吧！</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">66892</span>
              </div>
              <img src="../assets/cover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">编辑推荐：一起探索这个未知的音乐罐头吧！</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">66892</span>
              </div>
              <img src="../assets/cover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">编辑推荐：一起探索这个未知的音乐罐头吧！</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">66892</span>
              </div>
              <img src="../assets/cover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">编辑推荐：一起探索这个未知的音乐罐头吧！</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">66892</span>
              </div>
              <img src="../assets/cover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">编辑推荐：一起探索这个未知的音乐罐头吧！</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">66892</span>
              </div>
              <img src="../assets/cover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">编辑推荐：一起探索这个未知的音乐罐头吧！</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">66892</span>
              </div>
              <img src="../assets/cover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">编辑推荐：一起探索这个未知的音乐罐头吧！</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">66892</span>
              </div>
              <img src="../assets/cover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">编辑推荐：一起探索这个未知的音乐罐头吧！</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">66892</span>
              </div>
              <img src="../assets/cover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">编辑推荐：一起探索这个未知的音乐罐头吧！</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">66892</span>
              </div>
              <img src="../assets/cover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">编辑推荐：一起探索这个未知的音乐罐头吧！</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss">
.playlists-container {
  .top-card {
    padding: 20px;
    height: 200px;
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    .icon-wrap {
      margin-right: 20px;
      z-index: 1;
      img {
        width: 160px;
        height: 160px;
      }
    }
    .content-wrap {
      z-index: 1;
      .tag {
        color: #dfac67;
        border: 1px solid #dfac67;
        width: 100px;
        height: 30px;
        text-align: center;
        border-radius: 5px;
        font-size: 16px;
        line-height: 30px;
        cursor: pointer;
      }
      .title {
        color: white;
        padding-top: 10px;
      }
      .info {
        color: #888482;
        font-size: 14px;
        padding-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
    }
    .bg {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      filter: blur(20px);
    }
    .bg-mask {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .tab-container {
    padding-top: 30px;
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
    .tab-content {
      margin-top: 20px;
      .items {
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 200px;
          margin: 10px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          img {
            width: 200px;
            height: 200px;
            border-radius: 5px;
          }
          .num-wrap {
            position: absolute;
            top: 0;
            left: 0;
            font-size: 14px;
            color: white;
            line-height: 30px;
            background: rgba(0, 0, 0, 0.5);
            height: 30px;
            width: 100%;
            padding-left: 5px;
            top: -30px;
            overflow: hidden;
          }
          &:hover .num-wrap {
            top: 0;
          }
          .img-wrap {
            position: relative;
            .icon-play {
              position: absolute;
              right: 10px;
              bottom: 13px;
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
            &:hover .icon-play {
              opacity: 1;
            }
          }
          .name {
            
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 14px;
          }
        }
      }
    }
  }

}
</style>
