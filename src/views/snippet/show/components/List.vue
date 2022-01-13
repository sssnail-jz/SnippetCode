<template>
  <div>
    <!-- snippet-list card -->

    <el-card class="box-card-index" :key="item.id" v-for="item in snippetList">
      <div class="header">
        <mallki
          class-name="mallki-text"
          style="font-size: 25px"
          :text="item.title"
          @click="onGoToDetail(item._id)"
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
  name: 'SnippetList',
  components: {
    Mallki
  },
  data () {
    return {
      snippetList: [],
      prismTimer: undefined
    }
  },
  // 将 created 改为异步是为了配合 prism
  async created () {
    await this.fetchData()
    this.initPrism()
  },
  methods: {
    // 获取 snippet 列表
    async fetchData () {
      var that = this
      await snippetRequest
        .get('/snippet')
        .then((res) => {
          this.snippetList = res.data.data
          // console.log(this.snippetList)
        })
        .catch((error) => {
          console.log(error)
          that.$notify({
            content: '获取snippet列表失败!',
            type: 'error'
          })
        })
    },
    // 初始化高亮
    initPrism () {
      this.prismTimer = setInterval(() => {
        Prism.highlightAll()
        clearInterval(this.prismTimer)
        this.prismTimer = undefined
      }, 0)
    },
    // 跳转到文章详情
    onGoToDetail (itemId) {
      this.$router.push({
        name: 'snippet-detail',
        params: {
          snippetId: itemId
        }
      })
      console.log(itemId)
    }
  }
}
</script>

<style scoped>
.ul-content {
  margin: 0;
  list-style: none;
}

.box-card-index {
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  border-radius: 0;
}

.box-card-content {
  padding: 10px;
  margin-top: 10px;
  height: 480px;
  overflow: hidden;
  position: relative;
}
/*
  模型：440 + 10 + 10 + 20 + 20 = 480
*/
.content-container {
  height: 420px;
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
