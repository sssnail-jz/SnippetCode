<template>
  <div class="chart" />
</template>

<script>
import echarts from 'echarts' // echarts theme
import resize from './mixins/resize'
require('echarts/theme/dark')

export default {
  props: ['width', 'hight'],
  mixins: [resize],
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['C/C++', 'Web', 'Nest', 'Java', 'Desktop']
        },
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, this.hight],
            center: ['50%', '38%'],
            data: [
              { value: 150, name: 'C/C++' },
              { value: 240, name: 'Web' },
              { value: 149, name: 'Nest' },
              { value: 100, name: 'Java' },
              { value: 320, name: 'Desktop' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 3000,
            label: {
              show: true
            }
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
