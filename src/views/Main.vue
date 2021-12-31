<template>
  <el-container>
    <el-header>
      <svg
        class="collapse-icon icon"
        aria-hidden="true"
        @click="changeCollapse"
      >
        <use :href="collapseIcon"></use>
      </svg>
      <svg-icon icon-class="404" />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer></el-footer>
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
      return this.isCollapse ? '#icon-shouqi' : '#icon-zhankai'
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
  background-color: #373d41;
  height: 60px;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
}
.el-footer {
  background-color: #333744;
  height: 60px;
}

/*  */
.collapse-icon {
  font-size: 30px;
}
</style>
