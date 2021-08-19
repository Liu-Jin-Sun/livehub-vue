<template>
  <div>
    <i class="el-icon-s-fold" @click="changeCollapse"></i>
    2021-8-18
  </div>
  <div @mouseover="show">
     <el-dropdown class="dropdown">
      <div class="el-dropdown-link">
          <img :src="photo" class="avatar">
          <span class="name">{{name}}</span>
          <div class="el-icon-arrow-down el-icon--right"></div>
          <el-dropdown-menu class="dropdown-menu">
            <el-dropdown-item class="dropdown-menu-item">个人设置</el-dropdown-item>
            <el-dropdown-item class="dropdown-menu-item" @click="exit">用户退出</el-dropdown-item>
        </el-dropdown-menu>
      </div>
    </el-dropdown>
  </div>
</template>
<script>
import emitter from '@/utlis/emitter.js'
export default ({
  props: {
    name: {
      type: String,
      default: '用户昵称'
    },
    photo: {
      type: String,
      default: 'https://p1.music.126.net/RCt0avpQo5Glz3jauAgF7w==/109951166035904088.jpg?param=140y140'
    }
  },
  data () {
    return {
      collapse: false
    }
  },
  created () {
    console.log(this.name, this.photo)
  },
  methods: {
    changeCollapse () {
      this.collapse = !this.collapse
      console.log(this.collapse, 'header')
      emitter.emit('changeCollapse', { collapse: this.collapse })
    },
    exit () {
      this.$router.push('./login')
      window.localStorage.removeItem('token')
    }
  }
})
</script>
<style scoped lang='less'>
.dropdown{
  position: relative;
  .avatar{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    vertical-align: middle;
  }
  .name{
    margin: 0px 8px;
  }
  .el-dropdown-link{
    outline: none;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .dropdown-menu{
    top: 20px;
    left: 30px;
    display: none;
    &:hover{
      display: block;
    }
    .dropdown-menu-item{
      font-size: 10px;
      width: 50px;
      height: 25px;
      line-height: 25px;
    }
  }
  &:hover .dropdown-menu{
    display: block;
  }
}
</style>
