<template>
  <div>
    <!-- snippet-list card -->

    <el-card
      class="box-card-content"
      :key="item.id"
      v-for="item in snippetList"
    >
      <div class="header">
        <mallki
          class-name="mallki-text"
          style="font-size: 25px"
          :text="item.title"
        />
        <el-divider content-position="left" class="hidden-sm-and-down">
          <snippet-svg icon="#icon-riqi"></snippet-svg>
          <el-link class="pan-btn el-link-content-header">{{
            item.publishDate
          }}</el-link>

          <snippet-svg icon="#icon-yonghu"></snippet-svg>
          <el-link class="pan-btn el-link-content-header">{{
            item.author
          }}</el-link>

          <!-- <snippet-svg icon="#icon-daima1"></snippet-svg>
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
          }}</el-link> -->
        </el-divider>
      </div>

      <div class="text item content-div line-numbers">
        <el-card>
          {{ content }}
          <div class="more-div" style="relative"></div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
import Prism from '@/assets/hightlight/prism.js'
import snippetRequest from '@/utils/snippetRequest'

export default {
  name: 'SnippetContent',
  components: {
    Mallki
  },
  data () {
    return {
      snippetList: [],
      hightLightTimmer: undefined,
      content: `年度 DBMS：Snowflake
据最新公布的 DB-Engines 排行榜，Snowflake 凭借+5.79分的增长摘得 2021 年年度数据库桂冠！
Snowflake属于完全托管的云服务器，它集成了数据仓库、数据集市和数据湖，同时支持数据跨平台分析。
Snowflake 于 2014 年推出，经过多轮风险投资，Snowflake的规模不断拓展，并提供越来越多的功能。2020年9月，Snowflake成为迄今为止最大的IPO软件公司。
Snowflake 不仅是第一个获得**“年度 DB-Engines DBMS”**称号的软件即服务，同时也是首个获得DBMS前三名的以数据仓库为中心的产品。`
    }
  },
  computed: {},
  created () {
    snippetRequest
      .get('/snippet')
      .then((res) => {
        console.log(res)
        this.snippetList = res.data
      })
      .catch((err) => {
        console.log(err)
        console.error(err)
      })
    this.hightLightTimmer = setInterval(() => {
      Prism.highlightAll()
    }, 0)
  }
}
</script>

<style scoped>
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
  overflow: hidden;
  position: relative;
  border-radius: 0;
}
/*  */
.content-div {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  height: 480px;
  overflow: hidden;
  position: relative;
}
.more-div {
  height: 100px;
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

.el-divider--horizontal {
  height: 2px;
}
</style>
