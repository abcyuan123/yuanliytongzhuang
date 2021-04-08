// pages/goods/index.js
const axios = require('../../utils/axios')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myid:'',
    isLike:true,//是否收藏
    show: false,//弹出面板
    goodsDetailL:[],//swiper的数组
    basicInfo:{},
    goodsDetail:'',
    mynum:0,
    // goodsDetail:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const myid = options.myid
    this.setData({
      myid:myid
    })
    // console.log(options.myid)
    axios.queryDetailSwiper({id:myid}).then(res =>{
      console.log(res)
      if(res.code === 0){
        this.setData({
          goodsDetailL:res.data.pics,
          basicInfo:res.data.basicInfo,
          goodsDetail: res.data.content
        })
      }
    })
  },
  gettocart(){
    wx.switchTab({
      url: '/pages/shop-cart/index?id='+this.data.myid+'&num='+this.data.mynum,
    })
  },
  islickFun(){
    this.setData({
      isLike:!this.data.isLike
    })
  },
  showpopup(){
    this.setData({
      show: true
    })
  },
  onChange(e){
    this.setData({
      mynum: e.detail
    })
  },
})