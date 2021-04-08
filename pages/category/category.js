const axios = require("../../utils/axios")

// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:0,
    cateArray:[],
    searchValue:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cateId = options.cateId
    if(cateId){
      this.getCategoryFun(cateId)
    }else{
      this.getCategoryFun(1872)
    }
  },
  getCategoryFun(order){
    const param = {
      categoryId:order,
      page:1,
      pageSize:10000
    }
    axios.querySearchList(param).then(res =>{
      // console.log(res)
      if(res.code == 0){
        this.setData({
          cateArray:res.data
        })
      }else if(res.code == 700){
        this.setData({
          cateArray:[]
        })
      }
    })
  },
  filter(e){
   var val = e.currentTarget.dataset.val
  //  console.log(val)
   this.setData({
     order:val
   })
   let myid = 0
   if(val == 0){
     myid = 1872
   }else if(val == 1){
     myid = 1873
   }else if(val == 2){
     myid = 1875
   }else if(val == 3){
     myid = 1906
   }
   this.getCategoryFun(myid)
  },
  bindinputfun(e){
    this.setData({
      searchValue:e.detail.value
    })
  },
  seachFun(){
    wx.navigateTo({
      url: '/pages/search/index?name='+this.data.searchValue,
    })
  },
  gettodetail(e){
    const myid = e.currentTarget.dataset.myid
    wx.navigateTo({
      url: '/pages/goods/index?myid='+myid,
    })
  }
})