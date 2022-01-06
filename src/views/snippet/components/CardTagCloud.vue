<template>
  <!-- tag cloud -->
  <el-card class="box-card-aside" shadow="nerver" style="border: 0">
    <el-divider content-position="right">标签云</el-divider>
      <div class="text item">
        <el-link
          :key="item.title"
          v-for="item in snippetTagCloudList"
          style="margin-right: 10px; margin-bottom: 10px; padding: 8px 10px; color:black"
          class="pan-btn"
          :class="item.color"
        >
          {{ item.title }}
        </el-link>
      </div>
  </el-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SnippetUserList',

  data () {
    return {
      snippetTagCloudList: []
    }
  },
  created () {
    axios
      .get('/snippet/snippet-tag-cloud')
      .then((res) => {
        this.snippetTagCloudList = res.data
      })
      .catch((err) => {
        console.error(err)
      })
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
