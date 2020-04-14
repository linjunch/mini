Page({
  data: {
    value: "",
  },
  changeValue(e) {
    const { value } = e.detail;
    const { info } = e.target.dataset;
    console.log(info);
    this.setData({
      value,
    });
  },
});
