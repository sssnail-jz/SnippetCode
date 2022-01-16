<template>
  <el-row class="row-bg">
    <el-col :xs="0" :md="1" :lg="1" :xl="1"
      ><div class="grid-content"></div
    ></el-col>
    <el-col :xs="23" :md="15" :lg="15" :xl="15" class="col-content">
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
            :avatar="onAvatar(comment.author.avatar)"
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
              :avatar="onAvatar(reply.author.avatar)"
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
    <el-col :xs="0" :md="6" :lg="6" :xl="6" class="col-aside">
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
import ContentDialog from '@/components/SnippetContentDialog'
import snippetService from '@/api/snippet'
import commentService from '@/api/comment'
import replyService from '@/api/reply'

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
    await this.getDetail()
    await this.getCommentLis()
    this.initPrism()
  },
  methods: {
    // 添加回复，这里的参数集合了 子组件 emit 的参数和父组件自己的参数
    // 第一个参数为父组件自己的，后面的为子组件的
    handleAddReply (...arg) {
      var that = this
      replyService.createReply(arg[0]._id, { content: arg[2] }).then((res) => {
        that.$notify({
          content: '添加回复成功',
          type: 'success'
        })

        // 添加回复成功，更新评论数据
        this.getCommentLis()
      })
    },

    // 添加评论
    async handleAddComment (event, content) {
      var that = this
      await commentService
        .createComment(this.snippetDetail._id, { content: content })
        .then((response) => {
          that.$notify({
            content: '添加评论成功',
            type: 'success'
          })

          // 添加评论成功，更新评论数据
          this.getCommentLis()
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

    // 拉取 snippet 详情
    async getDetail () {
      await snippetService.fetchDetail(this.snippetId).then((response) => {
        this.snippetDetail = response.data.data
      })
    },

    // 拉取评论列表
    async getCommentLis () {
      await commentService.fetchList(this.snippetId).then((response) => {
        this.comments = response.data.data
      })
    },

    onAvatar (uname) {
      return 'http://localhost:3000/upload/avatar/' + uname
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
