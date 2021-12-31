<template>
  <div class="calculate-container">
    <el-row>
      <el-col :span="12">
        <pie-chart style="height: 500px; margin-top: 50px" :hight="170" />
      </el-col>
      <el-col :span="12">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PieChart from '../../components/Charts/PieChart.vue'

export default {
  components: {
    PieChart
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.calculate-container {
  background-color: #344b58;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.el-row {
  width: 100%;
  height: 100%;
}
/*  */
.el-timeline {
  padding: 20px;
}
</style>
