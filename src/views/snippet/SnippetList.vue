<template>
  <!--
  关于响应式：
  1，:sm 好像有问题，:sm 会影响 :lg?
  2，middle的时候只隐藏chart
  3，small、xsmall 会隐藏右侧只留左侧
  -->
  <el-row class="row-bg">
    <el-col :xs="0" :md="1" :lg="1" :xl="1"
      ><div class="grid-content"></div
    ></el-col>
    <el-col :xs="23" :md="15" :lg="15" :xl="15" class="col-content">
      <!-- content 列表组件 -->
      <card-content />
    </el-col>
    <!-- aside -->
    <el-col :xs="0" :md="6" :lg="6" :xl="6" class="col-aside">
      <!-- 图标统计组件 -->
      <card-chart class="hidden-md-and-down" />
      <!-- 用户列表组件 -->
      <card-user-list class="hidden-sm-and-down" />
      <!-- 标签云组件 -->
      <card-tag-cloud class="hidden-sm-and-down" />
    </el-col>
    <el-col :xs="0" :md="1" :lg="1" :xl="1"
      ><div class="grid-content"></div
    ></el-col>
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
  margin-top: 20px;
}
.el-col {
  padding-bottom: 20px;
}
.col-content,
.col-aside {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
