<template>
  <div class="page-detail">
    <!-- <h1>借款信息</h1> -->
    <div class="detail-table">
      <el-card>
        <el-button type="primary" size="mini" style="margin-bottom:10px;">基本信息</el-button>
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">授信流水</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.qryCreditId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">总红包额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.totalBonusamt}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户注册手机号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.mblNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户身份证姓名</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.usrIdName}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户身份证号码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.usrIdCard}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户工作类型</div>
          </el-col>

          <el-col :span="4">
            <div class="right">{{data.usrJob}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">收入区间</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.inCome}}</div>
          </el-col>

          <el-col :span="4">
            <div class="left">家庭住址编码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.addressCode}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">家庭详细地址</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.address}}</div>
          </el-col>

          <el-col :span="4">
            <div class="left">公司名称</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.companyName}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">公司地址</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.companyAddress}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">公司地址省市编码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.companyAddressCode}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">公司联系电话</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.companyMblNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">学历</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.schooling}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">渠道编码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.appId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">社会身份</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.socialIdentity}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">国籍</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.country}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">民族</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.nation}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">性别</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.cusSex == 0">女</span>
              <span v-if="data.cusSex == 1">男</span>
              <span v-if="data.cusSex == 2">未知</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left">用户归属省份</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.usrProvNo}}</div>
          </el-col>

          <el-col :span="4">
            <div class="left">常用邮箱</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.userMail}}</div>
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
            <div class="left">婚姻情况</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.maritalSta == 1">已婚</span>
              <span v-if="data.maritalSta == 0">未婚</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left">身份证有效日期</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.idExpDt}}</div>
          </el-col>
          <el-col :span="4"></el-col>
          <el-col :span="4"></el-col>
          <el-col :span="4"></el-col>
          <el-col :span="4" style="border-right:1px solid #ccc;"></el-col>
        </el-row>
        <el-button type="primary" size="mini" style="margin-bottom:10px; margin-top:30px;">联系人信息</el-button>
        <el-table
          :data="tableData"
          border
          size="mini"
          stripe
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          style="width: 100%; height:100%;"
        >
          <el-table-column prop="contactName" label="紧急联系人姓名" align="center"></el-table-column>
          <el-table-column prop="contactMblNo" label="紧急联系人电话" align="center"></el-table-column>
          <el-table-column prop="contactRelation" label="紧急联系人关系" align="center"></el-table-column>
        </el-table>
        <el-button type="primary" size="mini" style="margin-bottom:10px; margin-top:30px;">银行卡信息</el-button>
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">银行卡号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.bankCardNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">银行卡实名姓名</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.bankCardName}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">银行卡预留手机号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.bankMblNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">银行编码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.bankCode}}</div>
          </el-col>
          <el-col :span="16" style="border-right:1px solid #ccc;">
            <div class="right"></div>
          </el-col>
        </el-row>
        <el-button type="primary" size="mini" style="margin-bottom:10px; margin-top:30px;">用户评分</el-button>
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
          <el-col :span="4" style="border-right:1px solid #ccc;">
            <div class="right">{{data.hbScore}}</div>
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
      tableData: []
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    var data = {
      usrNo: this.$route.query.usrNo
    };
    this.load(data);
  },

  methods: {
    load(data) {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/hbUserInfo",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {
            if (res.detail.result.contactName) {
              this.tableData.push({
                contactName: res.detail.result.contactName,
                contactMblNo: res.detail.result.contactMblNo,
                contactRelation: res.detail.result.contactRelation
              });
            }
            if (res.detail.result.contactName1) {
              this.tableData.push({
                contactName: res.detail.result.contactName1,
                contactMblNo: res.detail.result.contactMblNo1,
                contactRelation: res.detail.result.contactRelation1
              });
            }
            if (res.detail.result.contactName2) {
              this.tableData.push({
                contactName: res.detail.result.contactName2,
                contactMblNo: res.detail.result.contactMblNo2,
                contactRelation: res.detail.result.contactRelation2
              });
            }
            this.data = res.detail.result;
          }else {
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
        border-right: none;
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