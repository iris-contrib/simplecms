<template>
  <div class="pr-4">
    <div>
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;轮播图列表</p>
      <p class="small text-muted pl-4">默认操作</p>
    </div>
    <div class="pl-4">
      <el-table :data="adminUsers" stripe style="width: 100%">
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <i v-if="scope.row.forbidden" class="el-icon-close text-danger"></i>
            <i v-else class="el-icon-check text-success"></i>
          </template>
        </el-table-column>
        <el-table-column label="昵称">
          <template slot-scope="scope">
            {{ scope.row.nickname }}
          </template>
        </el-table-column>
        <el-table-column label="邮箱">
          <template slot-scope="scope">
            {{ scope.row.email }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="info" @click="onEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="onDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pt-3">
        <el-button @click="onNew" type="success">添加新项</el-button>
      </div>
    </div>
    <template v-if="currentEditingMode !== 'none'">
      <div class="pt-4">
        <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;{{currentEditingTitle}}</p>
        <p class="small text-muted pl-4">默认操作</p>
      </div>
      <div class="pl-4">
        <el-form style="max-width:450px;" :model="editingAdminUser" label-width="80px">
          <el-form-item label="用户昵称">
            <el-input v-model="editingAdminUser.nickname"></el-input>
            <small class="form-text text-muted mt-0">屏幕上显示的名称</small>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="editingAdminUser.email"></el-input>
            <small class="form-text text-muted mt-0">邮箱可用于找回密码</small>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="editingAdminUser.passwd"></el-input>
            <small class="form-text text-muted mt-0">不要设置过于简单的密码，建议字母+数字</small>
          </el-form-item>
          <el-form-item label="是否禁用">
            <el-switch v-model="editingAdminUser.forbidden"></el-switch>
            <small class="form-text text-muted mt-0">禁用后帐号不能登录</small>
          </el-form-item>
          <el-form-item class="pt-2">
            <el-button @click="onSave" type="primary">保存</el-button>
            <el-button @click="onCancel" type="text">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  methods: {
    onEdit (index, row) {
      this.currentEditingMode = 'edit'
      console.log(index, row)
    },
    onDelete (index, row) {
      console.log(index, row)
    },
    onNew () {
      this.currentEditingMode = 'new'
    },
    onCancel () {
      this.currentEditingMode = 'none'
    },
    onSave () {
      this.currentEditingMode = 'none'
    }
  },
  data () {
    return {
      // 当前编辑状态：new、edit、none
      currentEditingMode: 'none',
      editingAdminUser: {},
      adminUsers: [{
        nickname: '王小虎',
        passwd: '111111',
        email: '2839992@qq.com',
        forbidden: false
      }, {
        nickname: '李小强',
        passwd: '111111',
        email: '2832392@qq.com',
        forbidden: true
      }]
    }
  },
  computed: {
    // 当前编辑的标题，由currentEditingMode决定
    currentEditingTitle: function () {
      return (this.currentEditingMode === 'edit') ? '编辑帐号' : '新增帐号'
    }
  },
  components: {
  }
}
</script>

<style>

</style>
