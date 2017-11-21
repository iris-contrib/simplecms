<template>
  <div>
    <header>
      <nav style="height:60px;z-index:2000;" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" style="color: rgba(255,255,255,.8);" href="#">院校管理后台</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/admin/index">欢迎您，管理员</a>
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
          <el-menu style="min-height:100%;padding:15px 0 100px;" 
            :default-openeds="['n1']"
            :default-active="'n2'"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="n1">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>内容与分类</span>
              </template>
              <router-link to="/admin/category"><el-menu-item index="n11"><i class="el-icon-arrow-right"></i>分类管理</el-menu-item></router-link>
              <router-link to="/admin/content-list"><el-menu-item index="n12"><i class="el-icon-arrow-right"></i>内容列表</el-menu-item></router-link>
              <router-link to="/admin/content-new"><el-menu-item index="n13"><i class="el-icon-arrow-right"></i>新增内容</el-menu-item></router-link>
            </el-submenu>
            <router-link to="/admin/menu">
              <el-menu-item index="n2">
                <i class="el-icon-plus"></i>
                <span slot="title">导航菜单</span>
              </el-menu-item>
            </router-link>
            <el-submenu index="n3">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>首页</span>
              </template>
              <router-link to="/admin/index-carousel"><el-menu-item index="n31"><i class="el-icon-arrow-right"></i>轮播图</el-menu-item></router-link>
              <router-link to="/admin/index-3column"><el-menu-item index="n32"><i class="el-icon-arrow-right"></i>三栏内容</el-menu-item></router-link>
              <router-link to="/admin/index-4column"><el-menu-item index="n33"><i class="el-icon-arrow-right"></i>四栏内容</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="n4">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>设置</span>
              </template>
              <router-link to="/admin/site-settings"><el-menu-item index="n41"><i class="el-icon-arrow-right"></i>站点设置</el-menu-item></router-link>
              <router-link to="/admin/bottom-settings"><el-menu-item index="n42"><i class="el-icon-arrow-right"></i>底部设置</el-menu-item></router-link>
              <router-link to="/admin/administrator"><el-menu-item index="n43"><i class="el-icon-arrow-right"></i>管理员</el-menu-item></router-link>
            </el-submenu>
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
    font-weight: 200;
  }
  /* 去除上传图片示例的圆角 */
  .img-thumbnail {
    border-radius: 0;
}
  /* 所有表单的上下间隔都太大了
  17/11，重新审视，还是默认有22个px间隔比较好 */
  /* .el-form-item {
    margin-bottom: 22px;
  } */
  .el-button{
    font-weight: 100;
  }
  .sc-sidemenu a {
    text-decoration: none;
    /* 解决a标签影响sizeMenu样式的问题，默认的a标签蓝色样式会影响菜单栏的选中效果 */
    color: inherit;
  }
  .sc-sidemenu a:hover, .sc-sidemenu a:active{
    color: inherit;
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
    return {}
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
  }
}
</script>