import request from '@/utils/request';

// 轮播图
export function mvUrl({id}) {
  return request({
    url: '/mv/url',
    method: 'get',
    params:{
        id
    }
  });
}