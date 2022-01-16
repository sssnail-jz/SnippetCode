<template>
  <div class="chart" />
</template>

<script>
import echarts from 'echarts' // echarts theme
import resize from './mixins/resize'
import tagService from '@/api/tag'
require('echarts/theme/dark')

export default {
  props: ['width', 'hight'],
  mixins: [resize],
  data () {
    return {
      chart: null,
      chartData: []
    }
  },

  async mounted () {
    await this.getTags()
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
          bottom: '10'
        },
        series: [
          {
            name: 'snippet tags',
            type: 'pie',
            roseType: 'radius',
            radius: [15, this.hight],
            center: ['50%', '38%'],
            data: this.chartData,
            animationEasing: 'cubicInOut',
            animationDuration: 3000,
            label: {
              show: true
            }
          }
        ]
      })
    },
    async getTags () {
      await tagService.fetchList().then((response) => {
        var result = response.data.data
        for (var i = 0; i < result.length; i++) {
          var el = { name: '', value: 0 }
          el.name = result[i].name
          el.value = Math.floor(Math.random() * 20) + 1
          this.chartData.push(el)
        }
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
