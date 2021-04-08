// index.js
const axios = require('../../utils/axios')
// 获取应用实例
const app = getApp()

Page({
  data: {
    banners:[],
    catagy: [],//分类
    miaosha: [],//秒杀数据
    baopin: [],//爆品
    kanjia: [],//砍价
    list: [],//商品列表
    page:1,//默认是第一页
    bottomDivider: false,
    inputValue:'',
    list:[
      {id:583724,num:4,pic:'https://cdn.it120.cc/apifactory/2019/03/25/ecea13665301ad26df1a7a0c0612d043.jpeg',price:30,name:'小黄鱼面'},

    ],
  },
  getinputValue(e){
    this.setData({
      inputValue:e.detail.value//将获取的值传到inputValue中
    })
  },
  searchFun(){
    wx.navigateTo({
      url: '/pages/search/index?name='+this.data.inputValue
    })
  },
  catagyFun(e){
    wx.setStorageSync('itmename', e.currentTarget.dataset.itmename)
    wx.switchTab({  //bar的页面 不能这样传参
      url: '/pages/category/category',
    })
  },
  onLoad:function() {
    axios.querySwiperData({type:'index'}).then(res=>{
      if(res.code == 0){
        this.setData({
          banners:res.data
        })
      }
    })
    axios.queryCatagyData().then(res => {
      // console.log(res)
       if(res.code === 0){
         this.setData({
          catagy:res.data
         })
       }
    })
    axios.queryMiaosha({miaosha:true}).then(res=>{
      // console.log(res)
      if(res.code === 0){
        res.data.forEach( ele => {
          if (ele.dateStart) {
            ele.dateStartInt = 30 * 60 * 60 * 1000
          }
         })
        this.setData({
          miaosha:res.data
        })
      }
    })
    axios.queryMiaosha({kanjia:true}).then(res =>{
      if(res.code === 0){
        this.setData({
          kanjia:res.data
        })
      }
    })
    axios.queryBaopin({recommendStatus:1}).then( res => {
      if(res.code === 0){
        this.setData({
         baopin: res.data
        })
      }
   })
   const param ={
     categoryId:'',
     page:1,
     padeSize:10
   }
   axios.queryList(param).then(res =>{
     if(res.code === 0){
       this.setData({
         list:res.data
       })
     }
   })
   this.getoalfun()
  },
  onReachBottom:function(){
    let myp = this.data.myPage+1
    this.setData({
      myPage:myp
    })
    const param = {
      categoryId:'',
      page:myp,
      pageSize:6
    }
    axios.queryList(param).then(res =>{
      if(res.code === 0){
        this.setData({
          list:this.data.list.concat(res.data)
        })
      }
    })
  },
  gettodetail(e){
    const myid = e.currentTarget.dataset.myid
    wx.navigateTo({
      url: '/pages/goods/index?myid='+myid,
    })
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
 
})
