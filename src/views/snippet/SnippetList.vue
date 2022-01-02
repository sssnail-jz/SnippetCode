<template>
  <el-row class="row-bg" justify="center" :gutter="20">
    <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
    <el-col :span="14">
      <!-- snippet-list 列表组件 -->
      <card-content />
    </el-col>
    <el-col :span="6">
      <!-- 用户列表组件 -->
      <card-user-list />
      <!-- 标签云组件 -->
      <card-tag-cloud />
      <!-- 图标统计组件 -->
      <card-chart />
    </el-col>
    <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
  </el-row>
</template>

<script>
import CardContent from './components/CardContent.vue'
import CardUserList from './components/CardUserList.vue'
import CardTagCloud from './components/CardTagCloud.vue'
import CardChart from './components/CardChart.vue'
export default {
  components: {
    CardContent,
    CardUserList,
    CardTagCloud,
    CardChart
  }
}
</script>

<style scoped>
/*  */
.el-row {
  height: 100%;
  width: 100%;
  margin: 20px;
}
.el-col {
  border-radius: 4px;
  padding-bottom: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
