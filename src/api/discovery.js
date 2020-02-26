import request from '@/utils/request'

// 轮播图
export function banner(){
    return request({
        url:"/banner",
        method:"get"
    })
}