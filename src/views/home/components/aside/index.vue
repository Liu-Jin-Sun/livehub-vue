<template>
  <el-menu
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" class="item">
      </el-menu-item >
      <el-menu-item index="1" class="item">
        <i class="iconfont icon-Homehomepagemenu"></i>
        <template #title>首页</template>
      </el-menu-item >
      <el-menu-item index="2" class="item">
        <i class="iconfont icon-content"></i>
        <template #title>内容管理</template>
      </el-menu-item>
      <el-menu-item index="3" class="item">
        <i class="iconfont icon-img-fill"></i>
        <template #title>素材管理</template>
      </el-menu-item>
      <el-menu-item index="4" class="item">
        <i class="iconfont icon-publish"></i>
        <template #title>发布文章</template>
      </el-menu-item>
      <el-menu-item index="5" class="item">
        <i class="iconfont icon-comment"></i>
        <template #title>评论管理</template>
      </el-menu-item>
      <el-menu-item index="6" class="item">
        <i class="iconfont icon-fans"></i>
        <template #title>粉丝管理</template>
      </el-menu-item>
      <el-menu-item index="7" class="item">
        <i class="iconfont icon-personalcenterclick"></i>
        <template #title>个人设置</template>
      </el-menu-item>
  </el-menu>
</template>
<script>
import emitter from '@/utlis/emitter.js'
export default ({
  data () {
    return {
      isCollapse: false
    }
  },
  created () {
    emitter.on('changeCollapse', (collapse) => {
      this.isCollapse = collapse
      console.log(this.isCollapse, 'aside')
    })
  }
})
</script>

<style scoped lang="less">
.iconfont{
    padding: 0px 10px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
