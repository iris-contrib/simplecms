<template>
  <div>
    <el-tree
      :data="data4"
      :props="defaultProps"
      :show-checkbox="false"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>
    <p class="lead pt-4">编辑菜单</p>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="标题">
        <el-input v-model="formInline.user" placeholder="text"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input v-model="formInline.region" placeholder="link"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button type="text">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
let id = 1000
export default {
  layout: 'admin',
  head: {
    title: '导航菜单',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', integrity: 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb', crossorigin: 'anonymous' }
    ]
  },
  mounted: function () {
  },
  methods: {
    append (data) {
      const newChild = { id: id++, label: '子项', link: '#', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },
    edit (node, data) {
      console.log(node, data)
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    remove (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    renderContent (h, { node, data, store }) {
      return (
        <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
          <span>
            <span><a href="#">{node.label}</a></span>
          </span>
          <span>
            <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>添加子项</el-button>
            <el-button style="font-size: 12px;" type="text" on-click={ () => this.edit(node, data) }>编辑</el-button>
            <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
          </span>
        </span>)
    }
  },
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      data4: [{
        id: 1,
        label: '一级 1',
        link: '#',
        children: [{
          id: 4,
          label: '二级 1-1',
          link: '#'
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1',
          link: '#'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  components: {}
}
</script>


