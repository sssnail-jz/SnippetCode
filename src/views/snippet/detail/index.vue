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
        <el-card v-if="snippetDetail">
          <div class="title">{{ snippetDetail.title }}</div>
          <el-divider></el-divider>
          <div class="line-numbers" v-html="snippetDetail.content"></div>
        </el-card>

        <div v-if="comments">
          <el-divider content-position="left" style="background: none">
            评论
          </el-divider>
          <comments-item
            v-for="comment in comments"
            :key="comment._id"
            :author="comment.author.name"
            :content="comment.content"
            :time="comment.createdDate"
            :hasReply="hasReplys(comment)"
            @clickAvatar="handleClickAvatar(comment)"
            @clickAuthor="handleClickAuthor(comment)"
            @contentReady="handleAddReply(comment, ...arguments)"
          >
            <reply-item
              v-for="reply in comment.replys"
              :key="reply._id"
              :author="reply.author.name"
              :content="reply.content"
              :time="reply.createdDate"
            >
            </reply-item>
          </comments-item>
          <content-dialog
            @contentReady="handleAddComment"
            style="margin-left: 40px"
          ></content-dialog>
        </div>
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
import ContentDialog from '@/components/SnippetContentDialog'

export default {
  /**
   * snippetId：路由 params 参数
   */
  props: ['snippetId'],
  components: {
    UserProfile,
    ContentDialog
  },
  data () {
    return {
      prismTimer: undefined,
      snippetDetail: undefined,
      comments: undefined
    }
  },
  async created () {
    await this.fetchData()
    await this.fetchCommentData()
    this.initPrism()
  },
  methods: {
    // 添加回复，这里的参数集合了 子组件 emit 的参数和父组件自己的参数
    // 第一个参数为父组件自己的，后面的为子组件的
    async handleAddReply (...arg) {
      console.log(arg)
      var that = this
      await snippetRequest
        .post(`/reply/${arg[0]._id}`, {
          content: arg[2]
        })
        .then((res) => {
          that.$notify({
            content: '添加回复成功',
            type: 'success'
          })
          // 添加回复成功，更新评论数据
          that.fetchCommentData()
        })
        .catch((error) => {
          const err = JSON.parse(error.request.responseText)
          that.$notify({
            content: err.msg,
            type: 'error'
          })
        })
    },

    // 添加评论
    async handleAddComment (event, content) {
      var that = this
      await snippetRequest
        .post(`/comment/${this.snippetDetail._id}`, {
          content: content
        })
        .then((res) => {
          that.$notify({
            content: '添加评论成功',
            type: 'success'
          })
          // 添加评论成功，更新评论数据
          that.fetchCommentData()
        })
        .catch((error) => {
          const err = JSON.parse(error.request.responseText)
          that.$notify({
            content: err.msg,
            type: 'error'
          })
        })
    },

    // 判断是否存在回复
    hasReplys (comment) {
      return comment.replys.length > 0
    },

    handleClose () {},

    // 初始化高亮
    initPrism () {
      this.prismTimer = setInterval(() => {
        Prism.highlightAll()
        clearInterval(this.prismTimer)
        this.prismTimer = undefined
      }, 0)
    },

    // 通过 snippet id 获取 snippet 信息
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
    },

    // 通过 snippet id 获取此 snippet 对应的评论
    async fetchCommentData () {
      var that = this
      await snippetRequest
        .get('/comment/' + this.snippetId)
        .then((res) => {
          this.comments = res.data.data
          console.log(this.comments)
        })
        .catch((error) => {
          console.log(error)
          that.$notify({
            content: '获取评论列表失败!',
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
