import axios from 'axios';
import { showLoading, hideLoading } from './loading';
import dataService from './mockService';

// axios.defaults.withCredentials = true; // 是否向服务端发送cookie 默认不发送
let baseUrl;
if (process.env.VUE_APP_ENV === 'production') { // 生产环境
    // const loc = window.location;
    // baseUrl = `${loc.protocol}//${loc.host}/`;
    baseUrl = 'http://localhost:3002/';
} else if (process.env.VUE_APP_ENV === 'alpha') { // 测试环境
    baseUrl = 'http://10.8.37.26:8080/';
} else { // development 开发环境
    baseUrl = 'http://10.8.40.223:3002/';
}

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response;
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });
function run(serviceName, params, success, fail) {
    const service = dataService[serviceName];
    let method = params.method || 'POST';
    let url = serviceName;
    if (url.substr(0, 4) === 'http') {
        baseUrl = '';
    }
    if (service && service.isMock) {
        method = service.method;
        url = service.mockUrl;
        axios.get(url).then((res) => {
            if (success) {
                success(res.data);
            }
        }).catch((error) => {
            console.log(error);
            if (fail) {
                fail();
            }
        });
    } else {
        const config = {
            method,
            url,
            baseURL: baseUrl,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null
        };
        showLoading();
        console.log(`${serviceName}-->请求参数===${JSON.stringify(config)}`);
        axios(config).then((res) => {
            setTimeout(() => {
                hideLoading();
            }, 200);
            console.log(`${serviceName}返回数据:${res && res.data && typeof res.data === 'object' ? JSON.stringify(res.data) : res.data}`);
            if (success) {
                success(res.data);
            }
        }).catch((err) => {
            hideLoading();
            console.log(`err ${err}`);
            // Toast('网络或服务器异常，请稍后再试。');
            if (fail) {
                fail();
            }
        });
    }
}
export default { run };
