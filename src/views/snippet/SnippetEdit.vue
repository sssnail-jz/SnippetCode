<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" class="form-container">
      <div class="createPost-main-container">
        <el-form-item prop="content" style="margin-bottom: 30px">
          <Tinymce ref="editor" v-model="postForm.content" :height="400" />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '../../components/Tinymce'

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
    Tinymce
  },
  props: {
    isNew: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      postForm: defaultForm
    }
  },
  computed: {
    contentShortLength () {
      return this.postForm.content_short.length
    }
  }
}
</script>

<style lang="scss" scoped>
.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea ::v-deep {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
