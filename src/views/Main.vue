<template>
  <el-container>
    <el-header height="50px" style="line-height: 50px">
      <snippet-header></snippet-header>
    </el-header>
    <el-main>
      <overlay-scrollbars ref="osComponentRef" style="height: 100%">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </overlay-scrollbars>
    </el-main>
  </el-container>
</template>

<script>
import SnippetHeader from '@/components/SnippetHeader'

export default {
  components: { SnippetHeader }
}
</script>

<style scoped>
/*  */
.el-container {
  height: 100%;
}
.el-header {
  background-color: white;
}
.el-main {
  background-color: #f0f0f5;
  padding: 0;
}
</style>
