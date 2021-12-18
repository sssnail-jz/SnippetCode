<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-row class="row-bg" justify="center" :gutter="20">
        <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
        <el-col :span="14"
          ><div class="grid-content bg-content">
            <el-card :key="o" v-for="o in 10" class="box-card-content">
              <template #header>
                <div class="card-header-content">
                  <span>Card name</span>
                  <el-button class="card-button-content" type="text"
                    >Operation button</el-button
                  >
                </div>
              </template>
              <div v-for="o in 4" :key="o" class="text item"></div>
            </el-card></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-aside">
            <el-card class="box-card-aside">
              <div v-for="o in 4" :key="o" class="text item"></div>
            </el-card></div
        ></el-col>
        <el-col :span="2"><div class="grid-content bg-margin"></div></el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      articleList: []
    }
  }
}
</script>

<style scoped>
/*  */
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
