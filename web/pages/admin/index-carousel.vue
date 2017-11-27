<template>
  <div class="pr-4">
    <div>
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;轮播图列表</p>
      <p class="small text-muted pl-4">选择后编辑</p>
    </div>
    <div class="pl-4">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        </el-table-column>
        <el-table-column label="日期" width="180">
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
        <el-button type="success">添加新项</el-button>
      </div>
    </div>
    <div class="pt-4">
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;编辑单项</p>
      <p class="small text-muted pl-4">无操作说明</p>
    </div>
    <div class="pl-4">
      <el-form style="max-width:1080px;" ref="form" :model="form" label-width="40px">
        <el-form-item label="标题">
          <el-input style="max-width:300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input  style="max-width:300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <!-- 先引入holder文件才可以使用，src的地址与实际的js文件地址没有关系 -->
          <img class="img-thumbnail" v-holder="{img:'500x200',theme: 'gray', text:'500x200'}">
        </el-form-item>
        <el-form-item class="pt-2">
          <el-button type="primary">保存</el-button>
          <el-button type="text">取消</el-button>
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
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
