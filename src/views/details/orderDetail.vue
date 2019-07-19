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
            <div class="right">{{data.status}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户姓名</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.name}}</div>
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
            <div class="left">身份证用户名</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.usrIdName}}</div>
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
            <div class="right"></div>
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
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">资金方借款订单号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.orgOrdNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">资金方还款计划号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.orgPlanNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">总期数</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.totSeqCnt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">当期期数</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.seqNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">当期应还日期</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.rpyDay}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">当期还款状态</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.rpySts == 0">未还</span>
              <span v-if="data.rpySts == 1">已还</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left">当期应还账单金额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.rpyAmt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">手续服务费</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.serviceFee}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">逾期服务费</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.lateFee}}</div>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <!-- <el-row type="flex" justify="center" class="comfirmButton">
      <el-button type="primary" size="mini" @click="submit">提交</el-button>
    </el-row>-->
  </div>
</template>

<script>
// import { formatDate } from "@/config/utils.js";
export default {
  //   filters: {
  //     formatDate(time) {
  //       var date = new Date(time);
  //       return formatDate(date, "yyyy-MM-dd hh:mm:ss");
  //     }
  //   },
  data() {
    return {
      data: {},
      tableData: [
        {
          contactName: "某某",
          contactMblNo: "13132115341",
          contactRelation: "父子"
        },
        {
          contactName: "某某",
          contactMblNo: "13132115341",
          contactRelation: "母子"
        },
        {
          contactName: "某某",
          contactMblNo: "13132115341",
          contactRelation: "哥哥"
        }
      ]
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    var data = {
      processNo: this.$route.query.processNo
    };
    // this.load(data);
  },

  methods: {
    load(data) {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {
            if (res.detail.result.agreementUrl) {
              res.detail.result.agreementUrl = res.detail.result.agreementUrl.split(
                ","
              );
            }
            this.data = res.detail.result;
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