<template>
  <div class="pr-4">
    <div>
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;内容列表</p>
      <p class="small text-muted pl-4">无操作说明</p>
    </div>
    <div class="pl-4">
      <el-form ref="form">
        <el-form-item label="选择分类" class="mb-3">
          <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!-- 列表 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column 
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          label="日期"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-check"></i>&nbsp;
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="info" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">隐藏</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pt-3">
        <el-button type="danger">隐藏</el-button><span class="text-muted">（批量操作）</span>
      </div>
      <div class="p-3" style="text-align:center">
        <el-pagination
          layout="total, prev, pager, next"
          :total="50" style="background:transparent">
        </el-pagination>
      </div>
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
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value8: '选项4',
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
.el-table label {
    margin-bottom: 0 !important;
}
.el-pagination button, .el-pagination li {
    background-color: transparent !important;
}
thead tr{
  background-color: #d8d8d8 !important;
  color: #717171;
}
</style>


