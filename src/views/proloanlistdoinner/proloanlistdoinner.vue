<template>
  <div class="page-human">
    <el-card>
      <div class="sanjiao"></div>
      <el-card class="time">
        <el-form :model="searchform" ref="searchform" label-width="100px">
          <el-form-item label="选择时间" prop="beginDate">
            <el-date-picker
              size="mini"
              v-model="searchform.beginDate"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="请选择时间"
            ></el-date-picker>
          </el-form-item>
        </el-form>
      </el-card>

      <!-- 按钮 -->
      <div class="button">
        <el-button size="mini" @click="profile()">生成</el-button>
        <el-button size="mini" @click="downloadfile()">下载</el-button>
        <el-button size="mini" @click="insertfile()">导入</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,

      searchform: {}
    };
  },
  mounted() {},
  methods: {
    //生成
    profile() {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/Repaylist",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {
              
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        },
        error => {}
      );

    },
    //下载
    downloadfile() {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/Repaylist",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {

          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        },
        error => {}
      );

    },
    //导入
    insertfile() {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/Repaylist",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {

          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        },
        error => {}
      );

    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
  .button {
    text-align: center;
    margin: 20px auto;
    width: 30%;
    padding: 30px;
  }
  .time {
    margin: 20px auto;
    width: 30%;
    padding: 30px;
    position: relative;
    background: rgb(128, 168, 194); /* Fallback */
    background: linear-gradient(-150deg, transparent 1.5em, rgb(128, 168, 194) 0);
    border-radius: 0.5em;
  }
  .time::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
        to left bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.2) 0,
        rgba(0, 0, 0, 0.4)
      )
      100% 0 no-repeat;
    width: 1.73em;
    height: 3em;
    transform: translateY(-1.3em) rotate(-30deg);
    transform-origin: bottom right;
    border-bottom-left-radius: inherit;
    box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
  }

/deep/ .el-card {
  // background: rgba(255, 255, 255, 0.1);
  /deep/ .el-table tr,
  .el-table th {
    background: rgba(173, 173, 173, 0.3);
    color: rgb(116, 104, 104);
    font-family: "苹方";
  }
  /deep/ .el-table--border td,
  .el-table--border th,
  .el-table__body-wrapper
    .el-table--border.is-scrolling-left
    ~ .el-table__fixed {
    border-right: 1px solid #fff;
  }
}
.page-human {
  .human-table {
    margin-top: 20px;
  }
  .human-pagination {
    margin-top: 30px;
  }
}
</style>