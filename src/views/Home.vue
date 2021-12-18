<template>
  <el-container class="el-outer">
    <el-aside width="150px" class="el-outer-menu">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Four</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="el-outer-main">
      <el-container>
        <el-header>
          <el-dropdown>
            <span class="el-dropdown-link">
              Dropdown List
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
        <el-main>
          <el-row class="row-bg" justify="center" :gutter="20">
            <el-col :span="2"
              ><div class="grid-content bg-margin"></div
            ></el-col>
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
                  <div class="text item"></div>
                </el-card></div
            ></el-col>
            <el-col :span="6"
              ><div class="grid-content bg-aside">
                <el-card class="box-card-aside">
                  <div class="text item"></div>
                </el-card></div
            ></el-col>
            <el-col :span="2"
              ><div class="grid-content bg-margin"></div
            ></el-col>
          </el-row>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-main>
  </el-container>
</template>

<script lang="ts">
export default {
  data () {
    return {
      articleList: [1, 2, 3]
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
  height: 60px;
}
.el-footer {
  background-color: #333744;
  height: 60px;
}

/*  */
.el-outer {
  margin: 0;
  padding: 0;
  border: 0;
}
.el-outer-menu {
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
}
.el-outer-main {
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}
.el-menu {
  height: 100%;
  border: 0;
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

/*  */
.el-dropdown {
  color: white;
  text-align: center;
  line-height: 60px;
  padding: 0;
  margin: 0;
  margin-left: 40px;
  cursor: pointer;
}
</style>
