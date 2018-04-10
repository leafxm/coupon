module.exports = Behavior({
  behaviors: [],
  data: {
    typeObj : {
      '美食': 'food',
      '服装': 'clothes',
      '出行': 'trip',
      '娱乐': 'entertainment',
      '其他': 'other'
    },
   typeArray: []
},
  ready() {
      this.setData({
        typeArray: Object.keys(this.data.typeObj)
    })
  },
})