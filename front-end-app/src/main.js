import Vue from 'vue';
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import singleSpaVue from 'single-spa-vue';
import { setPublicPath } from 'systemjs-webpack-interop';
import App from './App.vue';
import router from './router';
import store from './store';
import Api from './utils/request';

Vue.config.productionTip = false;
Vue.prototype.$axios = Api;
let vueLifecycles = {};
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

if (process.env.NODE_ENV === 'alone') { // 独自运行的环境
    // eslint-disable-next-line
    new Vue({
        el: '#contract-app',
        router,
        render: (h) => h(App),
        store
    });
} else {
    setPublicPath('contract-app'); // 项目模块名
    vueLifecycles = singleSpaVue({
        Vue,
        appOptions: {
            render: (h) => h(App),
            store,
            router
        }
    });
}
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;