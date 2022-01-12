<template>
  <div>
    <!-- snippet-list card -->

    <el-card class="box-card-index" :key="item.id" v-for="item in snippetList">
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
        </el-divider>
      </div>

      <el-card class="box-card-content line-numbers">
        <div class="content-container" v-html="item.content"></div>
        <!-- <div class="more-div"></div> -->
      </el-card>
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
      hightLightTimmer: undefined
    }
  },
  computed: {},
  created () {
    snippetRequest
      .get('/snippet')
      .then((res) => {
        console.log(res.data)
        this.snippetList = res.data.data
        console.log(this.snippetList)
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
.box-card-index {
  width: 100%;
  height: 600px;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  border-radius: 0;
}
/*  */
.box-card-content {
  padding: 0;
  height: 480px;
  overflow: hidden;
  position: relative;
}
.content-container {
  height: 440px;
  overflow: hidden;
}
.more-div {
  height: 100px;
  position: absolute;
  bottom: 00px;
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
