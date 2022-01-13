<template>
  <el-row class="row-bg">
    <el-col :xs="0" :md="1" :lg="1" :xl="1"
      ><div class="grid-content"></div
    ></el-col>
    <el-col :xs="23" :md="16" :lg="16" :xl="16" class="col-content">
      <!-- content 列表组件 -->
      <el-card
        class="el-card-snippet-content"
        shadow="never"
        style="border-radius: 0; background: none"
      >
        <el-card>
          <div class="title">{{ snippetDetail.title }}</div>
          <el-divider></el-divider>
          <div v-html="snippetDetail.content"></div>
        </el-card>
        <el-divider content-position="left" style="background: none">
          评论
        </el-divider>
        <comments-item
          v-for="comment in comments"
          :key="comment.id"
          :avatar="comment.headimg"
          :author="comment.author"
          :content="comment.content"
          :time="comment.createTime"
          :hasReply="replys[comment.id] && replys[comment.id].length > 0"
          @clickAvatar="handleClickAvatar(comment)"
          @clickAuthor="handleClickAuthor(comment)"
          @addReply="handleAddReply(comment)"
        >
          <reply-item
            v-for="reply in replys[comment.id]"
            :key="reply.id"
            :author="reply.author"
            :content="reply.content"
            :time="reply.createTime"
          >
          </reply-item>
        </comments-item>
      </el-card>
    </el-col>
    <!-- aside -->
    <el-col :xs="0" :md="5" :lg="5" :xl="5" class="col-aside">
      <user-profile class="el-card-snippet-aside hidden-sm-and-down" />
    </el-col>
    <el-col :xs="0" :md="1" :lg="1" :xl="1"
      ><div class="grid-content"></div
    ></el-col>
  </el-row>
</template>

<script>
import Prism from '@/assets/hightlight/prism.js'
import UserProfile from './components/UserProfile.vue'
import snippetRequest from '@/utils/snippetRequest'

export default {
  /**
   * snippetId：路由 params 参数
   */
  props: ['snippetId'],
  components: {
    UserProfile
  },
  data () {
    return {
      prismTimer: undefined,
      snippetDetail: undefined,
      comments: [
        {
          id: 0,
          avatar: null,
          author: 'jack',
          content: 'contenttt',
          createTime: 12345
        }
      ],
      replys: [
        [
          {
            id: 100,
            avator: null,
            author: 'hai',
            content: 'haiii',
            createTime: 123456
          }
        ]
      ]
    }
  },
  async created () {
    await this.fetchData()
    this.initPrism()
  },
  methods: {
    handleAddReply (comment) {
      this.replys[comment.id].push(comment)
    },
    // 初始化高亮
    initPrism () {
      this.prismTimer = setInterval(() => {
        Prism.highlightAll()
        clearInterval(this.prismTimer)
        this.prismTimer = undefined
      }, 0)
    },
    // 获取 id 对应的数据
    async fetchData () {
      var that = this
      await snippetRequest
        .get('/snippet/' + this.snippetId)
        .then((res) => {
          this.snippetDetail = res.data.data
          // console.log(this.snippetDetail)
        })
        .catch((error) => {
          console.log(error)
          that.$notify({
            content: '获取snippet Detail 失败!',
            type: 'error'
          })
        })
    }
  }
}
</script>

<style scoped>
/*  */
.el-row {
  height: 100%;
  width: 100%;
  padding-top: 20px;
}

.el-col {
  padding-bottom: 20px;
}
.col-content,
.col-aside {
  margin-left: 10px;
  margin-right: 10px;
}

.el-card-snippet-content,
.el-card-snippet-aside {
  margin-bottom: 5px;
}

.el-divider__text,
.el-link {
  font-weight: 800;
  font-size: 20px;
}
.el-divider__text {
  position: absolute;
  background-color: #f0f0f5;
  padding: 0 20px;
  color: #303133;
}
.title {
  font-weight: 800;
  font-size: 25px;
  color: black;
  font-family: 'Dosis', sans-serif;
}
</style>
