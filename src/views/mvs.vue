<template>
  <div class="mvs-container">
    <div class="filter-wrap">
      <div class="seciton-wrap">
        <span class="section-type">地区:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span class="title active">全部</span>
          </li>
          <li class="tab">
            <span class="title">内地</span>
          </li>
          <li class="tab">
            <span class="title">港台</span>
          </li>
          <li class="tab">
            <span class="title">欧美</span>
          </li>
          <li class="tab">
            <span class="title">日本</span>
          </li>
          <li class="tab">
            <span class="title">韩国</span>
          </li>
        </ul>
      </div>
      <div class="type-wrap">
        <span class="type-type">类型:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span class="title ">全部</span>
          </li>
          <li class="tab">
            <span class="title">官方版</span>
          </li>
          <li class="tab">
            <span class="title active">原声</span>
          </li>
          <li class="tab">
            <span class="title">现场版</span>
          </li>
          <li class="tab">
            <span class="title">网易出品</span>
          </li>
        </ul>
      </div>
      <div class="order-wrap">
        <span class="order-type">排序:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span class="title ">上升最快</span>
          </li>
          <li class="tab">
            <span class="title">最热</span>
          </li>
          <li class="tab">
            <span class="title active">最新</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- mv容器 -->
    <!-- 推荐MV -->
    <div class="mvs">
      <div class="items">
        <div class="item" @click="toMv(10)">
          <div class="img-wrap">
            <img src="../assets/mvCover.jpg" alt="" />
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">9912</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">HEYNA</div>
            <div class="singer">余恩</div>
          </div>
        </div>
            <div class="item">
          <div class="img-wrap">
            <img src="../assets/mvCover.jpg" alt="" />
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">9912</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">HEYNA</div>
            <div class="singer">余恩</div>
          </div>
        </div>    <div class="item">
          <div class="img-wrap">
            <img src="../assets/mvCover.jpg" alt="" />
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">9912</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">HEYNA</div>
            <div class="singer">余恩</div>
          </div>
        </div>
        <div class="item">
          <div class="img-wrap">
            <img src="../assets/mvCover.jpg" alt="" />
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">9912</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">HEYNA</div>
            <div class="singer">余恩</div>
          </div>
        </div>
        <div class="item">
          <div class="img-wrap">
            <img src="../assets/mvCover.jpg" alt="" />
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">9912</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">HEYNA</div>
            <div class="singer">余恩</div>
          </div>
        </div>
        <div class="item">
          <div class="img-wrap">
            <img src="../assets/mvCover.jpg" alt="" />
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">9912</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">HEYNA</div>
            <div class="singer">余恩</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mvs',
  methods:{
    toMv(id){
      this.$router.push(`/mv?id=${id}`)
    }
  }
};
</script>

<style lang="scss">
.mvs-container {
  padding-top: 20px;
  .filter-wrap {
    > div {
      margin-bottom: 30px;
      vertical-align: baseline;
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        height: 100%;
        &.title {
          margin: 20px;
          color: gray;
          cursor: pointer;
          padding: 5px 20px;
          &.active {
            color: #dd6d60;
            background-color: #fcf6f5;
            border-radius: 20px;
          }
          &::before {
            content: '', pos;
          }
        }
      }
      ul {
        display: flex;
        li:not(:last-child) {
          border-right: 1px solid #f2f2f1;
        }
      }
    }
  }
  .mvs {
    .items {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .item {
        width: 250px;
        cursor: pointer;
        margin-right: 25px;
        margin-bottom: 30px;
        .img-wrap {
          width: 100%;
          position: relative;
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
</style>
