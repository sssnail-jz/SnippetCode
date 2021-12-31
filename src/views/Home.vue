<template>
  <el-container>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#C0C4CC"
      active-text-color="#ffd04b"
      :unique-opened="true"
      :collapse="isCollapse"
      :style="menuStyleObject"
      :router="true"
    >
      <el-submenu index="1">
        <template #title>
          <svg class="menuicon icon" aria-hidden="true">
            <use xlink:href="#icon-tubiaozhizuomoban-"></use>
          </svg>
          <span>Snippet</span>
        </template>
        <el-menu-item index="/home/snippet/create">发布</el-menu-item>
        <el-menu-item index="1-2">管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/calculate">
        <svg class="menuicon icon" aria-hidden="true">
          <use xlink:href="#icon-zhexiantu"></use>
        </svg>
        <span>统计</span>
      </el-menu-item>
      <el-menu-item index="3">
        <svg class="menuicon icon" aria-hidden="true">
          <use xlink:href="#icon-quanzi"></use>
        </svg>
        <span>圈子</span>
      </el-menu-item>
      <el-menu-item index="4">
        <svg class="menuicon icon" aria-hidden="true">
          <use xlink:href="#icon-shequpinglun"></use>
        </svg>
        <span>社区</span>
      </el-menu-item>
    </el-menu>
    <el-main>
      <router-view></router-view>
    </el-main>
    <svg
      class="menuicon icon"
      aria-hidden="true"
      style="position: fixed; top: 50%; right: 20px; font-size: 60px"
      @click="drawer = true"
    >
      <use xlink:href="#icon-bug"></use>
    </svg>
    <el-drawer
      title="I am the title"
      v-if="drawer"
      :visible.sync="drawer"
      :with-header="false"
      :size="300"
    >
      <span>Hi there!</span>
    </el-drawer>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapState(['isCollapse', 'menuStyleObject'])
  }
}
</script>

<style scoped>
/*  */
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  height: 60px;
}
.el-main {
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}

/*  */
.el-menu {
  height: 100%;

  border: 0;
  overflow: hidden;
}
.menuicon {
  font-size: 25px;
  margin-left: -2px;
  margin-right: 10px;
}
</style>
