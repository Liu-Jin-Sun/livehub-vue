<template>
  <el-container class="home-container">
    <el-aside
      class="aside"
    ><Aside class="content"/></el-aside>
    <el-container>
      <el-header class="header"><Header :name='userInfo.name' :photo='userInfo.photo'/></el-header>
      <el-main class="main">
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getUserInfo } from '@/api/user.js'
import Aside from './components/aside/index.vue'
import Header from './components/header/index.vue'
export default {
  components: {
    Aside,
    Header
  },
  props: {},
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {},
  watch: {},
  created () {
    getUserInfo().then((res) => {
      this.userInfo = res.data.data
    }).catch((err) => {
      console.log(err)
    })
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.home-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.aside {
  // background-color: #d3dce6;
  width: auto;
  .content{
    height: 100%;
  }
}

.header {
  height: 50px;
  background-color: #b3c0d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main {
  background-color: #e9eef3;
}
</style>
