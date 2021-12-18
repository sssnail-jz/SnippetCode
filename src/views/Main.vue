<template>
  <el-container>
    <el-header>
      <el-dropdown trigger="click">
        <span @click="changeCollapse" class="el-dropdown-link"> 菜单展开 </span>
      </el-dropdown>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
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
  created: function () {
    console.log(this.isCollapse)
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
