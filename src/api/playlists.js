import request from '@/utils/request';
// 精品歌单
export function highquality({ cat }) {
  return request({
    url: '/top/playlist/highquality',
    method: 'get',
    params: {
      limit: 1,
      cat
    }
  });
}
