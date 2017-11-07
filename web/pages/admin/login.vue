<template>
  <el-container>
    <el-main>
      <form class="form-signin">
        <h2 class="form-signin-heading">登录面板</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="用户名" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="密码" required="">
        <div class="checkbox">
          <label>
            <input type="checkbox" checked value="remember-me"> 记住状态
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
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
  max-width: 330px;
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
    padding: 10px;
    font-size: 16px;
}
.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
