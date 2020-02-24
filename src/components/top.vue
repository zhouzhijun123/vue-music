<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <span class="iconfont icon-home"></span>
        <span class="iconfont icon-sami-select"></span>
        <span class="iconfont icon-full-screen"></span>
      </div>
      <div class="history-wrapper">
        <span class="iconfont icon-arrow-lift"></span>
        <span class="iconfont icon-arrow-right"></span>
      </div>
    </div>
    <div class="right-box">
      <el-input size="small" placeholder="搜索" v-model="query">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data(){
    return {
      query:''
    }
  }
};
</script>

<style lang="scss" scoped>
.top-container {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color:#f9f9f9;
  width: 100%;
  .left-box {
    display: flex;
    // 图标
    .icon-wrapper {
      margin-right: 80px;
      .iconfont {
        margin-right: 10px;
        font-size: 12px;
        width: 18px;
        height: 18px;
        display: inline-block;
        text-align: center;
        line-height: 18px;
        &::before {
          opacity: 0;
          transition: 0.2s;
        }
        &:hover::before {
          opacity: 1;
        }
        &.icon-home {
          background-color: #dd6d60;
          border-radius: 50%;
        }
        &.icon-sami-select {
          background-color: #dcc060;
          border-radius: 50%;
        }
        &.icon-full-screen {
          background-color: #84bb58;
          border-radius: 50%;
        }
      }
    }
    // 历史管理
    .history-wrapper {
      display: flex;
      align-items: center;
      .iconfont {
        width: 35px;
        height: 35px;
        font-size: 30px;
        text-align: center;
        line-height: 35px;
        color: gray;
        border-radius: 50%;
        transition: 0.2s;
        cursor: pointer;
        &:first-child {
          margin-right: 10px;
        }
        &:hover {
          background-color: #ebebeb;
        }
      }
    }
  }
  .right-box {
    display: flex;
    align-items: center;
  }
}
</style>
