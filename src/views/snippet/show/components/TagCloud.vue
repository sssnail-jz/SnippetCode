<template>
  <!-- tag cloud -->
  <el-card class="box-card-aside" shadow="nerver" style="border: 0">
    <el-divider content-position="right">标签云</el-divider>
    <div class="text item">
      <el-link
        :key="item.title"
        v-for="item in tagList"
        style="
          margin-right: 10px;
          margin-bottom: 10px;
          padding: 8px 10px;
          color: black;
        "
        class="pan-btn"
        :class="tagColorList[Math.floor(Math.random() * tagColorList.length)]"
      >
        {{ item.name }}
        ( {{ Math.floor(Math.random() * 20) + 1 }} )
      </el-link>
    </div>
  </el-card>
</template>

<script>
import tagService from '@/api/tag'

export default {
  name: 'SnippetTagCloudList',

  data () {
    return {
      tagList: undefined,
      tagColorList: ['pink-btn', 'yellow-btn', 'green-btn']
    }
  },
  async created () {
    await this.getTags()
  },
  methods: {
    async getTags () {
      await tagService.fetchList().then((response) => {
        this.tagList = response.data.data
      })
    }
  }
}
</script>

<style scoped>
.box-card-aside {
  margin-bottom: 10px;
  width: 100%;
}
.el-link-content-header {
  padding-left: 5px;
  padding-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
