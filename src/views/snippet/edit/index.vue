<template>
  <el-card class="box-card-aside" style="border-radius: 0">
    <el-alert
      title="Notice"
      type="warning"
      effect="dark"
      show-icon
      description="The content should be as short as possible, preferably no more than one page, which is the original intention of snippet"
    >
    </el-alert>
    <el-form ref="postForm">
      <el-form-item prop="title">
        <md-input
          icon="el-icon-search"
          name="title"
          placeholder="输入标题"
          style="margin-top: 60px; margin-bottom: 20px"
        >
          标题
        </md-input>
      </el-form-item>
      <el-form-item prop="content" style="margin-bottom: 30px">
        <Tinymce :height="400" />
      </el-form-item>
      <el-form-item>
        <span class="span-label">类型：</span>
        <el-drag-select
          v-model="value"
          style="width: 500px"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-drag-select>

        <div style="margin-top: 30px; margin-left: 70px">
          <el-tag v-for="item of value" :key="item" style="margin-right: 15px">
            {{ item }}
          </el-tag>
        </div>
      </el-form-item>
      <el-form-item>
        <Upload />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import MdInput from '@/components/MDinput'
import Upload from '@/components/Upload/SingleImage3'
import ElDragSelect from '@/components/DragSelect'

const defaultForm = {
  title: '',
  content: '',
  cover: '',
  publishDate: undefined,
  commentDisabled: false
}

export default {
  name: 'ArticleEdit',
  components: {
    Tinymce,
    MdInput,
    Upload,
    ElDragSelect
  },
  data () {
    return {
      postForm: defaultForm,
      value: ['Apple', 'Banana', 'Orange'],
      options: [
        {
          value: 'Apple',
          label: 'Apple'
        },
        {
          value: 'Banana',
          label: 'Banana'
        },
        {
          value: 'Orange',
          label: 'Orange'
        },
        {
          value: 'Pear',
          label: 'Pear'
        },
        {
          value: 'Strawberry',
          label: 'Strawberry'
        }
      ]
    }
  },
  computed: {
    contentShortLength () {
      return this.postForm.content_short.length
    }
  }
}
</script>

<style lang="css" scoped>
.el-card {
  margin: 40px;
  padding: 20px;
}
.el-link {
  margin-left: 10px;
}
.span-label {
  width: 70px;
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  font-size: 16px;
  color: #606266;
  line-height: 40px;
}
</style>
