<template>
  <el-container>
    <el-header>
      <!-- 站首领带背景 -->
      <div class="sc-previewbar"></div>
    </el-header>
    <!-- 顶部导航 -->
    <div class="sc-container position-sticky sticky-top" style="width:970px;z-index:100;">
      <el-menu class="sc-topmenu" :default-active="activeIndex1" mode="horizontal" @select="handleSelect" background-color="#006696" text-color="#f3f3f3" active-text-color="#fff">
        <el-menu-item index="1"><a href="/">首页</a></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><a href="/">概况</a></template>
          <el-menu-item index="2-1">选项选项选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3"><a href="/">选项3</a></el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><a href="/">新闻</a></template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="4"><a href="#" target="_blank">科研</a></el-menu-item>
        <el-menu-item index="5"><a href="#" target="_blank">教学</a></el-menu-item>
        <el-menu-item index="6"><a href="#" target="_blank">招贤纳士</a></el-menu-item>
        <el-menu-item index="7"><a href="#" target="_blank">联系方式</a></el-menu-item>
      </el-menu>
      <!-- 灰色背景分隔条 -->
      <el-row>
        <el-col :span="24" style="background-color:#f2f2f2;height:20px;"></el-col>
      </el-row>
    </div>
    <nuxt/>
    <!-- 灰色背景分隔条 -->
    <div class="sc-container">
      <el-row>
        <el-col :span="24" style="background-color:#f2f2f2;height:20px;"></el-col>
      </el-row>
    </div>
    <el-footer>
      <div class="sc-container">
        <el-row :gutter="10">
          <el-col :span="6" style="display:flex;align-items: center;min-height: 150px;">
            <img src="~assets/logo.png" style="padding-left:30px;" />
          </el-col>
          <el-col :span="14" style="text-align:right;padding:30px;">
            <p style="flex:1"></p>
            <p><a href="http://www.cuc.edu.cn/">中传官网</a></p>
            <p>学术指导：中国传媒大学脑科学与智能媒体研究院</p>
            <p>地址：北京市朝阳区定福庄东街1号中国传媒大学 42号楼2层 邮编：100024</p>
          </el-col>
          <el-col :span="4" style="text-align:center;padding:25px">
            <img src="~assets/qrcode.png" style="width:80px;height:80px;" class="image">
            <p>脑与智能</p>
          </el-col>
        </el-row>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex1: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
body{
  margin: 0;
  background: url(~assets/body-bg.png);
}
a {
  text-decoration: none;
  color:#000;
}
a:hover{
  color: #6553AB;
}
.el-main{
  padding:0;
  overflow: hidden;
}
.sc-previewbar{
  height:130px;
  background-image: url('~assets/cuc-nimi-topbg.png');
  background-position: center;
  background-repeat: no-repeat;
}
.el-header{
  padding: 0;
  height: auto !important;
  background-image: url('~assets/topbg2k.png');
  background-position: center;
  background-repeat: no-repeat;
}
.sc-container{
  width:970px;
  margin: 0 auto
}
.sc-topmenu{
  justify-content: space-around;
  display: flex;
}
.sc-topmenu a{
  text-decoration: none;
  color:#f3f3f3;
}
/* 此处是为了去除鼠标移动菜单项之上后的灰色背景 */
.sc-topmenu li:hover,.sc-topmenu div:hover{
  background-color:#0177af !important;
}
/* 这是为了去掉顶部二级菜单的多余宽度 */
.sc-topmenu .el-submenu .el-menu-item{
  min-width:180px !important;
}
.el-footer {
  color: #c5c5c5;
  font-size: 12px;
  min-height: 180px !important;
  background-color: #373b42;
}
.el-footer a {
  color: #589bd6;
}
.el-footer p {
  margin: 5px 0 6px;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
