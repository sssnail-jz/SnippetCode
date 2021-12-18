<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-row class="row-bg" justify="center" :gutter="20">
        <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
        <el-col :span="14"
          ><div class="grid-content bg-content">
            <ul class="ul-content">
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
            </ul>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="grid-content bg-aside">
            <ul class="ul-content">
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
              <li>hello World</li>
            </ul>
          </div></el-col
        >
        <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
}
.el-footer {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}

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
.bg-content,
.bg-aside {
  background: #d3dce6;
}

.ul-content {
  margin: 0;
  list-style: none;
}
</style>
