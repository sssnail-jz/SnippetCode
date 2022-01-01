<template>
  <el-card class="box-card-aside">
    <el-form ref="postForm">
      <sticky style="z-index: 100; position: fixed; top: 70px; right: 25px">
        <el-link class="pan-btn green-btn">提交</el-link>
        <el-link class="pan-btn yellow-btn">草稿</el-link>
      </sticky>
      <el-form-item prop="title">
        <md-input icon="el-icon-search" name="title" placeholder="输入标题">
          标题
        </md-input>
      </el-form-item>
      <el-form-item prop="content" style="margin-bottom: 30px">
        <Tinymce :height="400" />
      </el-form-item>
      <el-form-item>
        <span>类型：</span>
        <el-select v-model="value1" multiple placeholder="可多选">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
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
import Sticky from '@/components/Sticky' // 粘性header组件

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
    Sticky
  },
  data () {
    return {
      postForm: defaultForm,
      value1: [],
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
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
  padding: 40px;
}
.el-link {
  margin-left: 10px;
}
.el-form-item span {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 16px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
