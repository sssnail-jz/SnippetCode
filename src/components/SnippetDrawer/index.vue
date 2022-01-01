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
  </div>
</template>

<script>
export default {
  name: 'SnippetDrawer',
  data () {
    return {
      drawer: false,
      green: '#0bbd87',
      blue: '#0000ff'
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
/*  */
.el-timeline {
  padding: 20px;
}
</style>
