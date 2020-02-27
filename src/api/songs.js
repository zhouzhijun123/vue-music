import request from '@/utils/request';
// mv地址
export function topSongs({type}) {
    return request({
      url: '/top/song',
      method: 'get',
      params:{
          type
      }
    });
  }
