<template>
  <el-container>
    <el-main>
      <form class="form-signin pt-5">
        <h2 class="form-signin-heading">院校内容管理后台</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="用户名" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="密码" required="">
        <div class="checkbox">
          <label>
            <input type="checkbox" checked value="remember-me"> 记住状态
          </label>
        </div>
        <div class="text-center">
          <el-button class="btn btn-block" type="primary">登录</el-button><br/>
          <el-button class="btn btn-block" type="text">取消</el-button>
        </div>
      </form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  layout: 'empty',
  head: {
    title: '院校首页',
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
body{
  background-color: #e9eef3;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  min-height: 700px;
}
.form-signin{
  max-width: 380px;
  padding: 30px;
  margin: 0 auto;
}
.form-signin .form-signin-heading, .form-signin .checkbox {
    margin-bottom: 15px;
}
.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 8px 10px 8px;
    font-size: 16px;
}
.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
