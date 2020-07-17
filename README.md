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
### v-* 命令
[v-命令](https://share.mubu.com/doc/BRo2FU9zp9)
###ES6语法
[项目涉及的es6语法](https://share.mubu.com/doc/1gZK8iyntp9)
[ES6入门语法(个人笔记，可能不太完美)](https://blog.csdn.net/weixin_40422539/article/details/102636215)
### 单组件开发
后缀名是 .vue ,可以同时编写结构，逻辑和样式
template 标签中写结构
script 标签中写逻辑
style 标签中写样式
安装了 vetur 插件可以通过 <vue 生成基础结构
#### 注意:
- template中必须有一个根节点
- script 中的 data 写成函数，内部返回一个对象（如果都使用变量就会所有组件共享）
- 如果要使用写好的样式，直接 import 即可
### 快速原型开发
#### 环境配置
安装 Node.js 全部使用默认的设置，一路下一步即可
打开命令行工具，输入命令 node –v 以及 npm -v 检查是否安装成功
通过命令 npm install -g @vue/cli-service-global 安装一个小工具
#### 基本使用
保证 环境配置 成功之后
在 .vue 文件所在的路径下打开终端 输入 vue serve 文件名
等待 解析，然后在浏览器访问出现的 地址 即可
#### 播放器示例
使用 npm 下载别人写好的 包（模块，库）
比如 axios ，下载的命令是 npm install axios  或者缩写为 npm i axios
在要使用的组件中，使用 import 导入 下载的 包（模块，库）
比如 axios: 导入的代码是 import axios from ‘axios’
开心的使用刚刚导入的包（模块，库）吧
#### 组件抽取
创建 components 文件夹 创建一个文件 叫做 player.vue
把播放器的代码 剪切 进去,并调整 图片、css 文件的路径
App.vue中 使用 import 导入 播放器组件
在 components 中添加（注册） 播放器组件
页面上使用 注册的名字 当做标签名即可使用 播放器组件





