//index.js
//获取应用实例
const app = getApp()

const pageObj = {
  data: {
    coupons: [{
      id:11,
      cName:'云海肴',
      cType:'food',
      endDate:'2018-01-31',
      oriPrice:'20',
      price: '10',
      cViews:110,
      cLikes:2,
      publisher:'小球',
      publishDate:'2017-12-31'
    }, {
      id:22,
      cName: '火锅',
      cType: 'food',
      endDate: '2018-01-31',
      oriPrice: '50',
      price: '10',
      cViews: 110,
      cLikes: 2,
      publisher: '小球',
      publishDate: '2017-12-31'
    },
    {
      id: 22,
      cName: '火锅',
      cType: 'food',
      endDate: '2018-01-31',
      oriPrice: '50',
      price: '10',
      cViews: 110,
      cLikes: 2,
      publisher: '小球',
      publishDate: '2017-12-31'
    },
    {
      id: 22,
      cName: '火锅',
      cType: 'food',
      endDate: '2018-01-31',
      oriPrice: '50',
      price: '10',
      cViews: 110,
      cLikes: 2,
      publisher: '小球',
      publishDate: '2017-12-31'
    }],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLaunch: function () {

  },
  //事件处理函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      console.log(app.globalData.userInfo)
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
  },
 toPersonal() {
    const user = this.data.userInfo.nickName
    wx.navigateTo({
      url: `../personal/personal?user=${user}`
    })
  }
}

Page(pageObj)