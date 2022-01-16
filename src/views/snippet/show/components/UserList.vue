<template>
  <!-- user-list card -->

  <el-card class="box-card-aside" shadow="nerver" style="border: 0">
    <el-divider content-position="right">用户列表</el-divider>
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
                :image="onAvatar(item.avatar)"
                style="margin-right: 10px"
              >
              </pan-thumb>
            </el-link>

            <el-link
              class="pan-btn el-link-content-header"
              style="font-size: 16px"
            >
              {{ item.name }}
            </el-link>
          </div>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import userService from '@/api/user'

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
  async created () {
    await this.getUsers()
  },
  methods: {
    async getUsers () {
      await userService.fetchList().then((response) => {
        this.userList = response.data.data
      })
    },
    onAvatar (uname) {
      return 'http://localhost:3000/upload/avatar/' + uname
    }
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
