<template>
  <div>
    <header>
      <nav style="height:60px;z-index:1600;" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" style="color: rgba(255,255,255,.8);" href="#">后台管理</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/admin/welcome">欢迎您</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="/">前台</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">退出登陆</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="container-fluid">
      <div class="row">
        <!-- 左菜单栏 -->
        <div class="col-sm-2 bg-light sidebar sc-sidemenu">
          <el-menu default-active="1-1" style="height:100%;padding-top:15px;" :default-openeds="sideMenuDefaultOpenedArray" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>内容与分类</span>
              </template>
              <el-menu-item index="1-1"><a href="/admin/category">分类管理</a></el-menu-item>
              <el-menu-item index="1-2"><a href="/admin/content-list">内容列表</a></el-menu-item>
              <el-menu-item index="1-3"><a href="/admin/content-new">新增内容</a></el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"><a href="/admin/menu">导航菜单</a></span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>首页设置</span>
              </template>
              <el-menu-item index="3-1">轮播图</el-menu-item>
              <el-menu-item index="3-2">三栏内容</el-menu-item>
              <el-menu-item index="3-3">四栏内容</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
              <i class="el-icon-date"></i>
              <span slot="title">管理员</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">站点设置</span>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 右主区 -->
        <main role="main" class="col-sm-9 ml-sm-auto col-md-10 p-4">
          <nuxt/>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
  body{
    background-color: #e9eef3;
    padding-top: 60px;
    font-weight: 100;
  }
  .sc-sidemenu a {
    text-decoration: none;
    color:#e0e0e0;
  }
  .sc-sidemenu a:hover{
    color: #fff;
  }
  .sidebar {
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #eee;
    color:#e0e0e0;
  }
</style>

<script>
export default {
  data () {
    return {
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
  methods: {}
}
</script>