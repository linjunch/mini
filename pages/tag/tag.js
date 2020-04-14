Page({
  data: {
    msg: "Hello Mina",
    num: 123,
    flag: false,
    nul: null,
    udf: undefined,
    arr: ["skyblue", "#0094ff", {}, [132, 123]],
    obj: {
      name: "mina",
      mini: "wx",
    },
    list: [
      { name: "xiazi", token: "001" },
      { name: "modao", token: "002" },
      { name: "dizao", token: "003" },
    ],
  },
  showinfo(e) {
    console.log(e.target.dataset.info);
    console.log(e.currentTarget.dataset.info);
  },
  toggle() {
    console.log(111);
    this.setData({
      flag: !this.data.flag,
    });
  },
});
