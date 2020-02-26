<template>
  <div class="result-container">
    <div class="title-wrap">
      <h2 class="title">李荣浩</h2>
      <span class="sub-title">找到985个结果</span>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲" name="songs">
        <el-table stripe class="song-table" :data="tableData">
          <el-table-column type="index"></el-table-column>
          <el-table-column width="280" label="音乐标题">
            <template slot-scope="scope">
              <div class="song-wrap">
                <div class="name-wrap">
                  <span>{{ scope.row.songName }}</span>
                  <span
                    v-if="scope.row.hasMV != 0"
                    class="iconfont icon-mv"
                  ></span>
                </div>
                <span>{{ scope.row.subTitle }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            width="280"
            prop="singer"
            label="歌手"
          ></el-table-column>
          <el-table-column
            width="280"
            prop="albumName"
            label="专辑"
          ></el-table-column>
          <el-table-column prop="duration" label="时长"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="lists">
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
      </el-tab-pane>
      <el-tab-pane label="MV" name="mv">
        <div class="items">
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/mvCover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">9912</div>
              </div>
              <span class="time">02:43</span>
            </div>
            <div class="info-wrap">
              <div class="name">HEYNA</div>
              <div class="singer">余恩</div>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/mvCover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">9912</div>
              </div>
              <span class="time">02:43</span>
            </div>
            <div class="info-wrap">
              <div class="name">HEYNA</div>
              <div class="singer">余恩</div>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/mvCover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">9912</div>
              </div>
              <span class="time">02:43</span>
            </div>
            <div class="info-wrap">
              <div class="name">HEYNA</div>
              <div class="singer">余恩</div>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/mvCover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">9912</div>
              </div>
              <span class="time">02:43</span>
            </div>
            <div class="info-wrap">
              <div class="name">HEYNA</div>
              <div class="singer">余恩</div>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/mvCover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">9912</div>
              </div>
              <span class="time">02:43</span>
            </div>
            <div class="info-wrap">
              <div class="name">HEYNA</div>
              <div class="singer">余恩</div>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/mvCover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">9912</div>
              </div>
              <span class="time">02:43</span>
            </div>
            <div class="info-wrap">
              <div class="name">HEYNA</div>
              <div class="singer">余恩</div>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/mvCover.jpg" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">9912</div>
              </div>
              <span class="time">02:43</span>
            </div>
            <div class="info-wrap">
              <div class="name">HEYNA</div>
              <div class="singer">余恩</div>
            </div>
          </div>

        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'result',
  data() {
    return {
      activeIndex: 'songs',
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
      width: 250px;
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
</style>
