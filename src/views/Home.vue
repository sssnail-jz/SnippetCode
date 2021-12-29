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
          <i class="iconfont icon-user"></i>
          <span>Snippet</span>
        </template>
        <el-menu-item index="/home/snippet-create">发布</el-menu-item>
        <el-menu-item index="1-2">管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="iconfont icon-baobiao"></i>
        <span>统计</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="iconfont icon-users"></i>
        <span>圈子</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="iconfont icon-showpassword"></i>
        <span>社区</span>
      </el-menu-item>
    </el-menu>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['isCollapse', 'menuStyleObject'])
  },
  mounted () {
    axios
      .get('/snippet/snippet-list')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
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
i {
  margin-left: 2px;
  margin-right: 5px;
}
</style>
