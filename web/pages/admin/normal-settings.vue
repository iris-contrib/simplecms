<template>
    <div class="pr-4">
    <div>
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;站点设置</p>
      <p class="small text-muted pl-4">操作说明</p>
    </div>
    <div class="pl-4">
      <el-form v-model="siteSettings" class="demo-form-inline" label-width="80px" style="max-width:1080px">
        <el-form-item label="顶部图片">
          <img v-if="siteSettings.headerImage" class="img-thumbnail" :src="siteSettings.headerImage">
          <img v-else class="img-thumbnail" v-holder="{img:'1000x130', text:'1000x130', fg:'dcdcdc'}">
          <el-button size="small" type="default" icon="el-icon-upload2">上传图片</el-button>
        </el-form-item>
        <el-form-item label="默认标题">
          <el-input style="max-width:300px" v-model="siteSettings.defaultTitle" placeholder="text"></el-input>
          <small class="form-text text-muted mt-0">如果页面未定义标题，将显示默认标题</small>
        </el-form-item>
        <el-form-item label="后台标题">
          <el-input style="max-width:300px" v-model="siteSettings.backendTitle" placeholder="text"></el-input>
          <small class="form-text text-muted mt-0">在后台登录页与主页默认显示的标题，一般无需更改</small>
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
</style>
