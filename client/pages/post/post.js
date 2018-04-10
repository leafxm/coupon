const util = require('../../utils/util.js')
const type = require('../../behavious/type.js')

Page({
  behaviors: [type],
  data: {
    startDate:'',
    endDate:'',
    now:'',
    showTips:false,
  },
  onShow:function() {
    console.log(this.data)
    const date = util.dateFormatter(new Date())
    console.log(date)
    this.setData({
      startDate: date,
      endDate: date,
      now: date
    })
  },
  bindDateChange: function(e) {
    const obj = {}
    obj[e.currentTarget.dataset.type] = e.detail.value
    this.setData(obj)
  },
  formSubmit: function (e) {
     
      wx.navigateBack({
        delta: 1
      })
  },
})
