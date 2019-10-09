<template>
  <div class="page-detail">
    <!-- <h1>借款信息</h1> -->
    <div class="detail-table">
      <el-card>
        <el-button type="primary" size="mini" style="margin-bottom:10px;">借款信息</el-button>
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">案件状态</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.status == 'U'">审核中</span>
              <span v-else-if="data.status == 'R'">申请拒绝</span>
              <span v-else="data.status == 'P'">申请通过</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户姓名</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{usrIdName}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">贷款金额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.loanAmt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">借款分期数</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.loanMonth}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">和包贷借款订单号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.brwOrdNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">和包贷借款订单日期</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.brwOrdDt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">套餐金额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.pkgAmt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">套餐编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.productId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">套餐描述</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.productNm}}</div>
          </el-col>

          <el-col :span="4">
            <div class="left">商品名称</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.goodNm}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">商品编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.goodId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">渠道编码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.appId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户手机号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.mblNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户借款申请手机串码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.applyModelCode}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户借款申请IP地址</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.applyIp}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">和包ID</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.hbUsrNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">省份账单日</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.provStgDay}}</div>
          </el-col>

          <el-col :span="4">
            <div class="left">实际借款用户手机号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.actBrwMblNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">实际借款和包ID</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.actBrwHbUsrNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">实际借款用户身份证号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.actBrwIdNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">实际借款出资方编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.actualOrgId}}</div>
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
            <div class="left">营业厅地市编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.depCityNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">营业厅区域编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.depRegNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">业务办理营业厅负责人手机号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.depMngMblNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">营业厅省份编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.depProvNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">营业厅名称</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.depNm}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">实际借款用户手机号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.actBrwMblNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">业务类型</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.busTyp == 0">非终端类</span>
              <span v-if="data.busTyp == 1">终端类</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left"></div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
        </el-row>
        <el-button type="primary" size="mini" style="margin-bottom:10px; margin-top:30px;">还款计划集合</el-button>
        <el-table
          :data="data.repayplan"
          border
          size="mini"
          stripe
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          style="width: 100%; height:100%;"
        >
          <el-table-column prop="orgOrdNo" label="资金方借款订单号" align="center"></el-table-column>
          <el-table-column prop="orgPlanNo" label="资金方还款计划号" align="center"></el-table-column>
          <el-table-column prop="totSeqCnt" label="总期数" align="center"></el-table-column>
          <el-table-column prop="seqNo" label="当期期数" align="center"></el-table-column>
          <el-table-column prop="rpyDay" label="当期应还日期" align="center"></el-table-column>
          <el-table-column prop="rpySeq" label="当期还款状态" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.rpySts == 0">未还</span>
              <span v-if="scope.row.rpySts == 1">已还</span>
            </template>
          </el-table-column>
          <el-table-column prop="rpyAmt" label="当期应还账单金额" align="center"></el-table-column>
          <el-table-column prop="serviceFee" label="手续服务费" align="center"></el-table-column>
          <el-table-column prop="lateFee" label="逾期服务费" align="center"></el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      usrIdName: ""
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.usrIdName = this.$route.query.usrIdName;
    console.log(this.usrIdName)
    var data = {
      processNo: this.$route.query.processNo
    };
    this.load(data);
  },

  methods: {
    load(data) {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/hbLoanInfo",
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