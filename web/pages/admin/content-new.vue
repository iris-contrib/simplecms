<template>
  <div class="pr-4">
    <div>
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;新增内容</p>
      <p class="small text-muted pl-4">操作说明</p>
    </div>
    <div class="pl-4">
      <el-input class="sc-content-title" placeholder="标题" v-model="form.name"></el-input>
      <div>
        <mavon-editor class="mt-3" :toolbars="toolbars" 
              code_style="code-github" default_open="edit" :subfield="false" />
      </div>
      <el-form ref="form" :model="form" label-width="40px">
        <el-form-item label="分类" class="pt-3">
          <el-input style="width:438px" placeholder="新分类" class="input-with-select">
            <el-select style="width:218px;" value="1" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input style="width:438px" placeholder="新作者" class="input-with-select">
            <el-select style="width:218px;" value="1" slot="prepend" placeholder="请选择">
              <el-option label="张二" value="1"></el-option>
              <el-option label="王五" value="2"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
        </el-form-item>
        <el-form-item label="发表">
          <el-switch v-model="form.publish"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button type="text">重置</el-button>
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
    onSubmit () {
      console.log('submit!')
    },
    editorChange (value, render) {
    }
  },
  data () {
    return {
      html: '---',
      form: {
        name: '',
        region: '',
        date1: new Date(),
        publish: true,
        type: [],
        resource: '',
        desc: ''
      },
      formInline: {
        user: '',
        region: ''
      },
      intro: '',
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    }
  },
  components: {
  }
}
</script>

<style>
.el-form-item {
    margin-bottom: 6px;
}
.v-note-wrapper {
  border: 1px solid #d8dce5;
}
.v-note-wrapper .v-note-op{
  box-shadow: none !important;
  border-bottom: 1px solid #ececec;
}
.v-note-wrapper .v-note-panel {
  box-shadow: none !important;
}
.sc-content-title .el-input__inner{
  border-radius: 0px;
  line-height: 42px;
  height: 42px;
}
.content-input-wrapper {
  padding: 10px 15px 15px 15px !important;
}
</style>
