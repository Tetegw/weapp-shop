import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/index',
        text: '首页'
      }, {
        pagePath: 'pages/car/car',
        text: '购物车'
      }]
    }
  }
}
