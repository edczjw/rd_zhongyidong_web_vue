<template>
  <!-- template必须包裹一个div，否则会报错 -->
  <div class="side" :class="{'side-menu' : this.$store.state.isLeftHiden}">
    <el-row>
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="rgb(85, 139, 160)"
          text-color="#fff"
          active-text-color="#EEDC82"
          unique-opened
          :collapse="this.$store.state.isLeftHiden"
        >
          <el-submenu index="1">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yonghuguanli" />
              </svg>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/userManagement/userList">
                <el-menu-item index="1-1">用户列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-ziyuan" />
              </svg>
              <span>授信管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/creditManagement/creditList">
                <el-menu-item index="2-1">授信列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dingdanguanli" />
              </svg>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/orderManagement/orderList">
                <el-menu-item index="3-1">订单列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fangkuanxinxi" />
              </svg>
              <span>放款记录</span>
            </template>
            <el-menu-item-group>
              <router-link to="/loanManagement/loanList">
                <el-menu-item index="4-1">放款列表</el-menu-item>
              </router-link>
              <router-link to="/loanManagement/loanProvinceList">
                <el-menu-item index="4-2">放款省份列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huankuanmingxi" />
              </svg>
              <span>还款记录</span>
            </template>
            <el-menu-item-group>
              <router-link to="/refundManagement/refundList">
                <el-menu-item index="5-1">还款列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-duizhangzhongxin" />
              </svg>
              <span>对账管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/checkManagement/confirmFile">
                <el-menu-item index="6-1">省办理确认文件</el-menu-item>
              </router-link>
              <router-link to="/checkManagement/returnFile">
                <el-menu-item index="6-2">省提前结清或退货文件</el-menu-item>
              </router-link>
              <router-link to="/checkManagement/settleFile">
                <el-menu-item index="6-3">结算文件</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 
         
        
          <el-submenu index="5">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-hetongxinxiguanli"></use>
              </svg>
              <span>合同信息</span>
            </template>
            <el-menu-item-group>
              <router-link to="/contractInformation/contractList">
                <el-menu-item index="5-1">合同列表</el-menu-item>
              </router-link>
              <router-link to="/contractInformation/warehouseContract">
                <el-menu-item index="5-2">在库合约</el-menu-item>
              </router-link>
              <router-link to="/contractInformation/settleContract">
                <el-menu-item index="5-3">结清合约</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
      
          -->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped  lang="less">
.el-menu {
  /* important的意义在于优先于它内部定义的样式 */
  // margin: -0.9px !important;
  border-color: rgb(211, 212, 212);
  background: rgb(85, 139, 160);
  border-right: none;
  /* background: #108dc6; */
  /deep/ .el-submenu__title i {
    color: #fff;
  }
  /deep/ .el-submenu .el-menu-item {
    min-width: 198px;
  }
}

/* 菜单 */
.side {
  position: fixed;
  font-family: '宋体';

  width: 199px;
  height: 100%;
  transition: all 0.5s;
  /* background-color: rgb(211, 212, 212); */
  background: rgb(85, 139, 160);
  // border: 1px solid rgb(211, 212, 212);
}

.side-menu {
  width: 64px;
  transition: all 0.5s;
  /* background-color: rgb(211, 212, 212); */
  background: rgb(85, 139, 160);
}

.el-menu-item-group {
  text-align: center;
}
svg {
  width: 32px;
  height: 32px;
  padding: 1px 6px;
}
</style>