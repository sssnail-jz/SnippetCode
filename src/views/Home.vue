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
.menuicon {
  font-size: 25px;
  margin-left: -2px;
  margin-right: 10px;
}
/*  */
.el-timeline {
  padding: 20px;
}
</style>
