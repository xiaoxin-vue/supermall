import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000    
  });

  // 拦截器
  instance.interceptors.request.use(res => {
    // console.log(res);
    return res;
  }, err => {
    console.log(err);
  })

  // 响应器
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res;
  }, err => {
    console.log(err);
    return err;
  })

  // 发送真正的网络请求
  return instance(config);
}