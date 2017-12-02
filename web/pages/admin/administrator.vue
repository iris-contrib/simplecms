<template>
  <div class="pr-4">
    <div>
      <p class="lead mb-1"><i class="el-icon-arrow-down"></i>&nbsp;管理员列表</p>
      <p class="small text-muted pl-4">操作说明</p>
    </div>
    <div class="pl-4">
      <el-table :data="adminUsers" stripe style="width: 100%">
        <el-table-column label="状态" width="100">
          <template slot-scope="scope">
            <i v-if="scope.row.forbidden" class="el-icon-close text-danger">&nbsp;禁用</i>
            <i v-else class="el-icon-check text-success">&nbsp;正常</i>
          </template>
        </el-table-column>
        <el-table-column label="昵称" width="200">
          <template slot-scope="scope">
            {{ scope.row.nickname }}
          </template>
        </el-table-column>
        <el-table-column label="邮箱">
          <template slot-scope="scope">
            {{ scope.row.email }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="onEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="onDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pt-3">
        <el-button @click="onNew" type="success">添加新项</el-button>
      </div>
    </div>
    <!-- transition用于实现css过渡动画 -->
    <transition name="slide-fade">
      <div v-if="currentEditingMode !== 'none'">
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
      </div>
    </transition>
  </div>
</template>

<script>
var id = 3
export default {
  layout: 'admin',
  methods: {
    // 转换编辑状态为目标状态，如果当前在其它状态，先转为none状态
    changeEditingModeTo (newMode) {
      if (this.currentEditingMode === 'none') {
        this.currentEditingMode = newMode
      } else {
        this.currentEditingMode = 'none'
        setTimeout(() => {
          console.log('--')
          this.currentEditingMode = newMode
        }, 500)
      }
    },
    onEdit (index, row) {
      this.changeEditingModeTo('edit')
      this.editingAdminUser = Object.assign({}, this.adminUsers[index])
    },
    onDelete (index, row) {
      this.adminUsers.splice(index, 1)
      // console.log(index, row)
    },
    onNew () {
      this.changeEditingModeTo('new')
      this.editingAdminUser = {}
    },
    onCancel () {
      this.currentEditingMode = 'none'
    },
    onSave () {
      // console.log(this.editingAdminUser)
      if (this.currentEditingMode === 'new') {
        this.editingAdminUser.id = id++
        this.adminUsers.push(this.editingAdminUser)
      } else {
        for (let j = 0; j < this.adminUsers.length; j++) {
          if (this.adminUsers[j].id === this.editingAdminUser.id) {
            this.adminUsers.splice(j, 1, this.editingAdminUser)
            break
          }
        }
      }
      this.editingAdminUser = {}
      this.currentEditingMode = 'none'
    }
  },
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      show: true,
      // 当前编辑状态：new、edit、none
      currentEditingMode: 'none',
      editingAdminUser: {},
      adminUsers: [{
        id: 1,
        nickname: '王小虎',
        passwd: '111111',
        email: '2839992@qq.com',
        forbidden: false
      }, {
        id: 2,
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
  },
  mounted: function () {
  }
}
</script>

<style>

</style>
