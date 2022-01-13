<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">添加评论</el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      :append-to-body="true"
      title="添加评论内容"
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
        <el-button type="primary" @click="onAddComment"
          >Confirm</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'CommentDialog',
  data () {
    return {
      dialogVisible: false,
      dialogContent: ''
    }
  },
  methods: {
    onAddComment (event) {
      event.stopPropagation()
      this.dialogVisible = false
      this.$emit('addComment', this, this.dialogContent)
    }
  }
}
</script>
