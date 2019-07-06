<template>
  <div class="page-detail">
    <!-- <h1>借款信息</h1> -->
    <div class="detail-table">
      <el-card>
        <el-button type="primary" size="mini" style="margin-bottom:10px;">授信信息</el-button>
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">订单编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.creditOrdNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户身份证姓名</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.usrIdName}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">授信额度</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.creditAmt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">授信期限</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.rpySeq}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">授信订单状态</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.creditResult}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">授信额度生效日期</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.effDt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">授信额度失效日期</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.expDt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">授信锁定到期时间</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.creditLockTm}}</div>
          </el-col>
        </el-row>
        <el-button type="primary" size="mini" style="margin-bottom:10px; margin-top:30px;">外部评分</el-button>
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">研究院信用购机模型评分总分</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.creditModScore}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">研究院信用总分数</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.creditTotScore}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">活体识别结构名称</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.liveOrgNm}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">活体识别结构编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.liveOrgId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">活体识别分数</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.liveScore}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">和包分数</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.hbScore}}</div>
          </el-col>
        </el-row>
        <el-button type="primary" size="mini" style="margin-bottom:10px; margin-top:30px;">内部评分</el-button>
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">内部征信分</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.dasd}}</div>
          </el-col>
          <el-col :span="16">
            <div class="right"></div>
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