const API_BASE_URL = 'https://api.it120.cc'
const request = (url,method,data)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: API_BASE_URL+url,
      method ,
      data,
      header:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
    })
  })
}


module.exports = {
  querySwiperData: (data) => { //查询首页的列表
    return request('/tz/banner/list', 'get', data)
  },
  queryCatagyData: (data) => {
    return request('/tz/shop/goods/category/all','get',data)
  },
  queryMiaosha:(data) =>{
    return request('/tz/shop/goods/list','post',data)
  },
  queryBaopin:(data) =>{
    return request('/tz/shop/goods/list','post',data)
  },
  queryList:(data) =>{
    return request('/tz/shop/goods/list','post',data)
  },
  querySearchList:(data) =>{
    return request('/tz/shop/goods/list','post',data)
  },
  queryDetailSwiper:(data) =>{
    return request('/tz/shop/goods/detail','get',data)
  }
}