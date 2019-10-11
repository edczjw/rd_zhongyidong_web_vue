import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 登录
      path: '/login',
      name: '登录',
      component: require('../views/login/login.vue').default,
    },
    {
      // 主页
      path: '/home',
      name: '空白主页',
      component: require('../views/index/index.vue').default,
      // 含有文件夹的文件children
      children: [
        {
          // 修改密码
          path: '/changePassword',
          name: '修改密码',
          component: require('../views/changePassword/changePassword.vue').default,
        },
        {
          // 用户管理->用户列表
          path: '/userManagement/userList',
          name: '用户列表',
          component: require('../views/userManagement/userList.vue').default,
        },
        {
          // 用户详情
          path: '/details/userDetail',
          name: '用户详情',
          component: require('../views/details/userDetail.vue').default,
        },
        {
          // 授信管理->授信列表
          path: '/creditManagement/creditList',
          name: '授信列表',
          component: require('../views/creditManagement/creditList.vue').default,
        },
        {
          // 授信详情
          path: '/details/creditDetail',
          name: '授信详情',
          component: require('../views/details/creditDetail.vue').default,
        },
        {
          // 借款管理->借款列表
          path: '/orderManagement/orderList',
          name: '借款列表',
          component: require('../views/orderManagement/orderList.vue').default,
        },
        {
          // 借款详情
          path: '/details/orderDetail',
          name: '借款详情',
          component: require('../views/details/orderDetail.vue').default,
        },
        {
          // 放款记录->放款列表
          path: '/loanManagement/loanList',
          name: '放款列表',
          component: require('../views/loanManagement/loanList.vue').default,
        },

        {
          // 放款记录->放款省份列表
          path: '/loanManagement/loanProvinceList',
          name: '放款省份列表',
          component: require('../views/loanManagement/loanProvinceList.vue').default,
        },

        {
          // 放款详情
          path: '/details/loanDetail',
          name: '放款详情',
          component: require('../views/details/loanDetail.vue').default,
        },
        {
          // 还款记录->还款列表
          path: '/refundManagement/refundList',
          name: '还款列表',
          component: require('../views/refundManagement/refundList.vue').default,
        },
        {
          // 还款详情
          path: '/details/refundDetail',
          name: '还款详情',
          component: require('../views/details/refundDetail.vue').default,
        },
        {
          // 对账管理->省办理确认文件
          path: '/checkManagement/confirmFile',
          name: '省办理确认文件',
          component: require('../views/checkManagement/confirmFile.vue').default,
        },
        {
          // 对账管理->省提前结清或退货文件
          path: '/checkManagement/returnFile',
          name: '省提前结清或退货文件',
          component: require('../views/checkManagement/returnFile.vue').default,
        },
        {
          // 对账管理->结算文件
          path: '/checkManagement/settleFile',
          name: '结算文件',
          component: require('../views/checkManagement/settleFile.vue').default,
        },
        {
          // 生成借据入账
          path: '/proloan/inner',
          name: '生成借据入账',
          component: require('../views/proloanlistdoinner/proloanlistdoinner.vue').default,
        },
      ]
    }]
})
