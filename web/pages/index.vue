<template>
    <el-container class="sc-main">
      <el-main style="padding:0">
        <el-row>
          <el-col :span="24" style="background-color:#e2ebf0;height:20px;"></el-col>
        </el-row>
        <!-- 首页轮播图 -->
        <el-carousel trigger="click" height="400px" :interval="5000" :autoplay="false">
          <el-carousel-item v-for="item in carousels" :key="item.title">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.image" class="image" style="width:100%">
              <div style="padding: 20px 25px 25px;position: absolute;bottom: 0;width: 100%;font-size:24px;color:#fff;background: linear-gradient(rgba(0,0,0,0.0) , rgba(0,0,0,0.4) , rgba(0,0,0,0.8));">
                <span>{{ item.title }}</span>
              </div>
            </el-card>
          </el-carousel-item>
        </el-carousel>
        <!-- 灰色背景分隔条 -->
        <el-row>
          <el-col :span="24" style="background-color:#e2ebf0;height:20px;"></el-col>
        </el-row>
        <!-- 三栏内容 -->
        <el-row :gutter="1" style="background-color:#eaeaea;">
          <el-col :span="8">
            <el-card :body-style="'padding:10px 15px 20px;'">
              <div slot="header" class="clearfix">
                <span><i class="el-icon-date"></i>&nbsp;卡片名称</span>
              </div>
              <ul style="margin-top: 0;margin-bottom: 0;padding-left: 0;font-size:14px;line-height:25px;list-style:none">
                <li v-for="o in 8" :key="o" class="text item">
                  <el-button type="text" icon="el-icon-caret-right" style="padding:0;">{{'用脑启发的智能列表内容 ' + o }}</el-button>
                </li>
              </ul>
              <div style="padding-bottom: 10px;line-height: 15px;">
                <el-button type="text" style="padding: 0;float: right;" icon="el-icon-d-arrow-right">更多</el-button>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="'padding:10px 15px 20px;'">
              <div slot="header" class="clearfix">
                <span><i class="el-icon-loading"></i>&nbsp;卡片名称</span>
              </div>
              <ul style="margin-top: 0;margin-bottom: 0;padding-left: 0;font-size:14px;line-height:25px;list-style:none">
                <li v-for="o in 8" :key="o" class="text item">
                  <el-button type="text" icon="el-icon-caret-right" style="padding:0;">{{'用脑启发的智能列表内容 ' + o }}</el-button>
                </li>
              </ul>
              <div style="padding-bottom: 10px;line-height: 15px;">
                <el-button type="text" style="padding: 0;float: right;" icon="el-icon-d-arrow-right">更多</el-button>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="'padding:10px 15px 20px;'">
              <div slot="header" class="clearfix">
                <span><i class="el-icon-document"></i>&nbsp;卡片名称</span>
              </div>
              <ul style="margin-top: 0;margin-bottom: 0;padding-left: 0;font-size:14px;line-height:25px;list-style:none">
                <li v-for="o in 8" :key="o" class="text item">
                  <el-button type="text" icon="el-icon-caret-right" style="padding:0;">{{'用脑启发的智能列表内容 ' + o }}</el-button>
                </li>
              </ul>
              <div style="padding-bottom: 10px;line-height: 15px;">
                <el-button type="text" style="padding: 0;float: right;" icon="el-icon-d-arrow-right">更多</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 灰色背景分隔条 -->
        <el-row>
          <el-col :span="24" style="background-color:#e2ebf0;height:20px;"></el-col>
        </el-row>
        <!-- 四栏内容 -->
        <el-row :gutter="1" style="background-color:#eaeaea;">
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <div slot="header" class="clearfix">
                <span><i class="el-icon-document"></i>&nbsp;新闻</span>
              </div>
              <img src="~assets/hamburger.png" style="width:100%;">
              <div style="padding: 14px;">
                <span>新闻动态</span>
                <div style="padding-top: 10px;line-height: 15px;">
                  <time style="font-size: 12px;color: #999;">伴随计算机技术、脑成像技术、材料科学技术的发展，人们对大脑神经网络的认识正处于逐渐揭开面纱的过程中。</time>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">2</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">4</div></el-col>
        </el-row>
        <!-- 灰色背景分隔条 -->
        <el-row>
          <el-col :span="24" style="background-color:#e2ebf0;height:20px;"></el-col>
        </el-row>
      </el-main>
    </el-container>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data () {
    return {
      'sideMenuDefaultOpenedArray': [],
      'carousels': [{
        'image': '/static/image/carousel1.png',
        'title': '北京协同创新研究院 智能传媒技术协同创新中心招聘'
      },
      {
        'image': '/static/image/carousel2.png',
        'title': '北京市脑科学和类脑计算论坛圆满举行'
      },
      {
        'image': '/static/image/carousel3.png',
        'title': '曹立宏教授应邀在首届未来计算国际论坛作主题报告'
      }]
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
/* override默认的分栏标题栏，使之成为蓝底白字 */
.el-card__header {
    background-color: #0085c4;
    color:#fff;
}
.el-card {
  border-style: none;
  box-shadow: none;
  height: 100%;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.el-card {
  border-radius: 0;
}
.sc-main{
  width:970px;margin: 0px auto;
  overflow: hidden;
}
.sc-sidemenu{
  height:100%;
  width:149px;
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
