<template>
  <div>
    <el-upload
      action="http://localhost:3000/upload"
      list-type="picture-card"
      :auto-upload="false"
      :limit="1"
      ref="upload"
      name="file"
      :data="dataObj"
      :on-change="handleChange"
      :headers="headers"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import auth from '@/utils/auth'

export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      dataObj: { uname: '', dir: 'cover' },
      headers: { Authorization: '' }
    }
  },
  created () {
    this.headers.Authorization = 'Bearer ' + auth.getToken()
  },
  methods: {
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleChange (file) {
      this.dataObj.uname = file.uid + '-' + file.name
      this.$emit('uname', this.dataObj.uname)
    }
  }
}
</script>
