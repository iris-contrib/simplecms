<template>
  <el-container style="max-width:1140px;margin: 0 auto;">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="300px">Aside</el-aside>
      <el-main>
        <div v-html="html" class="markdown-body">
        </div>
        

        <el-select
    v-model="value10"
    multiple
    filterable
    allow-create
    placeholder="请选择文章标签">
    <el-option
      v-for="item in options5"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <p>book:{{ countn }}</p>
  <button @click="clickCounterBtn">{{ countn }}</button>

  <p>project title:{{ $store.state.project }}</p>
  <button @click="clickTitleBtn">settitlebtn</button>

  <br/><br/>
  <button v-on:click="countery += 1">增加 1</button>
  <p>这个按钮被点击了 {{ countery }} 次。</p>

  <p>
    <button @click="getMockUser">getMockUser</button>
  </p>

  <mavon-editor v-model="intro" @change="editorChange" />



      </el-main>
    </el-container>
  
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import axios from 'axios'

var MarkdownIt = require('markdown-it')
var md = new MarkdownIt()
var result = md.render('# markdown-it rulezz!')

/*
tag:
id
tagName

user-article-tag:
id
userId
tagId
articleId

一文可以有多个tagId，所有用户共用一张tag大表
可以统计某个用户用过的tag列表
可以统计某个tag被所有用户使用的次数
*/

// var nock = require('nock')
// nock('http://api.info/')
//   .get('/users/1')
//   .reply(200, {
//     _id: '123ABC',
//     _rev: '946B7D1C',
//     username: 'pgte',
//     email: 'pedro.teixeira@gmail.com'
//   })

export default {
  // asyncData会同步为客户端的data，同时在浏览器渲染前设置
  // 可以完全代替vue data
  // 
  // 使用async与await关键字，在服务器端拉取接口，相当于服务器端iris在渲染view之前从db中拉取数据
  // asyncData与fetch的不同在于，fetch可更新store对象，适用于拉取多页内共享的数据对象；asyncData适用于管理本页局部数据对象。
  // asyncData先于fetch执行
  async asyncData (context) {
    // console.log('|||===asyncData===||||')
    // 由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象
    let { data } = await axios.get('https://api.douban.com/v2/book/isbn/:9787111128069')
    console.log('========book=========', data.id)

    return {
      countery: data.id,
      project: 'nuxt123',
      countn: 100,
      title: '==',
      options5: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      value10: [],
      html: result,
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
  // fetch与asyncData不同的是，fetch仅是更新数据，并不更新组件
  // 可以在fetch中将store中的数据更新
  // fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。
  fetch ({ store, params }) {
    // console.log('|||===fetch===||||')
    // 在多个页面同时可能用到的数据，不知道在哪个页面先被加载过
    // 可以存在store中，使用前先做个判断，如果为null，则加载；否则直接取用
    return axios.get('https://api.douban.com/v2/book/isbn/:9787111128069')
      .then((res) => {
        console.log('---------------------=========', res.data.id)
        // 向store传值
        store.commit('setBook', res.data.id)
      })
  },
  methods: {
    getMockUser () {
      axios.get('user.json')
        .then((res) => {
          console.log('GET MOCK USER====', res.data)
        })
    },
    clickTitleBtn () {
      // 将数据记录在store中的更新方法
      this.$store.state.project = (new Date()).toString()
    },
    clickCounterBtn () {
      console.log(this.countn)
      this.countn += 2
    },
    // editorChange value 可以获得markdown 代码，render 获得 html 代码
    editorChange (value, render) {
      this.html = md.render(value)
      console.log('value: ' + value)
      console.log('render: ' + render)
    }
  },
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  min-height: 500px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
