import axios from 'axios'

const request = axios.create({
    baseURL:process.env.VUE_APP_URL,
    timeout:30000
})

// 注册响应拦截器
// Add a response interceptor
request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default request