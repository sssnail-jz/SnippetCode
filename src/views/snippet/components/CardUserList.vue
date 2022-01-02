<template>
  <!-- user-list card -->

  <el-card class="box-card-aside" shadow="nerver" style="border: 0">
    <el-divider content-position="right">用户列表</el-divider>

    <el-card class="box-card-aside" style="border-radius: 0">
      <div class="text item">
        <ul>
          <li
            :key="item.id"
            v-for="item in userList"
            style="display: flex; align-items: center; margin-bottom: 10px"
          >
            <div>
              <el-link :underline="false">
                <pan-thumb
                  width="45px"
                  height="45px"
                  :image="item.avatar"
                  style="margin-right: 10px"
                >
                </pan-thumb>
              </el-link>

              <el-link class="pan-btn el-link-content-header">
                {{ item.name }}

                <snippet-svg
                  style="margin-right: 5px"
                  icon="#icon-pinglun"
                ></snippet-svg>
                {{ item.snippetCount }}</el-link
              >
            </div>
          </li>
        </ul>
      </div>
    </el-card>
  </el-card>
</template>

<script>
import axios from 'axios'
import PanThumb from '@/components/PanThumb'

export default {
  name: 'SnippetUserList',
  components: {
    PanThumb
  },
  data () {
    return {
      userList: []
    }
  },
  created () {
    axios
      .get('/user/user-list')
      .then((res) => {
        this.userList = res.data
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
</script>

<style scoped>
.box-card-aside {
  margin-bottom: 10px;
  width: 100%;
}
.el-link-content-header {
  padding-left: 5px;
  padding-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
