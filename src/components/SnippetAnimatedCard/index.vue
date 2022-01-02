<template>
  <div class="wraper" @mousemove="Mousemove" @mouseleave="MouseLeave">
    <div ref="inner"><slot /></div>
  </div>
</template>

<script>
export default {
  name: 'SnippetAnimatedCard',
  props: {
    scale: {
      type: Number,
      required: false,
      default: 0.00015
    }
  },
  methods: {
    cumulativeOffset (element) {
      var top = 0
      var left = 0
      do {
        top += element.offsetTop || 0
        left += element.offsetLeft || 0
        element = element.offsetParent
      } while (element)
      // console.log('top:' + top)
      // console.log('left:' + left)
      return {
        top: top,
        left: left
      }
    },
    generateTranslate (elInner, el, value) {
      elInner.style.transform =
        'translate(' + el.clientX * value + 'px, ' + el.clientY * value + 'px)'
    },
    Mousemove (e) {
      var el = e.currentTarget
      console.log('e.pageX: ' + e.pageX)
      console.log('e.pageY: ' + e.pageY)
      var x = ((e.pageX - this.cumulativeOffset(el).left - 350 / 2) * -1) / 100
      var y = ((e.pageY - this.cumulativeOffset(el).top - 350 / 2) * -1) / 100

      var matrix = [
        [1, 0, 0, -x * this.scale],
        [0, 1, 0, -y * this.scale],
        [0, 0, 1, 1],
        [0, 0, 0, 1]
      ]
      // inner el animation
      // var elInner = this.$refs.inner
      // this.generateTranslate(elInner, el, 0.05)

      el.style.transform = 'matrix3d(' + matrix.toString() + ')'
    },
    MouseLeave (e) {
      e.currentTarget.style.transform = 'none'
    }
  }
}
</script>

<style scoped>
.wraper {
  padding: 0;
  margin: 0;
  transition: all 0.1s ease;
}
</style>
