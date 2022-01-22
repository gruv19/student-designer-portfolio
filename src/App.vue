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
@import "assets/scss/global/animate";

.page {
  font-size: 10px;
  box-sizing: border-box;
  font-family: $jostFont;
  font-weight: $regularFont;
  color: $mainColor;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.page__body {
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  background-color: $mainColor;
  min-height: 100vh;
  max-height: 100vh;
  background: linear-gradient(
    180deg,
    #649dbb 0%,
    #65a0be 6.08%,
    #69a2c0 12.63%,
    #68a4c2 21.5%,
    #6da9c3 31.56%,
    #71adc9 46.67%,
    #7db3cf 61.25%,
    #7fb5d1 66%,
    #82bad5 72.77%,
    #85bbd7 77.01%,
    #89bcd9 82.33%,
    #8fbfdd 90.17%,
    #93c5e0 96.62%
  );
}

h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
  height: auto;
}

.tabbar {
  position: fixed;
  bottom: 0;
  bottom: calc(10rem + env(safe-area-inset-bottom));
}
</style>
