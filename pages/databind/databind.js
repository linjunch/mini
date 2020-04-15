Page({
  data: {
    value: "",
  },
  changeValue(e) {
    // 获取参数的方法
    // 1.事件源属性event
    // const { value } = e.detail;
    // 2.传递的参数
    // const { info } = e.target.dataset;
    // console.log(info);
    this.setData({
      value,
    });
  },
});
