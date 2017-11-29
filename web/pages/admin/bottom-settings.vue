<template>
    <div class="pr-4">
    <div>
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;站点设置</p>
      <p class="small text-muted pl-4">单击名称编辑</p>
    </div>
    <div class="pl-4">
      <el-form v-model="siteSettings" class="demo-form-inline" label-width="80px" style="max-width:1080px">
        <el-form-item label="底部预览">
          <el-footer>
            <div class="sc-container">
              <el-row :gutter="10">
                <el-col :span="6" style="display:flex;align-items: center;min-height: 150px;">
                  <img src="~assets/logo.png" style="padding-left:30px;" />
                </el-col>
                <el-col :span="14" style="text-align:right;padding:30px 30px 0;">
                  <p style="flex:1"></p>
                  <p><a href="http://www.cuc.edu.cn/">中传官网</a></p>
                  <p>中国传媒大学脑科学与智能媒体研究院</p>
                  <p>地址：北京市朝阳区定福庄东街1号中国传媒大学42号楼2层，邮编：100024</p>
                </el-col>
                <el-col :span="4" style="text-align:center;padding:25px">
                  <img src="~assets/qrcode.png" style="width:80px;height:80px;" class="image">
                  <p>脑与智能</p>
                </el-col>
              </el-row>
            </div>
          </el-footer>
        </el-form-item>
        <el-form-item label="LOGO">
          <img class="img-thumbnail" v-holder="{img:'280x60', text:'280x60', fg:'dcdcdc'}">
          <el-button size="small" type="default" icon="el-icon-upload2">上传图片</el-button>
        </el-form-item>
        <el-form-item label="公众号">
          <el-input style="max-width:300px" value="公众号名称" placeholder="text"></el-input>
          <br/>
          <img class="img-thumbnail" v-holder="{img:'100x100', text:'二维码图片100x100', fg:'dcdcdc'}">
          <el-button size="small" type="default" icon="el-icon-upload2">上传图片</el-button>
        </el-form-item>
        <el-form-item label="单位信息">
          <el-input style="max-width:500px" placeholder="名称"></el-input>
          <br/>
          <el-input style="max-width:500px" placeholder="地址"></el-input>
        </el-form-item>
        <el-form-item label="友情链接">
          <el-input style="max-width:500px" placeholder="标题"></el-input><br/>
          <el-input style="max-width:500px" placeholder="链接"></el-input>
          &nbsp;
          <el-button type="danger" size="mini" icon="el-icon-minus">删除</el-button>
          <el-button type="success" size="mini" icon="el-icon-plus">添加</el-button>
        </el-form-item>
        <el-form-item class="pt-2">
          <el-button type="primary">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head: {
    title: '标题',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', integrity: 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb', crossorigin: 'anonymous' }
    ]
  },
  methods: {
  },
  data () {
    return {
      siteSettings: {
        // /static/image/1000x130.svg
        headerImage: '',
        defaultTitle: '院校内容管理系统',
        backendTitle: '院校内容管理后台'
      }
    }
  },
  components: {
  }
}
</script>

<style>
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
  margin: 5px 0 5px;
  line-height:18px;
}
</style>
