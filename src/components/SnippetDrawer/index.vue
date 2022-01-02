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
      <el-card class="box-card-aside" shadow="nerver" style="border: 0">
        <el-divider content-position="right">风格设置</el-divider>
        <el-card class="box-card-aside">
          snippet 展示：<br />
          <el-switch
            v-model="value1"
            active-text="卡片"
            inactive-text="表格"
          >
          </el-switch
          ><br /><br />
          snippet 高亮：<br />
          <el-switch
            v-model="value2"
            active-text="明亮"
            inactive-text="黑暗"
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
        </el-card>
      </el-card>
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
      blue: '#0000ff',
      value1: true,
      value2: true
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped></style>
