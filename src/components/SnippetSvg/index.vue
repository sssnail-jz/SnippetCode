<template>
  <svg class="icon" aria-hidden="true" @click="click">
    <use :href="icon"></use>
  </svg>
</template>

<script>
export default {
  name: 'SnippetSvg',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
