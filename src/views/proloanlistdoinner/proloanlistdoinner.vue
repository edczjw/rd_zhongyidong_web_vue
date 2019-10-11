<template>
  <div class="page-human">
    <el-card>
      <div class="sanjiao"></div>
      <el-card class="time">
        <el-form :model="searchform" ref="searchform" label-width="100px">
          <el-form-item label="选择时间" prop="date">
            <el-date-picker
              size="mini"
              v-model="searchform.date"
              value-format="yyyyMMdd"
              type="date"
              placeholder="请选择时间"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
        </el-form>
      </el-card>

      <!-- 按钮 -->
      <div class="button">
        <el-button size="mini" @click="profile()">生成</el-button>
        <el-button size="mini" @click="downloadfile()">下载</el-button>

        <div class="dee">
        <form id="form-article-add" method="post" enctype="multipart/form-data">  
          <input type="file" name="file" @change="pickFile" accept=".xls, .xlsx, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
          <el-button size="mini"  @click="insertfile">导入<i class="el-icon-upload el-icon--right"></i></el-button>
        </form>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
      count: 0,

      searchform: {
          date:''
      }
    };
  },
  mounted() {},
  methods: {
    //生成
    profile() {
      let data = {
        date:this.searchform.date
      };
      const url = this.$store.state.domain + "/file/loanFile/create";
      this.$http.post(url, data, {
          emulateJSON: true
      })
        .then(response => {
          if(response.code == 0){
            this.$message({
              message: response.data.msg,
              type: "success"
            });
          }else{
            this.$message({
              message: response.data.msg,
              type: "error"
            });
          }
        })
        .catch(err => {
          console.warn(err);
        });

    },
    //下载
    downloadfile() {
      let data = {
        date:this.searchform.date
      };
      const url = this.$store.state.domain + "/file/loanFile/download";
      this.$http
        .post(url, data, {
          responseType: "blob",
          emulateJSON: true
        })
        .then(res => {
          console.log("res", res);
          let blob = new Blob([res.body], {
            type: "application/octet-stream"
          });
          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob);
          } else {
            let elink = document.createElement("a");
            elink.download = this.searchform.date + ".xls";
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
    //上传按钮
      pickFile(e){
          var files = e.target.files || e.dataTransfer.files;
          if(!files.length) return;
          this.excelTobase(files[0]);
      },

      excelTobase(file){
          var that = this;
          var pos = file.name.lastIndexOf('.');
          var type = file.name.substring(pos + 1);
          if(type.toLowerCase() != 'xls' && type.toLowerCase() != 'xlsx' && type.toLowerCase() !='csv'){
              this.$message.error('请上传xls、xlsx、csv格式的excel文件.');
              this.canUpload = false;
          }else{
              this.fileType = type;
              this.canUpload = true;
              this.fileName = file.name.substring(0,pos);
              this.file = file;
              var reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = function(e){
                  that.base64 = e.target.result;
              };
           }
      },

//异步上传
      async insertfile(){
          if(this.canUpload){
			    var FormDatas=new FormData($("#form-article-add")[0]);
              FormDatas.append("file",FormDatas);
              this.$axios({
                  method: "post",
                  url: this.$store.state.domain + "/file/loanFile/upload",
                  data: FormDatas,
                  headers:{'Content-Type':'multipart/form-data'}
                }).then(
                  response => {
                    var res = response.data;
                    if (res.code == 0) {
                        this.$message({
                          message: res.msg,
                          type: 'success'
                        });
                    } else {
                      this.$message({
                        message: res.msg,
                        type: "error"
                      });
                    }
                  },
                  error => {
                    this.$message({
                        message: '500错误!',
                        type: "error"
                      });
                      }
                );
          }else{
          this.$message({
            type: 'danger',
            message: '请选取文件上传.'
          }); 
      }
      }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.dee{
  margin: 10px;
  padding:20px;
}
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
    background: rgb(144, 200, 238); /* Fallback */
    background: linear-gradient(-150deg, transparent 1.5em, rgb(144, 200, 238) 0);
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