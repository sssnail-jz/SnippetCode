<template>
  <!-- pie chart -->

  <el-card class="box-card-aside" shadow="nerver" style="border: 0; padding: 0">
    <el-divider content-position="right">统计</el-divider>

    <el-card class="box-card-aside" style="border-radius: 0; padding: 0">
      <div class="text item" style="height: 350px">
        <raddar-chart />
      </div>
    </el-card>
  </el-card>
</template>

<script>
import RaddarChart from '@/components/Charts/RaddarChart'

export default {
  name: 'SnippetUserList',
  components: {
    RaddarChart
  }
}
</script>

<style scoped>
.box-card-aside {
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
}
.el-card__body {
  padding: 0 !important;
}
</style>
