import axios from 'axios';
import { ElMessage } from 'element-plus';
// create an axios instance
const service = axios.create({
  baseURL: `https://api.github.com`, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
});
// request interceptor
service.interceptors.request.use(
  config => {
    for (const i in config.header) {
      config.headers[i] = config.header[i];
    }
    if (!config.data) {
      config.data = [];
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200 || res.code !== 20000) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 404) {
        ElMessage({
          message: '用户名密码错误!',
          type: 'error',
          duration: 2 * 1000,
        });
        return Promise.reject(new Error(res.msg || 'Error'));
      }
      if (res.code === 558) {
        ElMessage({
          message: res.msg || '网络错误请稍后重试!',
          type: 'error',
          duration: 2 * 1000,
        });
        return Promise.reject(new Error(res.msg || 'Error'));
      }
      if (res.code === 558) {
        ElMessage({
          message: res.msg || '网络错误请稍后重试!',
          type: 'error',
          duration: 2 * 1000,
        });
        return Promise.reject(new Error(res.msg || 'Error'));
      }
      if (res.code === 559) {
        ElMessage({
          message: res.msg || '网络错误请稍后重试!',
          type: 'error',
          duration: 2 * 1000,
        });
        return Promise.reject(new Error(res.msg || 'Error'));
      }
      if (response.status === 200 && res.code !== 500) {
        let newCode = '';
        if (res.code) {
          newCode = res.code.toString();
        }

        if (newCode && newCode.length && newCode.length >= 5 && newCode !== '20000' && res.code) {
          ElMessage({
            message: res.msg || '网络错误请稍后重试!',
            type: 'error',
            duration: 2 * 1000,
          });
          return Promise.reject(new Error(res.msg || 'Error'));
        } else {
          return res;
        }
      } else {
        ElMessage({
          message: res.msg || '当前系统异常，请稍后再试!!',
          type: 'error',
          duration: 2 * 1000,
        });
        return Promise.reject(new Error(res.msg || 'Error'));
      }
    } else {
      return res;
    }
  },
  error => {
    let originalRequest = error.config;
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1 && !originalRequest._retry) {
      ElMessage({
        message: '连接超时,请检查网络后重试!',
        type: 'error',
        duration: 2 * 1000,
      });
      return Promise.reject(error);
    }
    if (error && error.response && error.response.status && error.response.status === 401) {
      ElMessage({
        message: '登录过期,请重新登录!',
        type: 'error',
        duration: 2 * 1000,
      });
      let from = window.sessionStorage.getItem('from');
      if (from === 'pad' || from === 'orderly') {
        setTimeout(() => {
          window.app.logout();
        }, 100);
      }
      //   store.dispatch("user/logout");
      return Promise.reject(error);
    }
    if (error && error.response && error.response.status && error.response.status === 406) {
      ElMessage({
        message: '授权码错误,请输入正确的授权码!',
        type: 'error',
        duration: 2 * 1000,
      });
      return Promise.reject(error);
    }
    if (error.message === 'Network Error') {
      ElMessage({
        message: '网络错误,请检查网络后重试!',
        type: 'error',
        duration: 2 * 1000,
      });
      return Promise.reject(error);
    }
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 2 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
