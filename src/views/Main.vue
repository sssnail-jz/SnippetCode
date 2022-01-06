<template>
  <el-container>
    <el-header height="40px" style="line-height: 40px">
      <span class="iconfont" :class="collapseIcon" @click="changeCollapse"></span>
    </el-header>
    <el-main>
      <overlay-scrollbars ref="osComponentRef" style="height: 100%">
        <router-view></router-view>
      </overlay-scrollbars>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['isCollapse']),
    collapseIcon () {
      return this.isCollapse ? 'icon-shouqi' : 'icon-zhankai'
    }
  },
  methods: {
    changeCollapse: function () {
      this.$store.commit('changeCollapse')
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
  background-color: #F0F0F5;
  padding: 0;
}

/*  */
.collapse-icon {
  font-size: 30px;
}
</style>
