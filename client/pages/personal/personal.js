//index.js
//获取应用实例
const app = getApp()

const pageObj = {
  data: {
    coupons: [{
      cName:'云海肴',
      cType:'food',
      endDate:'2018-01-31',
      price: '10',
      cViews:110,
      cLikes:2,
      publisher:'小球',
      publishDate:'2017-12-31'
    }, {
      cName: '火锅',
      cType: 'food',
      endDate: '2018-01-31',
      price: '10',
      cViews: 110,
      cLikes: 2,
      publisher: '小球',
      publishDate: '2017-12-31'
    },
    {
      cName: '火锅',
      cType: 'food',
      endDate: '2018-01-31',
      price: '10',
      cViews: 110,
      cLikes: 2,
      publisher: '小球',
      publishDate: '2017-12-31'
    },
    {
      cName: '火锅',
      cType: 'food',
      endDate: '2018-01-31',
      price: '10',
      cViews: 110,
      cLikes: 2,
      publisher: '小球',
      publishDate: '2017-12-31'
    },
    {
      cName: '火锅',
      cType: 'food',
      endDate: '2018-01-31',
      price: '10',
      cViews: 110,
      cLikes: 2,
      publisher: '小球',
      publishDate: '2017-12-31'
    }],
    userName:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onLoad: function (option) {
    this.setData({
      userName :option.user})
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goPost: function() {
    wx.navigateTo({
      url: '../post/post'
    })
  }
}

Page(pageObj)