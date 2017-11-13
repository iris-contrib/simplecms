<template>
    <el-container class="sc-main">
      <el-aside style="max-width:150px;">
        <el-menu default-active="3" class="sc-sidemenu" @open="handleOpen" @close="handleClose" :default-openeds="sideMenuDefaultOpenedArray">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>概况</span>
            </template>
            <el-menu-item index="1-1">研究院简介</el-menu-item>
            <el-menu-item index="1-2">选项3</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>新闻</span>
            </template>
            <el-menu-item index="2-1">研究院简介</el-menu-item>
            <el-menu-item index="2-2">选项3</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">科研</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 文章 -->
        <el-row style="padding:30px 40px 30px;">
          <el-col class="sc-article" :span="24">
            <div style="text-align:center;padding:30px 0 30px;">
              <h3>北京市脑科学和类脑计算论坛圆满举行</h3>
              <p class="text-muted">日期：2017-07-22&nbsp;&nbsp;作者：王晔</p>
            </div>
            <div>
              <p class="mainpara">2017年7月21日，我院联合北京脑科学与智能技术研究院，在西郊宾馆会议厅，共同组织召开了北京市第四次脑科学和类脑计算论坛。北京市科技信息中心、首都科技条件平台电子信息领域中心和北京灵犀移动通信产业技术创新联盟承办本次论坛。论坛邀请到纽约大学汪小京教授、北京师范大学吴思教授、中科院计算所陈云霁研究员做了相关报告。清华大学类脑计算中心主任施路平教授与主讲嘉宾一起参与了论坛Panel。北京市科技信息中心唐超主任为此次论坛致开幕词。论坛由我院院长曹立宏教授主持。在京高校、科研院所的科研人员与学生，以及企业代表等共约200人参加了本次论坛。</p>
              <img src="http://nimi.cuc.edu.cn/ckfinder/userfiles/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170722153340.jpg"/>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
      currentPage1: 5,
      sideMenuDefaultOpenedArray: []
    }
  },
  head: {
    title: '院校首页',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', integrity: 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb', crossorigin: 'anonymous' }
    ]
  },
  components: {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style>
.sc-article img{
  max-width:100%;
  display:block;
  margin:0 auto;
}
.sc-article p.mainpara{
  text-align:justify;
  text-indent: 2em;
  line-height: 1.8em;
}
.sc-main{
  width:970px;margin: 0px auto;
}
.sc-sidemenu{
  height:100%;width:149px;
}
.sc-sidemenu .el-submenu .el-menu-item {
  min-width: 149px !important;
}
.el-aside {
  background-color: #fff;
  min-height: 600px;
}
.el-main {
  background-color: #fff;
  padding: 20px 30px;
}
</style>
