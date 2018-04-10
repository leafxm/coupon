//index.js
//获取应用实例
const app = getApp()

const pageObj = {
  data: {
    cObj: {
      cName:'云海肴',
      cType:'food',
      endDate:'2018-01-31',
      price: '10',
      cViews:110,
      cLikes:2,
      oriPrice: '20',
      publisher:'小球',
      publishDate:'2017-12-31',
      condition:"无",
      weixin:'笨蛋小球'
    },
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLaunch: function () {

  },
  //事件处理函数
  onLoad: function () {
    
  },
  toPersonal() {
    const user = this.data.cObj.publisher
    wx.navigateTo({
      url: `../personal/personal?user=${user}`
    })
  },
}

Page(pageObj)