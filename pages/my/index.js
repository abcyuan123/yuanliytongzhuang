// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  gotoorder(e){
    const type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/order/index?type=' + type,
    })
    if(type == 1){
      wx.setStorageSync('daifukuan', '[{"id":"583724"}]')
      let arr = new Array
      wx.setStorageSync('arr', arr)
    }
  }
})