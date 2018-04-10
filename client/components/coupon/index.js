Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    cObj: {
      type: Object,
      value:{}
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    toPersonal(){
      const user = this.data.cObj.publisher
      wx.navigateTo({
        url: `../personal/personal?user=${user}`
      })
    },
    toDetails() {
      const id = this.data.cObj.id
      wx.navigateTo({
        url: `../details/details?id=${id}`
      })
    }
  }
})