<template>
  <el-container>
    <snippet-menu />
    <el-main>
      <!-- <router-view></router-view> -->
      <snippet-login></snippet-login>
    </el-main>
    <snippet-drawer />
  </el-container>
</template>

<script>
import SnippetMenu from '@/components/SnippetMenu'
import SnippetDrawer from '@/components/SnippetDrawer'
import SnippetLogin from '@/components/SnippetLogin'

export default {
  components: {
    SnippetMenu,
    SnippetDrawer,
    SnippetLogin
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
