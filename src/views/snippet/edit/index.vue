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
          v-model="postForm.title"
        >
          标题
        </md-input>
      </el-form-item>
      <el-form-item prop="content" style="margin-bottom: 30px">
        <Tinymce :height="400" v-model="postForm.content" />
      </el-form-item>
      <el-form-item>
        <span class="span-label">类型：</span>
        <el-drag-select
          v-model="postForm.tags"
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
          <el-tag
            v-for="item of postForm.tags"
            :key="item"
            style="margin-right: 15px"
          >
            {{ item }}
          </el-tag>
        </div>
      </el-form-item>
      <el-form-item>
        <snippet-upload ref="upload" @uname="onUname"></snippet-upload>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="onCreateSnippet">提交</el-button>
  </el-card>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import MdInput from '@/components/MDinput'
import SnippetUpload from '@/components/SnippetUpload'
import ElDragSelect from '@/components/DragSelect'
import snippetService from '@/api/snippet'

const defaultForm = {
  title: '',
  content: '',
  cover: '',
  tags: ['Apple', 'Banana', 'Orange']
}

export default {
  name: 'ArticleEdit',
  components: {
    Tinymce,
    MdInput,
    SnippetUpload,
    ElDragSelect
  },
  data () {
    return {
      // form 表单提交模型
      postForm: defaultForm,
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
  },
  methods: {
    onCreateSnippet () {
      // 上传 snippet 封面
      this.$refs.upload.$refs.upload.submit()

      // 上传 snippet body
      snippetService.createSnippet(this.postForm).then((response) => {
        this.$notify({
          content: '创建成功！',
          type: 'success'
        })

        const snippetId = response.data._id
        this.$router.push({
          name: 'snippet-detail',
          params: {
            snippetId: snippetId
          }
        })
      })
    },

    /**
     * 文件上传组件在选择文件之后会构造文件名为 uuid + filename，
     * 服务端将以 uname 保存文件，这里保持 snippet-cover 与 uname 一致
     */
    onUname (uname) {
      this.postForm.cover = uname
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
