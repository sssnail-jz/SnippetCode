<template>
  <el-row class="row-bg" justify="center" :gutter="20">
    <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
    <el-col :span="14"
      ><div class="grid-content bg-content">
        <el-card
          :key="item.id"
          v-for="item in snippetList"
          class="box-card-content"
        >
          <template #header>
            <div class="card-header-content">
              <span>{{ item.title }}</span>
              <el-button class="card-button-content" type="text"
                >修改</el-button
              >
            </div>
          </template>
          <div class="text item">
            <el-image
              style="
                width: 100px;
                height: 100px;
                align: right;
                float: right;
                hspace: 5;
                vspace: 5;
              "
              :src="item.cover"
              :fit="fit"
            ></el-image>
            {{ item.content }}
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6"
      ><div class="grid-content bg-aside">
        <el-card class="box-card-aside">
          <div class="text item"></div>
        </el-card></div
    ></el-col>
    <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
  </el-row>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      snippetList: []
    }
  },
  mounted () {
    axios
      .get('/snippet/snippet-list')
      .then((res) => {
        this.snippetList = res.data
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
  height: 300px;
}
.card-button-content {
  position: absolute;
  right: 20px;
}
</style>
