# vue-mobile

> 基于vue-cli扩展的用于移动端web开发的通用脚手架

## 特性

- 多入口打包：实现项目中遇到单页和多页同时存在的情况
- 通过命令快速生成模块代码：统一模块代码规范，一个module对应一个入口，不用在webpack单独配置入口
- 统一解决移动端点击延迟
- sass支持
- 自动添加浏览器前缀

## 代码目录

```js
+-- build/                ---webpack打包文件目录
|   --- entry.js               ---获取入口文件
|   --- module.js              ---生成module模块代码，一个module对应一个入口
|   --- plugins.js             ---开发环境webpack插件配置
|   --- plugins.prod.js        ---生产环境webpack插件配置
|   --- webpack.base.conf.js   ---webpack loader配置
|   --- ...
+-- config/               ---webpack打包配置目录
+-- src/                  ---源代码目录
|   +-- assets/                ---资源存放目录
|   +-- components/            ---公用组件
|   +-- modules/               ---项目模块目录
|   |   +-- moudule1                ---项目模块，对应一个入口，可以通过命令自动创建
|   |   |   +-- router/                   ---路由配置
|   |   |   +-- views/                    ---视图目录
|   |   |   --- App.vue                   ---根组件
|   |   |   --- main.js                   ---模块入口文件
+-- template/             ---模块模板文件目录
--- index.html            ---html模板文件
```

## 安装运行

``` bash
# 安装依赖
npm install

# 使用热加载模式访问（开发环境）
npm run dev

# 生产环境打包压缩（生产环境）
npm run build

# 创建模块，自动在src/modules/下生成模板代码和入口文件
npm run module
```
##Tip

```bash
#关于dingtalk-jsapi说明
关于index.html引用了dingtalk-api的script，在代码里面又引入dingtalk-jsapi这个库，原因是有的api在库里面没有(例如地图功能的dd.device.geolocation.stop在库里面没有)，而在script引入api里面有，所以库只用来做UI及其他方面的功能，而不是用于API调用。
```