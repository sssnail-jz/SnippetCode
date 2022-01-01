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
          <snippet-svg
            class="menu-icon"
            icon="#icon-tubiaozhizuomoban-"
          ></snippet-svg>
          <span>Snippet</span>
        </template>
        <el-menu-item index="/home/snippet-create">
          <snippet-svg class="menu-icon" icon="#icon-fabu"></snippet-svg>
          <span>发布</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <snippet-svg class="menu-icon" icon="#icon-woguanlide"></snippet-svg>
          <span>管理</span></el-menu-item
        >
      </el-submenu>
      <el-menu-item index="/home/count">
        <snippet-svg class="menu-icon" icon="#icon-zhexiantu"></snippet-svg>
        <span>数据</span>
      </el-menu-item>
      <el-menu-item index="/home/calculate">
        <snippet-svg class="menu-icon" icon="#icon-tongji"></snippet-svg>
        <span>统计</span>
      </el-menu-item>
      <el-menu-item index="3">
        <snippet-svg class="menu-icon" icon="#icon-quanzi"></snippet-svg>
        <span>圈子</span>
      </el-menu-item>
      <el-menu-item index="4">
        <snippet-svg class="menu-icon" icon="#icon-shequpinglun"></snippet-svg>
        <span>社区</span>
      </el-menu-item>
    </el-menu>
    <el-main>
      <router-view></router-view>
    </el-main>
    <snippet-svg
      class="menu-icon"
      style="position: fixed; top: 50%; right: 20px; font-size: 60px"
      @click="drawer = true"
      icon="#icon-bug"
    ></snippet-svg>

    <el-drawer
      title="I am the title"
      v-if="drawer"
      :visible.sync="drawer"
      :with-header="false"
      :size="500"
    >
      <el-timeline>
        <el-timeline-item
          center
          timestamp="2018/4/12"
          placement="top"
          :color="green"
        >
          <el-card>
            <h4>新增功能</h4>
            <p>Tom committed 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item
          center
          timestamp="2018/4/3"
          placement="top"
          :color="blue"
        >
          <el-card>
            <h4>修改bug</h4>
            <p>Tom committed 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item
          center="true"
          timestamp="2018/4/2"
          placement="top"
          :color="green"
        >
          <el-card>
            <h4>新增功能</h4>
            <p>Tom committed 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-drawer>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      drawer: false,
      green: '#0bbd87',
      blue: '#0000ff'
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
/*  */
.el-timeline {
  padding: 20px;
}
</style>
