<template>
  <div>
    <div>
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;效果预览</p>
      <p class="small text-muted pl-4">操作说明，第一个菜单“首页”是不可编辑的</p>
    </div>
    <div class="sc-container" style="width:970px;z-index:100;margin:0 auto;">
      <el-menu class="sc-topmenu" mode="horizontal" background-color="#006696" text-color="#f3f3f3" active-text-color="#fff">
        <el-menu-item index="1"><a href="/">首页</a></el-menu-item>
        <template v-for="item in data4[0].children">
          <el-submenu v-if="item.children" :index="item.id" v-bind:key="item.id">
            <template slot="title"><a :href="item.link">{{item.label}}</a></template>
            <el-menu-item :index="subitem.id" v-for="subitem in item.children" v-bind:key="subitem.id">
              <a :href="subitem.link">{{subitem.label}}</a>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="''+item.id" v-bind:key="item.id"><a :href="item.link">{{item.label}}</a></el-menu-item>
        </template>
      </el-menu>
    </div>
    <!-- 菜单树 -->
    <div class="pt-5">
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;菜单树</p>
      <p class="small text-muted pl-4">单击菜单名称编辑</p>
    </div>
    <div class="pl-4">
      <el-tree
        :data="data4"
        :props="defaultProps"
        :show-checkbox="false"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent" class="p-2" style="width:auto;max-width:500px;">
      </el-tree>
    </div>
    <!-- 单项编辑 -->
    <template v-if="currentEditingNode.id">
      <div class="pt-5">
        <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;单项编辑</p>
        <p class="small text-muted pl-4">操作说明</p>
      </div>
      <div class="pl-4">
        <el-form :inline="true" :model="currentEditingNode" class="demo-form-inline">
          <el-form-item class="mb-0" label="标题">
            <el-input v-model.lazy="currentEditingNode.label" placeholder="text"></el-input>
          </el-form-item>
          <el-form-item class="mb-0" label="链接">
            <el-input v-model.lazy="currentEditingNode.link" placeholder="link"></el-input>
          </el-form-item>
          <el-form-item class="mb-0">
            <el-button @click="editNodeCancel" type="text">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </template>
    <div class="pl-4 pt-5">
      <el-badge is-dot class="item">
        <el-button icon="el-icon-upload2" type="primary">发布</el-button>
      </el-badge>
      <p class="small text-muted pt-2">发布之后前台才会更新</p>
    </div>
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
    getRawdataOfNode (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      const rawdata = children[index]
      return rawdata
    },
    editNodeCancel () {
      this.currentEditingNode = {}
      // console.log(this.currentEditingNode)
    },
    append (data) {
      const newChild = { id: id++, label: '子项', link: '#' }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },
    edit (node, data) {
      const rawdata = this.getRawdataOfNode(node, data)
      if (rawdata.id === 1) {
        this.currentEditingNode = {}
        return
      }
      this.currentEditingNode = rawdata
    },
    remove (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    renderContent (h, { node, data, store }) {
      const rawdata = this.getRawdataOfNode(node, data)
      if (rawdata.id === 1) {
        return (
          <span class="sc-tree-item">
            <span>
              <span>{node.label}</span>
            </span>
            <span>
              <el-button size="mini" type="success" on-click={ () => this.append(data) }>添加子项</el-button>
              <el-button size="mini" type="danger" on-click={ () => this.remove(node, data) }>移除</el-button>
            </span>
          </span>)
      } else {
        return (
          <span class="sc-tree-item">
            <span>
              <span><a href="javascript:;" on-click={ () => this.edit(node, data) }>{node.label}</a></span>
            </span>
            <span>
              <el-button size="mini" type="success" on-click={ () => this.append(data) }>添加子项</el-button>
              <el-button size="mini" type="danger" on-click={ () => this.remove(node, data) }>移除</el-button>
            </span>
          </span>)
      }
    }
  },
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      currentEditingNode: {},
      data4: [{
        id: 1,
        label: '顶级菜单',
        link: '/',
        children: [{
          id: 4,
          label: '二级 1-1',
          link: '#'
        }, {
          id: 5,
          label: '二级 1-2',
          link: '#'
        }]
      }],
      defaultProps: {
        id: 'id',
        children: 'children',
        label: 'label',
        link: '#'
      }
    }
  },
  components: {}
}
</script>

<style>
  .sc-topmenu{
    justify-content: space-around;
    display: flex;
  }
  .sc-topmenu a{
    text-decoration: none;
    color:#f3f3f3;
  }
  /* 此处是为了去除鼠标移动菜单项之上后的灰色背景 */
  .sc-topmenu li:hover,.sc-topmenu div:hover{
    background-color:#0177af !important;
  }
  /* 这是为了去掉顶部二级菜单的多余宽度 */
  .sc-topmenu .el-submenu .el-menu-item{
    min-width:180px !important;
  }
  /* 菜单树 */
  .el-tree-node__content{
    height:auto !important;
    padding:5px 0 5px;
  }
  .el-tree-node__content a{
    text-decoration: none !important;
  }
  .sc-tree-item{
    flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;
  }
</style>
