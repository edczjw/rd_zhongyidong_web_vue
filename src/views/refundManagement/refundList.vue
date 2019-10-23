<template>
  <div class="page-human">
    <div class="col s12 functionalities">
      <ul id="breadcrumb" class="breadcrumb">
        <li></li>
        <li>
          还款记录
        </li>
        <li>还款列表</li>
      </ul>				
    </div>
    <el-card>
      <el-form :model="searchform" ref="searchform" label-width="100px">
        <el-row class="human-form">
          <el-col :span="8">
            <el-form-item label="和包用户号" prop="hbUsrNo">
              <el-input size="mini" v-model.trim="searchform.hbUsrNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名" prop="name">
              <el-input size="mini" v-model.trim="searchform.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号" prop="mblNo">
              <el-input size="mini" v-model.trim="searchform.mblNo"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="还款状态" prop="status">
              <el-select size="mini" v-model="searchform.status" placeholder="请选择还款状态">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="还款开始时间" prop="beginDate">
              <el-date-picker
                size="mini"
                v-model="searchform.beginDate"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="请选择开始时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="至" prop="endDate">
              <el-date-picker
                size="mini"
                v-model="searchform.endDate"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="请选择结束时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button size="mini" type="primary" @click="submitForm()">搜索</el-button>
              <el-button size="mini" @click="resetForm('searchform')">重置</el-button>
              <el-button size="mini" type="success" icon="el-icon-download"
              @click="download()"
              >下载</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    
    <el-card class="human-table">
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
        <el-table-column prop="hbUsrNo" label="和包用户号" align="center"></el-table-column>
        <el-table-column prop="brwOrdNo" label="和包贷借款订单号" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
          <!-- <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="godetail(scope.row.hbUsrNo)"
            >{{scope.row.name}}</el-button>
          </template> -->
        </el-table-column>
        <el-table-column prop="repayPrincipal" label="还款本金（元）" align="center"></el-table-column>
        <el-table-column prop="repayInterest" label="还款利息（元）" align="center"></el-table-column>
        <el-table-column prop="repayAmt" label="还款总金额（元）" align="center"></el-table-column>

        <el-table-column prop="mblNo" label="手机号" align="center"></el-table-column>
        <el-table-column prop="loanTermPrin" label="当期应还本金" align="center"></el-table-column>
        <el-table-column prop="loanTermInt" label="当期应还利息" align="center"></el-table-column>
        <el-table-column prop="loanTernSum" label="当期应还总金额" align="center"></el-table-column>
        <el-table-column prop="remainNotReturnPrin" label="剩余未还本金" align="center"></el-table-column>
        <el-table-column prop="overdueDate" label="逾期日期" align="center"></el-table-column>
        <el-table-column prop="overdueDays" label="逾期天数" align="center"></el-table-column>

        <el-table-column prop="repayPenalty" label="还款罚息" align="center"></el-table-column>
        <el-table-column prop="rpySeq" label="还款期数" align="center"></el-table-column>
        <el-table-column prop="rpyMod" label="还款模式" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.rpyMod==1">还某期</span>
            <span v-if="scope.row.rpyMod==2">提前清贷</span>
            <span v-if="scope.row.rpyMod==3">退货</span>
            <span v-if="scope.row.rpyMod==4">资金方主动扣款</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="还款状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.status=='N'">新建</span>
            <span v-if="scope.row.status=='M'">合成文件并推送</span>
            <span v-if="scope.row.status=='S'">扣款成功</span>
            <span v-if="scope.row.status=='F'">扣款失败</span>
            <span v-if="scope.row.status=='P'">处理中</span>
          </template>
        </el-table-column>
        <el-table-column prop="callbackTime" label="还款时间" align="center"></el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="human-pagination">
        <el-pagination
          background
          style="text-align:center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="this.searchform.pageIndex"
          :page-sizes="[20,50,100]"
          :page-size="this.searchform.pageSize"
          layout="total, sizes, prev, pager, next"
          :total="count"
        >
          <!--这是显示总共有多少数据-->
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      options: [
        {
          value: "N",
          label: "新建"
        },
        {
          value: "M",
          label: "合成文件并推送"
        },
        {
          value: "S",
          label: "扣款成功"
        },
        {
          value: "F",
          label: "扣款失败"
        },
        {
          value: "P",
          label: "处理中"
        }
      ],
      searchform: {
        mblNo:"",
        usrNo: "",
        name: "",
        status: "",
        beginDate: "", //申请开始时间
        endDate: "", //至
        pageIndex: 1, //初始页
        pageSize: 50 //显示当前行的条数
      },
      tableData: []
    };
  },
  mounted() {
    var data = {};
    this.load(data);
  },
  methods: {
    download(){
      let data = {
        mblNo:this.searchform.mblNo,
        usrNo: this.searchform.usrNo,
        name: this.searchform.name,
        beginDate: this.searchform.beginDate, 
        endDate: this.searchform.endDate, 
        status: this.searchform.status,
      }
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/repay/export",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {

          } else {
            
          }
        },
        error => {
          this.$message({
              message: '您的账号无此菜单查看权限，谢谢合作',
              type: "error"
            });
        }
      );
    },
    submitForm() {
      this.load(this.searchform);
    },
    // 重置功能
    resetForm(formName) {
      this.$refs[formName].resetFields();
      // this.getlist();
    },
    handleSizeChange(psize) {
      // 改变每页显示的条数
      this.searchform.pageSize = psize;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.searchform.pageIndex = 1;
      this.load(this.searchform);
    },

    // 初始页currentPage
    handleCurrentChange(pindex) {
      this.searchform.pageIndex = pindex;
      this.load(this.searchform);
    },
    //表单操作
    handleClick() {},
    godetail(hbUsrNo) {
      var text = "";
      this.$router.push({
        path: "/details/refundDetail",
        query: {
          hbUsrNo: hbUsrNo
        }
      });
    },
    //初始化
    load(data) {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/Repaylist",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {
            if(res.detail.result.pageList){
              
            this.tableData = res.detail.result.pageList;
            this.count = res.detail.result.count;
            this.searchform.pageIndex = res.detail.result.pageIndex;
            this.searchform.pageSize = res.detail.result.pageSize;
            }else{
              this.tableData =[]
              this.$notify({
                    message: '搜索失败，无此数据，请重新搜索。',
                    type: 'warning',
                    duration:"2000"//持续时间
                  });

            }
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        },
        error => {
          this.$message({
              message: '您的账号无此菜单查看权限，谢谢合作',
              type: "error"
            });
        }
      );
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
/deep/ .el-card {
  // background: rgba(255, 255, 255, 0.1);
  /deep/ .el-table tr,
  .el-table th {
    background: rgba(174, 228, 240, 0.822);
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