<template>
  <div>
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

      <div class="text item content-div line-numbers">
        <pre class="language-css"><code>
          {{item.content}}
        </code></pre>
        <div class="more-div"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
import Mallki from '@/components/TextHoverEffect/Mallki'
import Prism from '@/assets/hightlight/prism.js'
export default {
  name: 'SnippetContent',
  components: {
    Mallki
  },
  data () {
    return {
      snippetList: [],
      xxxxxxxxxxtimer: undefined // 打这么多 x 只是为了记录我踩这个坑踩得多痛苦
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
    this.xxxxxxxxxxtimer = setInterval(() => {
      Prism.highlightAll() // 代码高亮渲染函数
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

  position: relative;
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
snippet-svg {
  font-size: 20px;
}
</style>
