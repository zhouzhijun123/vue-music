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


export function hotComments({id}){
    return request({
        url:"/comment/hot",
        method:"get",
        params:{
            type:2,
            id
        }
    })
}

export function listComments({id,offset}){
    return request({
        url:"/comment/playlist",
        method:"get",
        params:{
            id,
            limit:5,
            offset
        }
    })
}



