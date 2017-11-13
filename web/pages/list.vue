<template>
    <el-container class="sc-main">
      <el-aside class="sticky-top" style="max-width:150px;">
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
        <!-- 文章列表 -->
        <ul style="margin-top: 40px;padding-left: 0;font-size:14px;line-height:25px;list-style:none">
          <li v-for="o in 5" :key="o" class="text item">
            <p style="display:flex">
              <span style="flex:1;font-size:18px;font-width:bold;">
                <i class="el-icon-arrow-right"></i>&nbsp;
                <a href="/article">{{'用脑启发的智能列表内容 ' + o }}</a>
              </span>
              <span class="text-muted">2017/09/14</span>
            </p>
            <p style="padding:0 100px 30px 25px;text-align:justify;">为促进我国消化内镜事业的进一步发展，由中华医学会、中华医学会消化内镜学分会主办，浙江省医学会、浙江大学医学院附属第一医院和杭州市第一人民医院承办的2017中国消化内镜学术大会于2017年9月1日~3日在浙江省杭州市国际会议中心召开。</p>
          </li>
        </ul>
        <el-row style="padding:0 30px 30px;">
          <el-col :span="24" style="text-align:center">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="6"
              layout="total, prev, pager, next, jumper"
              :total="100">
            </el-pagination>
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
.sc-main{
  width:970px;
  margin: 0px auto;
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
  padding:20px 30px;
}
</style>
