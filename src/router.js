module.exports = [
  {
    path: 'pages/index/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark',
      usingComponents: {
        'zan-button': '../../../static/zanui/btn/index'
      }
    }
  },
  {
    path: 'pages/car/car',
    config: {
      usingComponents: {
        'slider-left': '../../../static/sliderLeft/index',
        'zan-card': '../../../static/zanui/card/index'
      }
    }
  }
]