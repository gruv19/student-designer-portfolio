<template>
  <router-view v-slot="{ Component }">
    <transition
      mode="in-out"
      leave-active-class="animate__animated animate__fadeOut animate__delay-0s"
      enter-active-class="animate__animated animate__bounceInDown animate__delay-0s"
      :duration="duration"
    >
      <keep-alive :include="['Home', 'StudentWorks']">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      duration: {
        enter: 700,
        leave: 300,
      },
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (to.meta.title) {
        document.title = to.meta.title;
      }
      if (toDepth < fromDepth) {
        this.duration.enter = 20;
        this.duration.leave = 400;
      } else if (toDepth === fromDepth) {
        if (to.path === "/") {
          this.duration.enter = 20;
          this.duration.leave = 500;
        } else {
          this.duration.enter = 800;
          this.duration.leave = 100;
        }
      } else {
        this.duration.enter = 800;
        this.duration.leave = 100;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../node_modules/animate.css/animate.css";
@import "assets/scss/global/close-btn";
@import "assets/scss/global/global";
</style>
