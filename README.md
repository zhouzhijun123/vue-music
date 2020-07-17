# webmusic
> 网页版本的播放器

## 感谢
https://github.com/sl1673495/vue-netease-music

## 后端接口

https://binaryify.github.io/NeteaseCloudMusicApi

## 技术栈
[vue-cli3](https://cli.vuejs.org/zh/) 创建的项目

[sass](https://cli.vuejs.org/zh/guide/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)(vue-cli中使用sass)

[Element-ui](https://element.eleme.cn/#/zh-CN/component/quickstart)(轮播，分页，tab切换)

## 项目相关技术点
### Vue 的钩子函数：
- beforeCreadted：vue实例的挂载元素 $el 和数据对象 data 都为 undefined，还未初始化
- created：vue 实例的数据对象 data 有了，$el 还没有
- beforeMount：vue 实例的 $el 和 data 都初始化了，但还是虚拟的 DOM 节点，具体的 data.filter 还未替换
- mounted：vue 实例挂载完成，data.filter 成功渲染
- beforeUpdate：data 更新之前触发
- updated：data 更新时触发
- beforeDestroy：组件销毁之前触发
- destroyed：组件销毁时触发，vue实例解除了事件监听以及和dom的绑定（无响应了），但DOM节点依旧存在
### scss
[scss cover sass](https://blog.csdn.net/AlisaClass/article/details/90756027)
### v-*命令
[v-命令](https://share.mubu.com/doc/BRo2FU9zp9)
### ES6语法
[项目涉及的es6语法](https://share.mubu.com/doc/1gZK8iyntp9)
[ES6入门语法(个人笔记，可能不太完美)](https://blog.csdn.net/weixin_40422539/article/details/102636215)
### 单组件开发
后缀名是 .vue ,可以同时编写结构，逻辑和样式.
template 标签中写结构.
script 标签中写逻辑.
style 标签中写样式.
安装了 vetur 插件可以通过 <vue 生成基础结构.
#### 单组件开发|注意:
- template中必须有一个根节点.
- script 中的 data 写成函数，内部返回一个对象（如果都使用变量就会所有组件共享）.
- 如果要使用写好的样式，直接 import 即可.
### 快速原型开发
#### 快速原型开发|环境配置
安装 Node.js 全部使用默认的设置，一路下一步即可.
打开命令行工具，输入命令 node –v 以及 npm -v 检查是否安装成功,
通过命令 npm install -g @vue/cli-service-global 安装一个小工具,
#### 快速原型开发|基本使用
保证 环境配置 成功之后,
在 .vue 文件所在的路径下打开终端 输入 vue serve 文件名,
等待 解析，然后在浏览器访问出现的 地址 即可,
#### 快速原型开发|播放器示例
使用 npm 下载别人写好的 包（模块，库）,
比如 axios ，下载的命令是 npm install axios  或者缩写为 npm i axios,
在要使用的组件中，使用 import 导入 下载的 包（模块，库）,
比如 axios: 导入的代码是 import axios from ‘axios’,
开心的使用刚刚导入的包（模块，库）吧,
#### 快速原型开发|组件抽取
创建 components 文件夹 创建一个文件 叫做 player.vue,
把播放器的代码 剪切 进去,并调整 图片、css 文件的路径,
App.vue中 使用 import 导入 播放器组件,
在 components 中添加（注册） 播放器组件,
页面上使用 注册的名字 当做标签名即可使用 播放器组件,
### vue router
#### vue router|安装
在项目的 根目录 打开 终端,
通过命令 npm install vue-router 下载,
main.js 中,
- 导入,
- use一下,
- 创建路由,
- 挂载到Vue实例上,
#### vue router|配置规则
通过 routes 属性 配置 地址 和 路由管理的 组件 关系,
main.js 中,
- 导入组件,
- routes 属性中进行配置关系,
- path:设置地址,
- component：设置组件,
- 可以配置 多个,
#### vue router|路由出口
希望匹配到的组件显示在哪里，就在哪里设置一个 router-view 标签,
多配置几组对应关系,
- discovery:发现音乐,
- playlists:推荐歌单,
- songs:	最新音乐,
- mvs:	最新mv,
#### vue router|声明式导航
通过 router-link 标签 设置 to 属性为地址 可以实现点击切换,
#### vue router|编程式导航
组件中通过 this.$router.push(地址) 可以通过代码实现切换,
#### vue router|路由传参
在地址的后面 写上 ？分隔,
通过 key=value&key2=value 的方式添加参数,
组件中通过 this.$route.query 访问对应的 key 即可获取数据,

### Element-ui
组件中通过 this.$route.query 访问对应的 key 即可获取数据,
很多常用的功能已经写好了，直接用,
#### Element-ui|安装
在项目的 根目录 打开 终端,
通过命令 npm i element-ui 下载,
main.js 中,
- 导入 Element-ui
- 导入 样式
- use一下
#### Element-ui|使用
[看文档](https://element.eleme.cn/#/zh-CN/component/carousel)






