<template>
  <el-container>
    <el-header height="40px" style="line-height: 40px">
      <!-- 展开、收起侧边栏 -->
      <span
        class="iconfont"
        v-if="sidebarVisible"
        :class="sidebarCollapse.bCollapse ? 'icon-shouqi' : 'icon-zhankai'"
        @click="toggleSideBar"
      ></span>
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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['sidebarVisible', 'sidebarCollapse'])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
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
  background-color: white;
}
.el-main {
  background-color: #f0f0f5;
  padding: 0;
}

/*  */
.collapse-icon {
  font-size: 30px;
}
</style>
