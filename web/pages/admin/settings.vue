<template>
    <div class="pr-4">
    <div>
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;站点设置</p>
      <p class="small text-muted pl-4">单击名称编辑</p>
    </div>
    <div class="pl-4">
      <el-form class="demo-form-inline" label-width="80px" style="max-width:1080px">
        <el-form-item label="顶部领图">
          <!-- 如果不使用:data-src,有时间图片不显示 -->
          <img src="~assets/1000x130.svg" class="img-thumbnail">
        </el-form-item>
        <el-form-item label="站点标题">
          <el-input style="max-width:300px" value="CMS" placeholder="text"></el-input>
        </el-form-item>
        <el-form-item label="后台标题">
          <el-input style="max-width:300px" value="CMS后台管理系统" placeholder="text"></el-input>
        </el-form-item>
        <el-form-item label="底部logo">
          <img src="~assets/280x60.svg" class="img-thumbnail">
        </el-form-item>
        <el-form-item label="公众号">
          <el-input style="max-width:300px" value="公众号名称" placeholder="text"></el-input><br/>
          <img src="~assets/80x80.svg" class="img-thumbnail">
        </el-form-item>
        <el-form-item label="底部地址">
          <el-input style="max-width:500px" :rows="3" type="textarea"></el-input>
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
    ],
    script: [
      { src: '/static/js/holder-v2.9.0.min.js', type: 'text/javascript' }
    ]
  },
  methods: {
  },
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  components: {
  }
}
</script>

<style>
</style>
