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
          <div class="header">
            <mallki
              class-name="mallki-text"
              style="font-size: 20px"
              :text="item.title"
            />
            <el-divider content-position="left">
              <snippet-svg icon="#icon-riqi"></snippet-svg>
              <el-link class="pan-btn el-link-content-header">{{
                item.publishDate
              }}</el-link>

              <snippet-svg icon="#icon-yonghu"></snippet-svg>
              <el-link class="pan-btn el-link-content-header">{{
                item.author
              }}</el-link>

              <snippet-svg icon="#icon-daima1"></snippet-svg>
              <el-link class="pan-btn el-link-content-header">{{
                item.type
              }}</el-link>

              <snippet-svg icon="#icon-dianzan"></snippet-svg>
              <el-link class="pan-btn el-link-content-header">{{
                item.like
              }}</el-link>

              <snippet-svg icon="#icon-pinglun"></snippet-svg>
              <el-link class="pan-btn el-link-content-header">{{
                item.comment
              }}</el-link>
            </el-divider>
          </div>

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
        <!-- tag cloud -->
        <el-card class="box-card-aside">
          <el-divider content-position="right">标签云</el-divider>
          <div class="text item">
            <el-link
              :key="item.title"
              v-for="item in snippetTagCloudList"
              style="margin-right: 10px; margin-bottom: 10px; padding: 8px 10px"
              class="pan-btn"
              :class="item.color"
            >
              {{ item.title }}
            </el-link>
          </div>
        </el-card>
        <!-- pie chart -->
        <el-card class="box-card-aside">
          <el-divider content-position="right">统计</el-divider>
          <div class="text item" style="height: 300px">
            <pie-chart :hight="85" />
          </div>
        </el-card></div
    ></el-col>
    <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
import PieChart from '../../components/Charts/PieChart.vue'
import Mallki from '../../components/TextHoverEffect/Mallki'
import PanThumb from '../../components/PanThumb'

export default {
  components: {
    PieChart,
    Mallki,
    PanThumb
  },
  data () {
    return {
      snippetList: [],
      userList: [],
      snippetTagCloudList: []
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
      .get('/snippet/snippet-tag-cloud')
      .then((res) => {
        this.snippetTagCloudList = res.data
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
  width: 100%;
  margin: 20px;
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
  margin-bottom: 10px;
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
  padding-top: 10px;
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

.el-link-content-header {
  padding-left: 5px;
  padding-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
