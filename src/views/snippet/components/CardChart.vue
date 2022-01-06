<template>
  <!-- pie chart -->
  <el-card class="box-card-aside" shadow="nerver" style="border: 0">
    <el-divider content-position="right">统计</el-divider>
    <div class="text item" style="height: 300px">
      <pie-chart :hight="85" />
    </div>
  </el-card>
</template>

<script>
import PieChart from '@/components/Charts/PieChart.vue'

export default {
  name: 'SnippetUserList',
  components: {
    PieChart
  }
}
</script>

<style scoped>
.box-card-aside {
  margin-bottom: 10px;
  width: 100%;
}
.el-link-content-header {
  padding-left: 5px;
  padding-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
}
.el-card__body {
  padding: 0 !important;
}
</style>
