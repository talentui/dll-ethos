# 将upss-portal项目中，pagebuilder组件所依赖的基础组件打包出来的dll包

## 遇到的几个问题：

1. 在打包ethos组件的时候，基础组件内部的静态资源，如svg文件等如何处理？使用webpack publicPath配置
2. 打包出来的style css文件
3. 将打包出来的dist下的文件同步到服务器，包括：js css file
