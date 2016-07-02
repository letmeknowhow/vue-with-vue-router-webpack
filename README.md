# vue-vueRouter-webpack-example

> Example using Vue.

## Setup

``` bash
npm install
npm run dev
```

``` bash
npm run build
```

## 目录结构
<pre>
│  .gitignore          # 忽略无需git控制的文件  比如 node_modules
│  package.json        # 项目配置
│  readme.md           # 项目说明
│  index.html          # 首页
│
├─node_modules
│
├─build
│     │  webpack.base.config.js         # webpack 基础配置
│     │  webpack.dev.config.js          # webpack 开发配置
│     └─ webpack.prod.config.js         # webpack 生产配置
│
└─src
    │  app.vue         # 主vue
    │  main.js         # 启动配置
    │  router.js       # 路由
    │  filter.js       # 过滤器
    │  directive.js    # 指令
    │
    ├─components       # 组件
    │      index.vue
    │
    ├─vuex             # vuex相关
    │      actions.js
    │      getters.js
    │      store.js
    │    
    └─assets             
          │            
	      │
	      ├─ css 		# 公用css
    	  │
    	  │
    	  ├─ font 		# 字体
    	  │
    	  │
    	  └─ img 		# 图片资源
</pre>

## 技术栈
``` bash
vue
webpack
vuex
vue-router
```
