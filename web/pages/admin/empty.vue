<template>
    <div class="pr-4">
    <div>
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;分类树</p>
      <p class="small text-muted pl-4">操作说明</p>
    </div>
    <div class="pl-4">
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
