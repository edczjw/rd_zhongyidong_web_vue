<template>
  <div class="page-detail">
    <!-- <h1>借款信息</h1> -->
    <div class="detail-table">
      <el-card>
        <el-button type="primary" size="mini" style="margin-bottom:10px;">订单信息</el-button>
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">放款状态</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{status}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">姓名</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{usrIdName}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">实际出资方名称</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.orgNm}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">结算金额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.amt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">办理日期</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.acpDt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户手机号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.mblNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">和包贷借款订单号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.mplOrdNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">和包贷借款订单日期</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.mplOrdDt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">资金方借款订单号</div>
          </el-col>
          <el-col :span="4">
            <div class="right" style="font-size:12px;">{{data.orgOrdNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">实际出资方编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.orgId}}</div>
          </el-col>

          <el-col :span="4">
            <div class="left">取货码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.pickCode}}</div>
          </el-col>

          <el-col :span="4">
            <div class="left">机型串码编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.modelCode}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">渠道编码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.appId}}</div>
          </el-col>
        </el-row>
        <el-button type="primary" size="mini" style="margin-bottom:10px; margin-top:30px;">营业厅信息</el-button>
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">营业厅编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.depId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">营业厅名称</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.depNm}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">营业厅经营模式</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.mngModel}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">省份账单日</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.provStgDay}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">营业员编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.oprId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">营业员手机号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.oprMblNo}}</div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      hbUsrNo: "",
      status: "",
      usrIdName: ""
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.hbUsrNo = this.$route.query.hbUsrNo;
    this.status = this.$route.query.status;
    this.usrIdName = this.$route.query.usrIdName;
    var data = {
      hbUsrNo: this.$route.query.hbUsrNo
    };
    this.load(data);
  },

  methods: {
    load(data) {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/LoanSelfInfo",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {
            this.data = res.detail.result;
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
/deep/ .el-card__body {
  //   padding: 0px;
}
.page-detail {
  h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .detail-table {
    // border: 1px solid #f5f5f5;
    // background: rgba(173, 173, 173, 0.2);
    // border: 1px solid #666;
    // padding: 20px;
    // border-radius: 0px 0px 5px 5px;
    .table-row {
      border: 1px solid #ccc;
      border-bottom: none;
      border-right: none;
      &:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }
    }
    .el-col {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      .left {
        padding: 0 10px;
        height: 39px;
        background: #e5e5e5;
        color: #666;
      }
      .right {
        padding: 0 10px;
      }
      &:last-child {
      }
      a {
        color: #66b1ff;
        padding: 0px 20px;
      }
    }
  }
  .comfirmButton {
    margin-top: 30px;
  }
  .table {
    margin-top: 40px;
  }
}
</style>