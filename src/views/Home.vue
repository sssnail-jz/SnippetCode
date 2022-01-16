<template>
  <el-container>
    <snippet-side-bar v-if="sidebarVisible" />
    <el-main>
      <router-view></router-view>
    </el-main>
    <snippet-config-table />
  </el-container>
</template>

<script>
import SnippetSideBar from '@/components/SnippetSideBar'
import SnippetConfigTable from '@/components/SnippetConfigTable'
import { mapGetters } from 'vuex'

export default {
  components: {
    SnippetSideBar,
    SnippetConfigTable
  },
  computed: {
    ...mapGetters(['sidebarVisible'])
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
