<template>
  <div class="page-human">
    <div class="col s12 functionalities">
      <ul id="breadcrumb" class="breadcrumb">
        <li></li>
        <li>
          生成入账操作
        </li>
        <li>生成借据入账</li>
      </ul>				
    </div>
    <el-card class="wrapper ">
      <div class="sanjiao"></div>
      <el-card class="time animated fadeInDown">
        <el-form :model="searchform" ref="searchform" label-width="90px">
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
        <div class="button animated fadeInUp">
          <el-button size="mini" type="primary" icon="el-icon-edit" @click="profile()">生成</el-button>
          <el-button size="mini" type="primary" icon="el-icon-download" @click="downloadfile()">下载</el-button>
          <div class="dee">
            <form id="form-article-add" method="post" enctype="multipart/form-data">  
              <input type="file" name="file" @change="pickFile" 
              accept=".xls, .xlsx, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
              <el-button  type="success" size="mini"  @click="insertfile">导入<i class="el-icon-upload el-icon--right"></i></el-button>
            </form>
          </div>
        </div>

        <ul class="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
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
      if(this.searchform.date !=''){
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
          this.$message({
              message: '您的账号无此菜单查看权限，谢谢合作',
              type: "error"
            });
        });
        
      }else{
        this.$message({
              message: '请选择日期',
              type: "error"
            });
      }

    },
    //下载
    downloadfile() {
      if(this.searchform.date != ''){
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
          if(res.data.code){
                 if(res.data.code == 1){
                   this.$message({
                          message: res.data.msg,
                          type: "error"
                        });
                    }
              }else{
                let blob = new Blob([res.body], {
                    type: "application/octet-stream"
                  });
                  if (window.navigator.msSaveOrOpenBlob) {
                    navigator.msSaveBlob(blob);
                  } else {
                    let elink = document.createElement("a");
                    elink.download = this.searchform.date + 'loanFile' + ".xls";
                    elink.style.display = "none";
                    elink.href = URL.createObjectURL(blob);
                    document.body.appendChild(elink);
                    elink.click();
                    document.body.removeChild(elink);
                  }
              }
        })
        .catch(err => {
          this.$message({
              message: '您的账号无此菜单查看权限，谢谢合作',
              type: "error"
            });
        });
        
      }else{
        this.$message({
              message: '请选择日期',
              type: "error"
            });
      }

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
                        message: '您的账号无此菜单查看权限，谢谢合作',
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
.wrapper {
  background: #50a3a2;
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
  width: 100%;
  overflow: hidden;
  position: relative;
}
.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.bg-bubbles li {
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  -webkit-animation: square 25s infinite;
  animation: square 25s infinite;
  transition-timing-function: linear;
}
.bg-bubbles li:nth-child(1) {
  left: 10%;
}
.bg-bubbles li:nth-child(2) {
  left: 20%;
  width: 80px;
  height: 80px;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  -webkit-animation-duration: 17s;
          animation-duration: 17s;
}
.bg-bubbles li:nth-child(3) {
  left: 25%;
  -webkit-animation-delay: 4s;
          animation-delay: 4s;
}
.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  -webkit-animation-duration: 22s;
          animation-duration: 22s;
  background-color: rgba(255, 255, 255, 0.25);
}
.bg-bubbles li:nth-child(5) {
  left: 70%;
}
.bg-bubbles li:nth-child(6) {
  left: 80%;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 3s;
          animation-delay: 3s;
  background-color: rgba(255, 255, 255, 0.2);
}
.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 7s;
          animation-delay: 7s;
}
.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  -webkit-animation-delay: 15s;
          animation-delay: 15s;
  -webkit-animation-duration: 40s;
          animation-duration: 40s;
}
.bg-bubbles li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  -webkit-animation-duration: 40s;
          animation-duration: 40s;
  background-color: rgba(255, 255, 255, 0.3);
}
.bg-bubbles li:nth-child(10) {
  left: 90%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 11s;
          animation-delay: 11s;
}
@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
  }
}
@keyframes square {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
  }
}
.dee{
  margin-top: 30px;
  padding:20px;
  border-radius: 10px;
}
  .button {
    z-index: 2;
    text-align: center;
    margin: 20px auto;
    width: 60%;
    padding: 30px;
    position: relative;
  }
  .time {
    z-index: 1;
    margin: 20px auto;
    width: 40%;
    padding: 30px;
    position: relative;
    border: 1px solid #eee;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.384);
    background: rgb(125, 232, 236); /* Fallback */
    background: linear-gradient(-150deg, transparent 1.5em, rgb(160, 248, 233) 0);
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