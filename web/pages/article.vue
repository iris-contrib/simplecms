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
        Main
        <logo/>
      </el-main>
    </el-container>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data () {
    return {
      'sideMenuDefaultOpenedArray': []
    }
  },
  head: {
    title: '院校首页',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ]
  },
  components: {
    Logo
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.sc-main{
  width:970px;margin: 0px auto;border-top: 8px solid #eaeaea;
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
}
</style>
