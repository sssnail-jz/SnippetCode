<template>
  <el-container>
    <el-header>
      <el-dropdown trigger="click">
        <span @click="changeCollapse" class="el-dropdown-link"> menu</span>
      </el-dropdown>
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
    ...mapState(['isCollapse'])
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
}
.el-main {
  background-color: #e9eef3;
}
.el-footer {
  background-color: #333744;
  height: 60px;
}

/*  */
.el-dropdown {
  color: white;
  text-align: center;
  line-height: 60px;
  padding: 0;
  margin: 0;
  margin-left: 40px;
  cursor: pointer;
}
</style>
