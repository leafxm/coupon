Component({
    data: {
       searchValue: '',
       clear: 'clear'
    },
    methods: {
      clear: function () {
        this.setData({ searchValue: '' })
      },
      getFocus: function() {
        console.log('focus')
        this.setData({clear:'clear show'})
      }
    }
})