<template>
  <el-card shadow="never" style="border-radius: 0; background: none">
    <el-card>
      <div class="user-profile">
        <div class="box-center">
          <pan-thumb
            :image="avatar"
            :height="'100px'"
            :width="'100px'"
            :hoverable="false"
          >
          </pan-thumb>
        </div>
        <div class="box-center">
          <div class="user-name text-center">{{ name }}</div>
        </div>
      </div>

      <div class="user-bio">
        <div class="user-education user-bio-section">
          <el-divider content-position="right">Education</el-divider>
          <div class="user-bio-section-body">
            <div class="text-muted">
              JS in Computer Science from the University of Technology
            </div>
          </div>
        </div>

        <div class="user-skills user-bio-section">
          <el-divider content-position="right">skills</el-divider>
          <div class="user-bio-section-body">
            <div class="progress-item">
              <span>Vue</span>
              <el-progress :percentage="70" />
            </div>
            <div class="progress-item">
              <span>JavaScript</span>
              <el-progress :percentage="18" />
            </div>
            <div class="progress-item">
              <span>Css</span>
              <el-progress :percentage="12" />
            </div>
            <div class="progress-item">
              <span>ESLint</span>
              <el-progress :percentage="100" status="success" />
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
export default {
  components: { PanThumb },
  props: { name: String, email: String, avatar: String }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}
.text-muted {
  color: #777;
}
.user-profile {
  .user-name {
    font-weight: bold;
  }
  .box-center {
    padding-top: 10px;
  }
  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }
  .box-social {
    padding-top: 30px;
    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }
  .user-follow {
    padding-top: 20px;
  }
}
.user-bio {
  margin-top: 20px;
  color: #606266;
  span {
    padding-left: 4px;
  }
  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;
    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
