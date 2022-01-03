<template>
  <el-row class="row-bg">
    <el-col :xs="0" :md="1" :lg="1" :xl="1"
      ><div class="grid-content"></div
    ></el-col>
    <el-col :xs="23" :md="16" :lg="16" :xl="16" class="col-content">
      <!-- content 列表组件 -->
      <el-card class="el-card-snippet-content" shadow="nerver">
        <el-divider> </el-divider>
        <pre class="language-scss"><code>
          {{ content }}
        </code></pre>
        <el-divider> </el-divider>
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
      <card-user-profile class="el-card-snippet-aside"></card-user-profile>
    </el-col>
    <el-col :xs="0" :md="1" :lg="1" :xl="1"
      ><div class="grid-content"></div
    ></el-col>
  </el-row>
</template>

<script>
import Prism from '@/assets/hightlight/prism.js'
import CardUserProfile from './components/CardUserProfile.vue'

export default {
  components: {
    CardUserProfile
  },
  data () {
    return {
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
      ],
      content: `// base color
                $blue:#324157;
                $light-blue:#3A71A8;
                $red:#C03539;
                $pink: #E55D5E;
                $green: #30B08F;
                $tiffany: #4AB7BD;
                $yellow:#FEC171;
                $panGreen: #30B08F;

                // sidebar
                $menuText:#bfcbd9;
                $menuActiveText:#409EFF;
                $subMenuActiveText:#f4f4f5;
                
                :export {
                  menuText: $menuText;
                  menuActiveText: $menuActiveText;
                  subMenuActiveText: $subMenuActiveText;
                  menuBg: $menuBg;
                  menuHover: $menuHover;
                  subMenuBg: $subMenuBg;
                  subMenuHover: $subMenuHover;
                  sideBarWidth: $sideBarWidth;
                }
                `
    }
  },
  mounted () {
    setInterval(() => {
      Prism.highlightAll()
    }, 0)
  },
  methods: {
    handleAddReply (comment) {
      this.replys[comment.id].push(comment)
    }
  }
}
</script>

<style scoped>
/*  */
.el-row {
  height: 100%;
  width: 100%;
  margin-top: 20px;
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
  box-shadow: none;
  background: none;
}
</style>
