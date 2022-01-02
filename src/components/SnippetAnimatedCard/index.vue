<template>
  <div class="wraper" @mousemove="cardMousemove" @mouseleave="cardMouseLeave">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SnippetAnimatedCard',
  methods: {
    cumulativeOffset (element) {
      var top = 0
      var left = 0
      do {
        top += element.offsetTop || 0
        left += element.offsetLeft || 0
        element = element.offsetParent
      } while (element)
      return {
        top: top,
        left: left
      }
    },
    cardMousemove (e) {
      var el = e.currentTarget
      var x = ((e.pageX - this.cumulativeOffset(el).left - 350 / 2) * -1) / 100
      var y = ((e.pageY - this.cumulativeOffset(el).top - 350 / 2) * -1) / 100
      console.log('x:' + x)
      console.log('y:' + y)
      var matrix = [
        [1, 0, 0, -x * 0.00015],
        [0, 1, 0, -y * 0.00015],
        [0, 0, 1, 1],
        [0, 0, 0, 1]
      ]

      // generateTranslate($year, e, 0.03)
      // generateTranslate($cardComet, e, 0.05)

      el.style.transform = 'matrix3d(' + matrix.toString() + ')'
    },
    cardMouseLeave (e) {
      e.currentTarget.style.transform = 'none'
    }
  }
}
</script>

<style scoped>
.wraper {
  padding: 0;
  margin: 0;
  transition: all 0.2s ease;
}
</style>
