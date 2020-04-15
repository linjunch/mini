Page({
  data: {
    who: "",
    doing: "",
    other: "",
    res: "",
  },
  changeValue(e) {
    const { value } = e.detail;
    const { key } = e.target.dataset;
    this.setData({
      [key]: value,
    });
  },
  getRes() {
    const { who, doing, other } = this.data;
    this.setData({
      res: `
      ${who}${doing}是怎么回事呢？${who}相信大家都很熟悉，但是${who}${doing}是怎么回事呢，下面就让小编带大家一起了解下吧。
      ${who}${doing}，其实就是${other}，大家可能会很惊讶${who}怎么会${doing}呢？但事实就是这样，小编也感到非常惊讶。
      这就是关于${who}${doing}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！
      `,
    });
  },
});
