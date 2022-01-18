<template>
  <div class="navbar">
    <!-- 展开、收起侧边栏 -->
    <span
      class="iconfont collapse-icon"
      v-if="sidebarVisible"
      :class="sidebarCollapse.bCollapse ? 'icon-shouqi' : 'icon-zhankai'"
      @click="toggleSideBar"
    ></span>

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img
            src="http://localhost:3000/upload/avatar/1642252482092-3.jpg"
            class="user-avatar"
          />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link :to="{ name: 'profile' }">
            <el-dropdown-item>Profile</el-dropdown-item>
          </router-link>
          <router-link :to="{ name: 'snippet-show' }">
            <el-dropdown-item>Home</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: {
    Breadcrumb
  },
  computed: {
    ...mapGetters(['sidebarVisible', 'sidebarCollapse'])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  .collapse-icon {
    float: left;
    font-size: 20px;
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 50px;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
