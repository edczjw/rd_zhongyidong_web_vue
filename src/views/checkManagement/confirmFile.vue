<template>
  <div class="page-human">
    <el-card>
      <el-form :model="searchform" ref="searchform" label-width="120px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="省份" prop="fileProvNo">
              <el-select size="mini" v-model="searchform.fileProvNo" placeholder="请选择省份">
                <el-option
                  v-for="item in optionsP"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="生成时间" prop="beginDate">
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
                type="date"
                placeholder="请选择结束时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button size="mini" type="primary" @click="submitForm()">查询</el-button>
              <el-button size="mini" @click="resetForm('searchform')">重置</el-button>
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
        <el-table-column prop="fileProvNo" label="省份" align="center"></el-table-column>
        <el-table-column prop="createTime" label="生成时间" align="center"></el-table-column>
        <el-table-column prop label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              @click="download(scope.row.filePath,scope.row.fileProvNo,scope.row.createTime)"
              type="text"
              size="small"
            >下载</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="human-pagination">
        <el-pagination
          backgrounda
          style="text-align:center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="this.searchform.pageIndex"
          :page-sizes="[20,50,100]"
          :page-size="this.searchform.pageSize"
          layout="total, sizes, prev, pager, next"
          :total="count"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      count: 0,
      searchform: {
        beginDate: "",
        endDate: "",
        fileProvNo: "",
        pageIndex: 1, //初始页
        pageSize: 50 //显示当前行的条数
      },
      optionsP: [
        {
          label: "北京",
          value: "01"
        },
        {
          label: "天津",
          value: "02"
        },
        {
          label: "河北",
          value: "03"
        },
        {
          label: "山西",
          value: "04"
        },
        {
          label: "内蒙古",
          value: "05"
        },
        {
          label: "辽宁省",
          value: "06"
        },
        {
          label: "吉林省",
          value: "07"
        },
        {
          label: "黑龙江省",
          value: "08"
        },
        {
          label: "上海",
          value: "09"
        },
        {
          label: "江苏省",
          value: "10"
        },
        {
          label: "浙江省",
          value: "11"
        },
        {
          label: "安徽省",
          value: "12"
        },
        {
          label: "福建省",
          value: "13"
        },
        {
          label: "江西省",
          value: "14"
        },
        {
          label: "山东省",
          value: "15"
        },
        {
          label: "河南省",
          value: "16"
        },
        {
          label: "湖北省",
          value: "17"
        },
        {
          label: "湖南省",
          value: "18"
        },
        {
          label: "广东省",
          value: "19"
        },
        {
          label: "广西省",
          value: "20"
        },
        {
          label: "海南省",
          value: "21"
        },
        {
          label: "四川省",
          value: "22"
        },
        {
          label: "贵州省",
          value: "23"
        },
        {
          label: "云南省",
          value: "24"
        },
        {
          label: "西藏",
          value: "25"
        },
        {
          label: "陕西省",
          value: "26"
        },
        {
          label: "甘肃省",
          value: "27"
        },
        {
          label: "青海省",
          value: "28"
        },
        {
          label: "宁夏",
          value: "29"
        },
        {
          label: "新疆",
          value: "30"
        },
        {
          label: "重庆",
          value: "31"
        }
      ],
      tableData: [
      ]
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
    submitForm() {
      this.load(this.searchform);
    },
    handleSizeChange(psize) {
      // 改变每页显示的条数
      this.searchform.pageSize = psize;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.searchform.pageIndex = 1;
      if (this.requireTime()) {
        this.load(this.searchform);
      }
    },
    // 初始页currentPage
    handleCurrentChange(pindex) {
      this.searchform.pageIndex = pindex;
      if (this.requireTime()) {
        this.load(this.searchform);
      }
    },
    // 重置功能
    resetForm(formName) {
      this.$refs[formName].resetFields();
      // this.getlist();
    },
    download(path, filename, time) {
      let data = {
        filePath: path
      };
      const url = this.$store.state.domain + "/manage/download";
      this.$http
        .post(url, data, {
          responseType: "blob",
          emulateJSON: true
        })
        .then(res => {
          let blob = new Blob([res.data], {
            type:
              "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          });
          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob);
          } else {
            let elink = document.createElement("a");
            elink.download = time + filename + ".xls";
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            document.body.removeChild(elink);
          }
        })
        .catch(err => {
          console.warn(err);
        });
    },
    //初始化
    load(data) {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/manage/provinceCheckFile",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {
            this.tableData = [];
            console.log("res", res);
            this.tableData = res.detail.result.pageList;
            this.count = res.detail.result.count;
            this.searchform.pageIndex = res.detail.result.pageIndex;
            this.searchform.pageSize = res.detail.result.pageSize;
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
  .el-form-item__content {
    margin-left: 130px !important;
  }
}
.page-human {
  .human-table {
    margin-top: 40px;
  }
  .human-pagination {
    margin-top: 30px;
  }
}
</style>