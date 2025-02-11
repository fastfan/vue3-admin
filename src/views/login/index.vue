<template>
  <div class="login-box">
    <div class="login-form">
      <h1>企业中后台管理系统</h1>
      <el-form show-message :model="userInfo" :rules="rules" center class="login-info">
        <el-form-item prop="username">
          <el-input v-model="userInfo.username" type="text" :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userInfo.password" type="password" :prefix-icon="Lock" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="userLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'
const userStore = useUserStore()
const router = useRouter()
const userInfo = reactive({
  username: '',
  password: ''
})
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const userLogin = () => {
  userStore.storeUserLogin(userInfo).then((res) => {
    if (res) {
      router.push('/')
    }
  })
}
</script>
<style lang="scss" scoped>
.login-box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background: var(--dawei-backgroud-color);

  .login-form {
    display: flex;
    width: 300px;
    text-align: center;
    flex-direction: column;

    .login-info {
      height: max-content;
    }
  }
}
</style>
