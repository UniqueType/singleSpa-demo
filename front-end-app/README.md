# app2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev  // 启动嵌入主系统运行的开发环境
npm run dev:alone  // 启动独自运行的开发环境
```

### Compiles and minifies for production
```
npm run build:alpha  // 嵌入主系统运行的测试包
npm run build:prod // 嵌入主系统运行的生产包
npm run build  // 嵌入主系统运行的生产包
注： 打独立运行的包 暂未配置相应命令
// 如若需要打独立运行的包，需要修改如下：
## main.js
 new Vue方法创建实例 而不走singeSpaVue

##vue.config.js
直接注释 process.env.NODE_ENV !== 'alone' ? config.externals(['vue', 'vue-router']) : ''

更改以上两点后，执行相应打包命令即可
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
