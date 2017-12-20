# 将upss-portal项目中，pagebuilder组件所依赖的基础组件打包出来的dll包

目前包含的几个库有：
```js
 "@beisen/base-button",
  "@beisen/beisen-scroll-bar",
  "@beisen/checkbox-list",
  "@beisen/common-input",
  "@beisen/common-label",
  "@beisen/common-mount",
  "@beisen/common-pop",
  "@beisen/date-time",
  "@beisen/dropdown",
  "@beisen/dropdown-button",
  "@beisen/dropdown-list",
  "@beisen/es6-promise-debounce",
  "@beisen/input-box",
  "@beisen/loading",
  "@beisen/nade-style",
  "@beisen/paging",
  "@beisen/pb-svg",
  "@beisen/pop-layer",
  "@beisen/radio-list",
  "@beisen/react-width-provider",
  "@beisen/search",
  "@beisen/selected-component",
  "@beisen/tab-component",
  "@beisen/text-area",
  "@beisen/text-box",
  "@beisen/time-picker",
  "@beisen/tool-tip",
  "@beisen/tree",
  "@beisen/upaas-portal-common-css",
  "@beisen/user-selector",
```

## 遇到的几个问题：

1. 在打包ethos组件的时候，基础组件内部的静态资源，如svg文件等如何处理？使用webpack publicPath配置
2. 打包出来的style css文件
3. 将打包出来的dist下的文件同步到服务器，包括：js css file


## changelog

### 1.0.9 
基于新的dll-naming 打包