// pages/shop-cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:583724,num:4,pic:'https://cdn.it120.cc/apifactory/2019/03/25/ecea13665301ad26df1a7a0c0612d043.jpeg',price:30,name:'小黄鱼面'},
      {id:583725,num:4,pic:'https://cdn.it120.cc/apifactory/2019/03/25/ecea13665301ad26df1a7a0c0612d043.jpeg',price:30,name:'小黄鱼面'}
    ],
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getoalfun()
  },
  getoalfun(){
    let mylist = this.data.list
    let myprice = 0
    mylist.forEach((item,i)=>{
      myprice += item.num*item.price
    })
    this.setData({
      total:myprice
    })
  },
  onChange(e){
    //加减
    console.log(e)
    const myid = e.currentTarget.dataset.myid
    let mylist = this.data.list
    mylist.forEach((item,i)=>{
      if(item.id == myid){
        item.num = e.detail
      }
    })
    this.setData({
      list:mylist
    })
    this.getoalfun()
  },
  deleFun(e){
    console.log(1111)
     const myid = e.currentTarget.dataset.myid
     let mylist = this.data.list
     mylist.forEach((item,i )=> {
         if(item.id == myid){
          mylist.splice(i,1)
         }
     })
     this.setData({
        list: mylist
     })
     this.gettoalfun()
  }
})