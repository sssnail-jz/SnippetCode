<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :class="sidebarCollapse.style"
    background-color="#304156"
    text-color="#B2BECD"
    active-text-color="gray"
    :unique-opened="true"
    :collapse="sidebarCollapse.bCollapse"
    :router="true"
    :collapse-transition="false"
  >
    <el-submenu index="1">
      <template #title>
        <snippet-svg
          class="menu-icon"
          icon="#icon-tubiaozhizuomoban-"
        ></snippet-svg>
        <span>Snippet</span>
      </template>
      <el-menu-item index="1-1" :route="{ name: 'snippet-create' }">
        <snippet-svg class="menu-icon" icon="#icon-fabu"></snippet-svg>
        <span>发布</span>
      </el-menu-item>
      <el-menu-item index="1-2" :route="{ name: 'snippet-detail' }">
        <snippet-svg class="menu-icon" icon="#icon-woguanlide"></snippet-svg>
        <span>管理</span></el-menu-item
      >
    </el-submenu>
    <el-menu-item index="2">
      <snippet-svg class="menu-icon" icon="#icon-zhexiantu"></snippet-svg>
      <span>数据</span>
    </el-menu-item>
    <el-menu-item index="3">
      <snippet-svg class="menu-icon" icon="#icon-tongji"></snippet-svg>
      <span>统计</span>
    </el-menu-item>
    <el-menu-item index="4">
      <snippet-svg class="menu-icon" icon="#icon-quanzi"></snippet-svg>
      <span>圈子</span>
    </el-menu-item>
    <el-menu-item index="5">
      <snippet-svg class="menu-icon" icon="#icon-shequpinglun"></snippet-svg>
      <span>社区</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SnippetSideBar',

  data () {
    return {
      isCollapse: 'no-collapse'
    }
  },

  computed: {
    ...mapGetters(['sidebarCollapse'])
  }
}
</script>

<style scoped>
/*  */
.el-menu {
  height: 100%;
  border: 0;
  overflow: hidden;
}
.el-menu-item {
  padding: 0;
}
.menu-icon {
  font-size: 25px;
  margin-left: -2px;
  margin-right: 10px;
  margin-bottom: -2px;
}
.menu-item-icon {
  font-size: 20px;
  margin-left: -10px;
  margin-right: 10px;
  margin-bottom: -2px;
}

.collapse {
}
.no-collapse {
  width: 170px;
}
</style>
