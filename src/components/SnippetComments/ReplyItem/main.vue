<template>
  <div class="reply-item">
    <div class="reply-content-block">
      <div class="reply-content">
        <p>{{ content }}</p>
      </div>
      <div class="comment-func inline-block">
        <span class="pull-right comment-tools ml15">
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
        </span>
        <span class="comment-meta inline-block">
          <span> — </span>
          <img
            class="avatar-30"
            :src="avatar"
            alt=""
            v-if="avatar"
            @click="handleClickAvatar"
          />
          <a
            target="_blank"
            href="javascript:void(0)"
            @click="handleClickAuthor($event)"
            >{{ author }}</a
          >
          <span class="comments-date"> · {{ time }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReplyItem',
  props: {
    author: String,
    avatar: String,
    content: String,
    tools: Array,
    time: [String, Number]
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    handleClickTool (event, tool) {
      event.stopPropagation()
      this.$emit('clickTool', this, tool)
    },
    handleClickAuthor (event) {
      event.stopPropagation()
      this.$emit('clickAuthor', this)
    },
    handleClickAvatar (event) {
      event.stopPropagation()
      this.$emit('clickAvatar', this)
    }
  }
}
</script>

<style scoped>
.ml10 {
  margin-left: 10px !important;
}
.ml15 {
  margin-left: 15px !important;
}
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}
.reply-item {
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.09);
  word-break: break-word;
}
.reply-item a {
  color: #009a61;
  text-decoration: none;
  background: transparent;
}
.reply-item a:hover,
.reply-item a:active,
.reply-item a:focus {
  outline: 0;
}
.reply-item p {
  margin-bottom: 5px;
}
.comment-tools {
  /*visibility: hidden;*/
}
.comment-meta {
  color: #999;
}
.inline-block {
  display: inline-block;
}
.avatar-30 {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-bottom: -10px;
  margin-right: 5px;
  margin-left: 5px;
}
</style>
