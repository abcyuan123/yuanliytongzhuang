const axios = require("../../utils/axios")

// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:'',
    order:3,
    searchList:[]//搜索列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.name)
    // const name = options.name
    this.setData({
      searchValue:options.name
    })
    this.searchFun(options.name)
    
  },
  bindinputfun(e){
    const val = e.detail.value
    this.setData({
      searchValue:val
    })
  },
  searchKey(){
    this.searchFun(this.data.searchValue)
  },
  searchFun(name){
    var param = {
      orderBy:'priceUp',
      page:1,
      pageSize:500,
      k:name
    }
    console.log(name)
    axios.querySearchList(param).then(res =>{
      if(res.code == 0){
        this.setData({
          searchList:res.data
        })
      }
    })
  },
  filter(e){
    const val = e.currentTarget.dataset.val
  //  console.log(val)
    this.setData({
      order:val
    })
    let myorder = ''
    if(val == 0){
      myorder = ''
    }else if(val == 1){
      myorder = 'addedDown'
    }else if(val == 2){
      myorder = 'ordersDown'
    }else if(val == 3){
      myorder = 'priceUp'
    }
    var param = {
      orderBy:myorder,
      page:1,
      pageSize:500,
      k:this.data.searchValue
    }
    axios.querySearchList(param).then(res =>{
      if(res.code == 0){
        this.setData({
          searchList:res.data
        })
      }
    })
  }
  
})
