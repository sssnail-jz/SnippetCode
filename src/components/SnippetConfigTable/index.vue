<template>
  <div>
    <snippet-svg
      class="menu-icon"
      style="position: fixed; top: 50%; right: 20px; font-size: 60px"
      @click="drawer = true"
      icon="#icon-bug"
    ></snippet-svg>

    <el-drawer
      title="I am the title"
      :visible.sync="drawer"
      :with-header="false"
    >
      <el-card class="box-card-aside" shadow="nerver" style="border: 0">
        <el-divider content-position="right">风格设置</el-divider>
        <el-card class="box-card-aside">
          sidebar 显示：<br />
          <el-switch
            v-model="value1"
            active-text="显示"
            inactive-text="隐藏"
            @change="closeSideBar"
          >
          </el-switch>
        </el-card>
        <el-divider content-position="right">维护信息</el-divider>
        <el-card class="box-card-aside">
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
          </el-timeline>
        </el-card>
      </el-card>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SnippetConfigTable',

  data () {
    return {
      drawer: false,
      green: '#0bbd87',
      blue: '#0000ff',
      value1: undefined
    }
  },

  created () {
    this.value1 = this.sidebarVisible
  },

  computed: {
    ...mapGetters(['sidebarVisible'])
  },

  methods: {
    click () {
      this.$emit('click')
    },
    closeSideBar () {
      this.$store.dispatch('app/closeSideBar')
    }
  }
}
</script>

<style scoped></style>
