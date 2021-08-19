<template>
    <div class="login-container">
        <el-form class="login-from" :rules="rules" :model="user" ref="user">
            <el-form-item>
                <div class="title">livehub</div>
            </el-form-item>
            <el-form-item prop="phone">
                <el-input placeholder="手机号" v-model="user.mobile">
                </el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input placeholder="验证码" v-model="user.code">
                </el-input>
            </el-form-item>
            <el-form-item prop="checked">
                <el-checkbox v-model="user.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login-btn" @click="onSubmit" :loading="loginLoad">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { loginRequest } from '@/api/user.js'
export default {
  data () {
    return {
      loginLoad: false,
      user: {
        mobile: '',
        code: '',
        checked: false
      },
      rules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的验证码格式', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式', trigger: 'blur' }
        ],
        checked: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                console.log(value)
                callback()
              } else {
                callback(new Error('请用户同意条款'))
                console.log(value)
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('按钮点击')
      this.$refs.user.validate(valid => {
        if (!valid) {
          return
        }
        this.onLogin()
      })
    },
    onLogin () {
      this.loginLoad = true
      loginRequest(this.user).then(res => {
        this.loginLoad = false
        const { token } = res.data.data
        window.localStorage.setItem('token', token)
        this.$message({
          message: '登录成功',
          type: 'success'
        })
      }).catch(err => {
        this.loginLoad = false
        console.log(err)
        this.$message({
          message: '登录失败,手机号或者验证码错误',
          type: 'warning'
        })
      })
    }
  }
}
</script>
<style scoped lang='less'>
.login-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('./bg_img.png') no-repeat;
    background-size: cover;
    .login-from{
        background-color: rgba(255,255,255,0.8);
        padding: 50px;
        .title{
            font-size: 25px;
            text-align: center;
            color: #409EFF;
        }
        .login-btn{
            width: 100%;
        }
    }
}
</style>
