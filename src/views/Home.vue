<template>
  <el-container class="el-outer">
    <el-aside width="150px" class="el-outer-menu">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Four</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="el-outer-main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
export default {
  data () {
    return {
      articleList: [1, 2, 3]
    }
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
.el-footer {
  background-color: #333744;
  height: 60px;
}

/*  */
.el-outer {
  margin: 0;
  padding: 0;
  border: 0;
}
.el-outer-menu {
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
}
.el-outer-main {
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}
.el-menu {
  height: 100%;
  border: 0;
}
</style>
