import request from '@/utils/request';

// 轮播图
export function banner() {
  return request({
    url: '/banner',
    method: 'get'
  });
}
export function personalized({ limit = 10 }={}) {
  window.console.log(limit);
  return request({
    url: '/personalized',
    method: 'get',
    params: {
      limit
    }
  });
}
