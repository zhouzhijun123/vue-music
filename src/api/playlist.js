import request from '@/utils/request'

export function playlistDetail({id}){
    return request({
        url:"/playlist/detail",
        method:"get",
        params:{
            id
        }
    })
}