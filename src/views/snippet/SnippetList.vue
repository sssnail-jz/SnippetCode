<template>
  <el-row class="row-bg" justify="center" :gutter="20">
    <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
    <el-col :span="14"
      ><div class="grid-content bg-content">
        <!-- snippet-list card -->
        <el-card
          :key="item.id"
          v-for="item in snippetList"
          class="box-card-content"
        >
          <template #header>
            <div class="card-header-content">
              <el-link type="primary" style="font-size: 20px">{{
                item.title
              }}</el-link>
              <el-button class="card-button-content" type="text"
                >修改</el-button
              >
            </div>
          </template>
          <div class="text item content-div">
            <el-image
              style="align: right; float: right; hspace: 15px; vspace: 15px"
              :src="item.cover"
              :fit="fit"
            ></el-image>
            {{ item.content }}
            <div class="more-div"></div>
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6"
      ><div class="grid-content bg-aside">
        <!-- user-list card -->
        <el-card class="box-card-aside">
          <div class="text item">
            <ul>
              <li
                :key="item.id"
                v-for="item in userList"
                style="display: flex; align-items: center; margin-bottom: 10px"
              >
                <el-link :underline="false">
                  <el-avatar
                    :size="50"
                    :src="item.avatar"
                    style="margin-right: 10px"
                  ></el-avatar
                ></el-link>

                <el-link>{{ item.name }}（{{ item.snippetCount }}）</el-link>
              </li>
            </ul>
          </div>
        </el-card>
      </div></el-col
    >
    <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
  </el-row>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      snippetList: [],
      userList: []
    }
  },
  created () {
    axios
      .get('/snippet/snippet-list')
      .then((res) => {
        this.snippetList = res.data
      })
      .catch((err) => {
        console.error(err)
      })
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
/*  */
.el-row {
  height: 100%;
}
.el-col {
  border-radius: 4px;
  padding-bottom: 40px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

/*  */
.ul-content {
  margin: 0;
  list-style: none;
}

/*  */
.box-card-content {
  width: 100%;
  height: 600px;
  margin-bottom: 10px;
  position: relative;
}

.box-card-aside {
  width: 100%;
}
.card-button-content {
  position: absolute;
  right: 20px;
}
/*  */
.content-div {
  padding-left: 20px;
  padding-right: 20px;
  height: 500px;
  overflow: hidden;
  position: relative;
}
.more-div {
  height: 130px;
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  background: -webkit-linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}
</style>
