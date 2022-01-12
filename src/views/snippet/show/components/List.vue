<template>
  <div>
    <!-- snippet-list card -->

    <el-card class="box-card-index" :key="item.id" v-for="item in snippetList">
      <div class="header">
        <mallki
          class-name="mallki-text"
          style="font-size: 25px"
          :text="item.title"
        />
        <el-divider content-position="left" class="hidden-sm-and-down">
          <snippet-svg icon="#icon-riqi"></snippet-svg>
          <el-link class="pan-btn el-link-content-header">{{
            item.publishDate
          }}</el-link>

          <snippet-svg icon="#icon-yonghu"></snippet-svg>
          <el-link class="pan-btn el-link-content-header">{{
            item.author
          }}</el-link>
        </el-divider>
      </div>

      <el-card class="box-card-content line-numbers">
        <div class="content-container" v-html="item.content"></div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
import Prism from '@/assets/hightlight/prism.js'
import snippetRequest from '@/utils/snippetRequest'

export default {
  name: 'SnippetContent',
  components: {
    Mallki
  },
  data () {
    return {
      snippetList: [],
      hightLightTimmer: undefined
    }
  },
  computed: {},
  created () {
    var that = this
    snippetRequest
      .get('/snippet')
      .then((res) => {
        var list = res.data
        this.snippetList = list.data
      })
      .catch((error) => {
        console.log(error)
        that.$notify({
          content: '获取snippet列表失败!',
          type: 'error'
        })
      })
    this.hightLightTimmer = setInterval(() => {
      Prism.highlightAll()
      clearInterval(this.hightLightTimmer)
      this.hightLightTimmer = undefined
    }, 0)
  }
}
</script>

<style scoped>
/*  */
.ul-content {
  margin: 0;
  list-style: none;
}

/*  */
.box-card-index {
  width: 100%;
  /* height: 600px; */
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  border-radius: 0;
}
/*  */
.box-card-content {
  padding: 0;
  margin-top: 10px;
  height: 480px;
  overflow: hidden;
  position: relative;
}
.content-container {
  height: 440px;
  overflow: hidden;
}

.el-link-content-header {
  padding-left: 5px;
  padding-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
}

.el-divider--horizontal {
  height: 2px;
}
</style>
