module.exports = {
  /**
  * 组件共通时把组件中的方法合并到页面中
  * param
  *  pageObj（第一个参数）：注册Page()函数时传入的object
  *	 compObjArr(后面的参数)：页面require的共通组件
  **/
  dateFormatter(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1 > 9
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    return `${year}-${month}-${day}`
  },
  mergeComponents: function () {
    let pageObj = arguments[0];
    let length = arguments.length;
    for (let i = 1; i < length; i++) {
      let compObj = arguments[i];
      for (let compKey in compObj) {
        if (compKey == 'data') {
          // 合并页面中的data
          let data = compObj[compKey];
          for (let dataKey in data) {
            pageObj.data[dataKey] = data[dataKey];
          }
        } else {
          // 合并页面中的方法
          pageObj[compKey] = compObj[compKey];
        }
      }
    }
  }
}