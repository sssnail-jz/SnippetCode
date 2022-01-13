<template>
  <transition name="fade" @after-enter="handleAfterEnter">
    <div class="notification" :style="style" v-show="visible">
      <div class="notification__title">
        <span>{{ title }}</span>
      </div>
      <div class="notification__content_wraper">
        <span class="notification__content">
          {{ content }}
        </span>
        <span class="notification__btn" @click="handleClose">close</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.notification {
  /* display: flex; */
  background-color: #303030;
  color: white;
  align-items: center;
  padding: 20px;
  position: relative;
  min-width: 380px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
  transition: all 0.3s;
  border-radius: 2px;
}
.notification__title {
  margin-bottom: 15px;
  font-size: 16px;
}
.notification__content_wraper {
  width: 100%;
  position: relative;
}
.notification__content {
  padding: 0;
  font-size: 13px;
}
.notification__btn {
  position: absolute;
  right: 10px;
  bottom: 0;
  cursor: pointer;
  font-size: 13px;
}
</style>
