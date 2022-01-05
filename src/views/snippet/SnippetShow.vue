<template>
  <el-row class="row-bg">
    <el-col :xs="0" :md="1" :lg="1" :xl="1"
      ><div class="grid-content"></div
    ></el-col>
    <el-col :xs="23" :md="16" :lg="16" :xl="16" class="col-content">
      <!-- content 列表组件 -->
      <el-card class="el-card-snippet-content" shadow="nerver">
        <el-divider> </el-divider>
        <pre class="language-scss"><code>
          {{ content }}
        </code></pre>
        <div>
          <p>获取自增主键的值：</p>
          <ul>
            <li>
              <span class="math inline"
                ><span
                  id="MathJax-Element-1-Frame"
                  class="MathJax"
                  style="
                    margin: 0px;
                    padding: 0px;
                    display: inline;
                    font-style: normal;
                    font-weight: normal;
                    line-height: normal;
                    font-size: 15px;
                    text-indent: 0px;
                    text-align: left;
                    text-transform: none;
                    letter-spacing: normal;
                    word-spacing: normal;
                    overflow-wrap: normal;
                    white-space: nowrap;
                    float: none;
                    direction: ltr;
                    max-width: none;
                    max-height: none;
                    min-width: 0px;
                    min-height: 0px;
                    border: 0px;
                    position: relative;
                  "
                  tabindex="0"
                  role="presentation"
                  data-mathml='&lt;math xmlns="http://www.w3.org/1998/Math/MathML"&gt;&lt;mi&gt;M&lt;/mi&gt;&lt;mi&gt;y&lt;/mi&gt;&lt;mi&gt;s&lt;/mi&gt;&lt;mi&gt;q&lt;/mi&gt;&lt;mi&gt;l&lt;/mi&gt;&lt;/math&gt;'
                  ><span id="MathJax-Span-1" class="math"
                    ><span id="MathJax-Span-2" class="mrow"
                      ><span id="MathJax-Span-3" class="mi">M</span
                      ><span id="MathJax-Span-4" class="mi">y</span
                      ><span id="MathJax-Span-5" class="mi">s</span
                      ><span id="MathJax-Span-6" class="mi">q</span
                      ><span id="MathJax-Span-7" class="mi">l</span></span
                    ></span
                  ><span class="MJX_Assistive_MathML" role="presentation"
                    >Mysql</span
                  ></span
                ></span
              >&nbsp;支持自增主键，自增主键值的获取，<span class="math inline"
                ><span
                  id="MathJax-Element-2-Frame"
                  class="MathJax"
                  style="
                    margin: 0px;
                    padding: 0px;
                    display: inline;
                    font-style: normal;
                    font-weight: normal;
                    line-height: normal;
                    font-size: 15px;
                    text-indent: 0px;
                    text-align: left;
                    text-transform: none;
                    letter-spacing: normal;
                    word-spacing: normal;
                    overflow-wrap: normal;
                    white-space: nowrap;
                    float: none;
                    direction: ltr;
                    max-width: none;
                    max-height: none;
                    min-width: 0px;
                    min-height: 0px;
                    border: 0px;
                    position: relative;
                  "
                  tabindex="0"
                  role="presentation"
                  data-mathml='&lt;math xmlns="http://www.w3.org/1998/Math/MathML"&gt;&lt;mi&gt;M&lt;/mi&gt;&lt;mi&gt;y&lt;/mi&gt;&lt;mi&gt;b&lt;/mi&gt;&lt;mi&gt;a&lt;/mi&gt;&lt;mi&gt;t&lt;/mi&gt;&lt;mi&gt;i&lt;/mi&gt;&lt;mi&gt;s&lt;/mi&gt;&lt;/math&gt;'
                  ><span id="MathJax-Span-8" class="math"
                    ><span id="MathJax-Span-9" class="mrow"
                      ><span id="MathJax-Span-10" class="mi">M</span
                      ><span id="MathJax-Span-11" class="mi">y</span
                      ><span id="MathJax-Span-12" class="mi">b</span
                      ><span id="MathJax-Span-13" class="mi">a</span
                      ><span id="MathJax-Span-14" class="mi">t</span
                      ><span id="MathJax-Span-15" class="mi">i</span
                      ><span id="MathJax-Span-16" class="mi">s</span></span
                    ></span
                  ><span class="MJX_Assistive_MathML" role="presentation"
                    >Mybatis</span
                  ></span
                ></span
              >&nbsp;也是利用<code>statement.getGenreatedKeys()</code>
            </li>
            <li>
              <code>useGeneratedKeys="true"</code>使用自增主键获取主键值策略
            </li>
            <li>
              <code>keyProperty</code>指定对应的主键属性，也就是<span
                class="math inline"
                ><span
                  id="MathJax-Element-3-Frame"
                  class="MathJax"
                  style="
                    margin: 0px;
                    padding: 0px;
                    display: inline;
                    font-style: normal;
                    font-weight: normal;
                    line-height: normal;
                    font-size: 15px;
                    text-indent: 0px;
                    text-align: left;
                    text-transform: none;
                    letter-spacing: normal;
                    word-spacing: normal;
                    overflow-wrap: normal;
                    white-space: nowrap;
                    float: none;
                    direction: ltr;
                    max-width: none;
                    max-height: none;
                    min-width: 0px;
                    min-height: 0px;
                    border: 0px;
                    position: relative;
                  "
                  tabindex="0"
                  role="presentation"
                  data-mathml='&lt;math xmlns="http://www.w3.org/1998/Math/MathML"&gt;&lt;mi&gt;M&lt;/mi&gt;&lt;mi&gt;y&lt;/mi&gt;&lt;mi&gt;b&lt;/mi&gt;&lt;mi&gt;a&lt;/mi&gt;&lt;mi&gt;t&lt;/mi&gt;&lt;mi&gt;i&lt;/mi&gt;&lt;mi&gt;s&lt;/mi&gt;&lt;/math&gt;'
                  ><span id="MathJax-Span-17" class="math"
                    ><span id="MathJax-Span-18" class="mrow"
                      ><span id="MathJax-Span-19" class="mi">M</span
                      ><span id="MathJax-Span-20" class="mi">y</span
                      ><span id="MathJax-Span-21" class="mi">b</span
                      ><span id="MathJax-Span-22" class="mi">a</span
                      ><span id="MathJax-Span-23" class="mi">t</span
                      ><span id="MathJax-Span-24" class="mi">i</span
                      ><span id="MathJax-Span-25" class="mi">s</span></span
                    ></span
                  ><span class="MJX_Assistive_MathML" role="presentation"
                    >Mybatis</span
                  ></span
                ></span
              >&nbsp;获取到主键值以后，将这个值封装给<span class="math inline"
                ><span
                  id="MathJax-Element-4-Frame"
                  class="MathJax"
                  style="
                    margin: 0px;
                    padding: 0px;
                    display: inline;
                    font-style: normal;
                    font-weight: normal;
                    line-height: normal;
                    font-size: 15px;
                    text-indent: 0px;
                    text-align: left;
                    text-transform: none;
                    letter-spacing: normal;
                    word-spacing: normal;
                    overflow-wrap: normal;
                    white-space: nowrap;
                    float: none;
                    direction: ltr;
                    max-width: none;
                    max-height: none;
                    min-width: 0px;
                    min-height: 0px;
                    border: 0px;
                    position: relative;
                  "
                  tabindex="0"
                  role="presentation"
                  data-mathml='&lt;math xmlns="http://www.w3.org/1998/Math/MathML"&gt;&lt;mi&gt;j&lt;/mi&gt;&lt;mi&gt;a&lt;/mi&gt;&lt;mi&gt;v&lt;/mi&gt;&lt;mi&gt;a&lt;/mi&gt;&lt;mi&gt;B&lt;/mi&gt;&lt;mi&gt;e&lt;/mi&gt;&lt;mi&gt;a&lt;/mi&gt;&lt;mi&gt;n&lt;/mi&gt;&lt;/math&gt;'
                  ><span id="MathJax-Span-26" class="math"
                    ><span id="MathJax-Span-27" class="mrow"
                      ><span id="MathJax-Span-28" class="mi">j</span
                      ><span id="MathJax-Span-29" class="mi">a</span
                      ><span id="MathJax-Span-30" class="mi">v</span
                      ><span id="MathJax-Span-31" class="mi">a</span
                      ><span id="MathJax-Span-32" class="mi">B</span
                      ><span id="MathJax-Span-33" class="mi">e</span
                      ><span id="MathJax-Span-34" class="mi">a</span
                      ><span id="MathJax-Span-35" class="mi">n</span></span
                    ></span
                  ><span class="MJX_Assistive_MathML" role="presentation"
                    >javaBean</span
                  ></span
                ></span
              >&nbsp;的哪个属性。
            </li>
          </ul>
          <p>测试获取主键值：</p>
        </div>
        <el-divider> </el-divider>
        <comments-item
          v-for="comment in comments"
          :key="comment.id"
          :avatar="comment.headimg"
          :author="comment.author"
          :content="comment.content"
          :time="comment.createTime"
          :hasReply="replys[comment.id] && replys[comment.id].length > 0"
          @clickAvatar="handleClickAvatar(comment)"
          @clickAuthor="handleClickAuthor(comment)"
          @addReply="handleAddReply(comment)"
        >
          <reply-item
            v-for="reply in replys[comment.id]"
            :key="reply.id"
            :author="reply.author"
            :content="reply.content"
            :time="reply.createTime"
          >
          </reply-item>
        </comments-item>
      </el-card>
    </el-col>
    <!-- aside -->
    <el-col :xs="0" :md="5" :lg="5" :xl="5" class="col-aside">
      <card-user-profile class="el-card-snippet-aside"></card-user-profile>
    </el-col>
    <el-col :xs="0" :md="1" :lg="1" :xl="1"
      ><div class="grid-content"></div
    ></el-col>
  </el-row>
</template>

<script>
import Prism from '@/assets/hightlight/prism.js'
import CardUserProfile from './components/CardUserProfile.vue'

export default {
  components: {
    CardUserProfile
  },
  data () {
    return {
      comments: [
        {
          id: 0,
          avatar: null,
          author: 'jack',
          content: 'contenttt',
          createTime: 12345
        }
      ],
      replys: [
        [
          {
            id: 100,
            avator: null,
            author: 'hai',
            content: 'haiii',
            createTime: 123456
          }
        ]
      ],
      content: `// base color
                $blue:#324157;
                $light-blue:#3A71A8;
                $red:#C03539;
                $pink: #E55D5E;
                $green: #30B08F;
                $tiffany: #4AB7BD;
                $yellow:#FEC171;
                $panGreen: #30B08F;

                // sidebar
                $menuText:#bfcbd9;
                $menuActiveText:#409EFF;
                $subMenuActiveText:#f4f4f5;
                
                `
    }
  },
  mounted () {
    setInterval(() => {
      Prism.highlightAll()
    }, 0)
  },
  methods: {
    handleAddReply (comment) {
      this.replys[comment.id].push(comment)
    }
  }
}
</script>

<style scoped>
/*  */
.el-row {
  height: 100%;
  width: 100%;
  padding-top: 20px;
}

.el-col {
  padding-bottom: 20px;
}
.col-content,
.col-aside {
  margin-left: 10px;
  margin-right: 10px;
}

.el-card-snippet-content,
.el-card-snippet-aside {
  margin-bottom: 5px;
}
</style>
