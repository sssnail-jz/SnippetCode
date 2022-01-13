<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">添加评论</el-button>
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
  name: 'ContentDialog',
  data () {
    return {
      dialogVisible: false,
      dialogContent: ''
    }
  },
  methods: {
    onContentReady (event) {
      event.stopPropagation()
      this.dialogVisible = false
      this.$emit('contentReady', this, this.dialogContent)
    }
  }
}
</script>
