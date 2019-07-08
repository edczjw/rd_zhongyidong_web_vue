<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>


<style lang='less'>
// 整体布局样式
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  text-decoration: none;
}

html {
  height: 100%;
}

body {
  height: 100%;
}

#app {
  height: 100%;
}

// .wrapper {
//   height: 100%;
// }
//整个页面大容器
.wrapper-inner {
  height: 100%;

  background: #fff;
}
.el-input{
  width: 220px;
}
//左侧菜单栏
.side-container {
  font-size: 14px;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 200px;
}

//右半部分
.main-container {
  height: 100%;
  margin-left: 200px;
}

/* Table */
.table-container .el-table th {
  text-align: center;
}

/*登陆自定义*/
.login-container {
  .el-input-group__prepend {
    color: #141414;
    background: #eee;
  }
}

//搜索表单和表格部分第二大盒子
.underOne {
  height: 1200px;
  padding: 5px 5px 20px 5px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: rgb(224, 226, 226);
}

//搜索表单和表格部分第一大盒子
.page {
  height: 1200px;
  padding: 5px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: #dfd9d9;
}

//分页部分
.block {
  height: 5px;
  margin: 5px 0;
}

//搜索菜单标题
// .el-form-item__label {
//   width: 80px !important;
// }

//搜索菜单输入框部分
.el-form-item__content {
  margin-left: 60px !important;
}

//搜索和重置部分
.di {
  text-align: center;
}

//中部汇总样式
.cen-box {
  margin-bottom: 40px;
}

//汇总金额部分
.dl-center {
  float: left;

  width: 650px;
}

//导出菜单部分
.dr-center {
  float: right;

  margin-right: 10px;
}

//不显示
.dark {
  display: none !important;
}

//不展示
.layout-menu {
  display: none;
}

//右大半部分
.container-width {
  margin-left: 0;
  
}

.xiangqingtitle {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  text-align: center;

  color: darkgray;
}

.tablecon {
  height: 100%;
}

// 报表搜索框标题
.lostitle {
  margin-bottom: 20px;
  padding-bottom: 10px;

  border-bottom: 1px solid rgba(90, 138, 201, 0.432);
}

.content {
  padding: 20px;

  background-color: #f4f8ff;
}
.el-date-picker__time-header .el-input{
  width: 100%;
}
//返回顶部
.gotop {
  position: fixed;
  z-index: 9999;
  right: 33px;
  bottom: 33px;

  display: none;
  width: 60px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  -webkit-transition-timing-function: linear; /* Safari and Chrome */
  transition-timing-function: linear;

  opacity: 0.4;
  border: 1px solid blue;
  // border-radius: 50%;
}

.gotop:hover {
  bottom: 33px;

  opacity: 1;
  border: 2px solid rgb(115, 255, 0);
}
</style>
