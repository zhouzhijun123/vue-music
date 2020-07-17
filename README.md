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


