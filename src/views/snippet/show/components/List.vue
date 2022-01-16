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
            item.author.name
          }}</el-link>
        </el-divider>
      </div>

      <el-card class="box-card-content line-numbers">
        <div v-if="coverVisible">
          <img style="height: 120px" :src="onCover(item.cover)" alt="" />
        </div>
        <div class="content-container" v-html="item.content"></div>
        <!-- <div class="more-div"></div> -->
      </el-card>
    </el-card>
  </div>
</template>

<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
import Prism from '@/assets/hightlight/prism.js'
import snippetServer from '@/api/snippet'
import { mapGetters } from 'vuex'

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

  computed: {
    ...mapGetters(['coverVisible'])
  },

  async created () {
    await this.gethList()
    this.initPrism()
  },

  methods: {
    // 获取 snippet 列表
    async gethList () {
      await snippetServer.fetchList().then((response) => {
        this.snippetList = response.data.data
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
    },

    // 获取文章封面
    onCover (uname) {
      return 'http://localhost:3000/upload/cover/' + uname
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
  margin-top: 10px;
  height: 380px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 20%) !important;
}

/*
  模型：200 + 10 + 10 + 20 + 20 + 120 = 380
*/
.content-container {
  height: 100%;
  /* height: 200px; */
  overflow: hidden;
}

.more-div {
  width: 100%;
  height: 5px;
  background-color: black;
  position: absolute;
  bottom: 0px;
  left: 0px;

  background: linear-gradient(rgb(250, 250, 250), rgb(200, 200, 200));
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

.img-cover {
  width: 200px;
  height: 150px;
}
</style>
