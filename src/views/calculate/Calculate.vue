<template>
  <div class="chart-container">
    <chart height="100%" width="100%" />
  </div>
</template>

<script>
import Chart from '../../components/Charts/MixChart'
export default {
  components: { Chart }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
