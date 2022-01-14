<template>
  <el-container>
    <snippet-menu />
    <el-main>
      <router-view></router-view>
    </el-main>
    <snippet-drawer />
  </el-container>
</template>

<script>
import SnippetMenu from '@/components/SnippetMenu'
import SnippetDrawer from '@/components/SnippetDrawer'

export default {
  components: {
    SnippetMenu,
    SnippetDrawer
  }
}
</script>

<style scoped>
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
</style>
