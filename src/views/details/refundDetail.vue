<template>
  <div class="page-detail">
    <!-- <h1>借款信息</h1> -->
    <div class="detail-table">
      <el-card>
        <el-button type="primary" size="mini" style="margin-bottom:10px;">还款信息</el-button>
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">姓名</div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
          <el-col :span="4">
            <div class="left">还款总金额</div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
          <el-col :span="4">
            <div class="left">还款罚息</div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
          <el-col :span="4">
            <div class="left">还款服务费</div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
          <el-col :span="4">
            <div class="left">还款利息</div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
          <el-col :span="4">
            <div class="left">还款本金</div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
          <el-col :span="4">
            <div class="left">还款状态</div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
          <el-col :span="4">
            <div class="left">实际还款金额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.actRpyAmt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">还款期数</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.rpySeq}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">还款时间</div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
          <el-col :span="4">
            <div class="left">是否逾期</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.isOverdue == 0">未逾期</span>
              <span v-if="data.isOverdue == 1">已逾期</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left">扣款方式</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.acPayTyp}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">业务类型</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.buisnessId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">还款结果描述</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.rpyDesc}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">还款模式</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.rpyMod==0">还全部</span>
              <span v-if="data.rpyMod==1">还某期</span>
              <span v-if="data.rpyMod==2">提前清贷</span>
              <span v-if="data.rpyMod==3">退货</span>
            </div>
          </el-col>

          <!-- <el-col :span="4">
            <div class="left">和包贷还款订单号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.rpyOrdNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">和包贷还款订单日期</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.rpyOrdDt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">资金方还款计划号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.orgPlanNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">资金方还款计划号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.orgPlanNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">资金方用户id</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.orgUsrId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">渠道编码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.appId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left"></div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
          <el-col :span="4">
            <div class="left"></div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>-->
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
      &:last-child {
        border-right: 1px solid #ccc;
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