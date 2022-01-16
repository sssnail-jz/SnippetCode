<template>
  <div class="comments-item">
    <div class="pull-left">
      <img
        class="avatar-32"
        :src="avatar"
        alt=""
        v-if="avatar"
        @click="handleClickAvatar"
      />
    </div>
    <div class="comments-box">
      <div class="comments-trigger">
        <!-- 右侧工具栏 -->
        <div v-if="tools" class="pull-right comments-option">
          <a
            href="javascript:void(0)"
            class="ml10"
            data-placement="top"
            :title="item.title"
            v-for="item in tools"
            :key="item.name"
            @click="handleClickTool($event, item)"
          >
            <i :class="item.icon" v-if="item.icon"></i>
            <span v-if="item.text">{{ item.text }}</span>
          </a>
        </div>
        <!-- 作者 -->
        <strong
          ><a
            target="_blank"
            href="javascript:void(0)"
            @click="handleClickAuthor"
            >{{ author }}</a
          ></strong
        >
        <!-- 时间 -->
        <span class="comments-date"> · {{ time }}</span>
      </div>
      <div class="comments-content">
        <p>{{ content }}</p>
      </div>
      <p class="comments-ops">
        <span class="ml15">回复</span>
        <!-- 选项 -->
        <template v-for="item in ops">
          <span class="coments-ops-item ml15" v-if="item.name" :key="item.name">
            <i :class="item.icon + ' coments-ops-icon'" v-if="item.icon"></i>
            <span class="coments-ops-text">{{ item.name }}</span>
          </span>
        </template>
      </p>
      <div class="reply-list" v-show="hasReply">
        <slot></slot>
      </div>
      <div class="reply-item reply-item--ops">
        <a
          class="reply-inner-btn"
          href="javascript:void(0);"
          @click="dialogVisible = true"
          >添加回复</a
        >
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      :append-to-body="true"
      title="内容"
      width="50%"
      top="20%"
    >
      <el-input
        v-model="dialogContent"
        :autosize="{ minRows: 4, maxRows: 6 }"
        type="textarea"
        placeholder="Please input"
        style="margin-bottom: 20px"
      >
      </el-input>
      <div>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onContentReady">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'CommentsItem',
  props: {
    avatar: String,
    author: String,
    content: String,
    time: [String, Number],
    hasReply: Boolean
  },
  data () {
    return {
      dialogVisible: false,
      dialogContent: '',
      ops: [{ name: '隐藏' }],
      tools: [{ name: '举报', title: '举报', text: '举报' }]
    }
  },
  created () {},
  methods: {
    handleClickAvatar (event) {
      event.stopPropagation()
      this.$emit('clickAvatar', this)
    },
    handleClickTool (event, tool) {
      event.stopPropagation()
      this.$emit('clickTool', this, tool)
    },
    handleClickAuthor (event) {
      event.stopPropagation()
      this.$emit('clickAuthor', this)
    },
    onContentReady (event) {
      event.stopPropagation()
      this.dialogVisible = false
      this.$emit('contentReady', this, this.dialogContent)
    }
  }
}
</script>

<style scoped>
img {
  border: 0;
  vertical-align: middle;
}
.ml10 {
  margin-left: 10px !important;
  font-size: 14px;
}
.ml15 {
  margin-left: 15px !important;
}
.comments-item {
  padding: 15px 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  font-size: 14px;
}
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}
.avatar-32 {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.comments-item a {
  color: #009a61;
  text-decoration: none;
  background: transparent;
  font-size: 16px;
}
.comments-item a:hover,
.comments-item a:active,
.comments-item a:focus {
  outline: 0;
}
.comments-box {
  padding-left: 47px;
}
.comments-box strong {
  font-weight: bold;
}
.comments-trigger {
  margin-bottom: 10px;
  color: #999;
  font-size: 13px;
}
.comments-option {
  /*visibility: hidden;*/
}
.comments-content {
  line-height: 1.6;
  word-wrap: break-word;
  margin-bottom: 10px !important;
}
.comments-content::before,
.comments-content::after {
  display: table;
}
.comments-content::after {
  content: '';
  clear: both;
}
.comments-ops {
  margin: 0;
  color: #999;
  font-size: 13px;
}
.comments-reply-btn {
  cursor: pointer;
}
.reply-list {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 13px;
  background-color: #fafafa;
  padding: 0 10px;
  color: #666;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
.reply-item--ops {
  border-bottom: none;
}
.reply-item {
  padding-bottom: 10px;
  padding-top: 10px;
  word-break: break-word;
}
.reply-inner-btn {
  margin-left: 12px;
}
</style>
