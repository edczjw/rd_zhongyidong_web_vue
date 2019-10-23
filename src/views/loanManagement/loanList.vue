<template>
  <div class="page-human">
    <div class="col s12 functionalities">
      <ul id="breadcrumb" class="breadcrumb">
        <li></li>
        <li>
          放款记录
        </li>
        <li>放款列表</li>
      </ul>				
    </div>

    <el-card>
      <el-form :model="searchform" ref="searchform" label-width="100px">
        <el-row type="flex" class="human-form">
          <el-col :span="8">
            <el-form-item label="和包用户编号" prop="hbUsrNo">
              <el-input size="mini" v-model.trim="searchform.hbUsrNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="小贷用户编号" prop="usrNo">
              <el-input size="mini" v-model.trim="searchform.usrNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名" prop="usrIdName">
              <el-input size="mini" v-model.trim="searchform.usrIdName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="手机号" prop="mblNo">
              <el-input size="mini" v-model.trim="searchform.mblNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="放款状态" prop="loanType">
              <el-select size="mini" v-model="searchform.loanType" placeholder="请选择放款状态">
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
            <el-form-item label="放款开始时间" prop="beginDate">
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
              <el-button size="mini" type="primary" 
              @keyup.enter="submitForm"
              @click="submitForm()">搜索</el-button>
              <el-button size="mini" @click="resetForm('searchform')">重置</el-button>
              <el-button size="mini" type="success" icon="el-icon-download" @click="download()">下载</el-button>
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
        <el-table-column prop="hbUsrNo" label="和包用户编号" align="center"></el-table-column>
        <el-table-column prop="usrNo" label="小贷用户编号" align="center"></el-table-column>
        
        <el-table-column prop="mblNo" label="手机号" align="center"></el-table-column>
        <el-table-column prop="usrCityNo" label="地市" align="center"></el-table-column>
        <el-table-column prop="provStgDay" label="账单日" align="center"></el-table-column>
        <el-table-column prop="depNm" label="门店名称" align="center"></el-table-column>
        <el-table-column prop="depId" label="门店编码" align="center"></el-table-column>
        <el-table-column prop="oprId" label="营业员编号" align="center"></el-table-column>
        <el-table-column prop="oprMblNo" label="营业员手机号" align="center"></el-table-column>

        <el-table-column prop="usrIdName" label="姓名" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="godetail(scope.row.hbUsrNo,scope.row.loanType,scope.row.usrIdName)"
            >{{scope.row.usrIdName}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="usrProvNo" label="省份" align="center"></el-table-column>
        <el-table-column prop="amt" label="放款金额（元）" align="center"></el-table-column>
        <el-table-column prop="loanMonth" label="借款期限（月）" align="center"></el-table-column>
        <el-table-column prop="loanType" label="放款状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.loanType == 0">未放款</span>
            <span v-if="scope.row.loanType == 1">放款中</span>
            <span v-if="scope.row.loanType == 2">放款成功</span>
            <span v-if="scope.row.loanType == 3">放款失败</span>
          </template>
        </el-table-column>
        <el-table-column prop="lstUpdTime" label="放款时间" align="center"></el-table-column>
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
          value: 0,
          label: "未放款"
        },
        {
          value: 1,
          label: "放款中"
        },
        {
          value: 2,
          label: "放款成功"
        },
        {
          value: 3,
          label: "放款失败"
        }
      ],
      searchform: {
        mblNo:"",
        hbUsrNo: "",
        usrNo: "",
        usrIdName: "",
        beginDate: "", //申请开始时间
        endDate: "", //至
        loanType: "",
        pageIndex: 1, //初始页
        pageSize: 50 //显示当前行的条数
      },
      tableData: []
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    var data = {};
    this.load(data);
  },

  methods: {
    download(){
      let data = {
        mblNo:this.searchform.mblNo,
        hbUsrNo: this.searchform.hbUsrNo,
        usrNo: this.searchform.usrNo,
        usrIdName: this.searchform.usrIdName,
        beginDate: this.searchform.beginDate, 
        endDate: this.searchform.endDate, 
        loanType: this.searchform.loanType,
      }
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/loanSelf/export ",
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
    godetail(hbUsrNo, status, usrIdName) {
      var text = "";
      switch (Number(status)) {
        case 0:
          text = "未放款";
          break;
        case 1:
          text = "放款中";
          break;
        case 2:
          text = "放款成功";
          break;
        default:
          text = "放款失败";
          break;
      }
      this.$router.push({
        path: "/details/loanDetail",
        query: {
          hbUsrNo: hbUsrNo,
          status: text,
          usrIdName: usrIdName
        }
      });
    },
    //初始化
    load(data) {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/LoanSelflist ",
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
    color: rgb(118, 104, 104);
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