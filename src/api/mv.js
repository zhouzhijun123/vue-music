import request from '@/utils/request';

// mv地址
export function mvUrl({id}) {
  return request({
    url: '/mv/url',
    method: 'get',
    params:{
        id
    }
  });
}
// 相似mv
export function simiMV({mvid}) {
  return request({
    url: '/simi/mv',
    method: 'get',
    params:{
      mvid
    }
  });
}
// mv评论
export function mvComments({id,offset}) {
  return request({
    url: '/comment/mv',
    method: 'get',
    params:{
      id,
      limit:5,
      offset
    }
  });
}
// mv详情
export function mvDetail({mvid}) {
  return request({
    url: '/mv/detail',
    method: 'get',
    params:{
      mvid
    }
  });
}
// 歌手信息
export function artistInfo({artistId}) {
  return request({
    url: '/artists',
    method: 'get',
    params:{
      id:artistId
    }
  });
}