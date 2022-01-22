<template>
  <header class="header">
    <div class="header__wrapper">
      <Nav class="header__nav" @changeMenu="menuHandler" :view="view" />
      <!-- <transition name="title-contacts-slide" > -->
      <transition
        leave-active-class="animate__animated animate__fadeOutLeft animate__fast"
        enter-active-class="animate__animated animate__fadeInRight animate__faster"
        mode="out-in"
      >
        <component :is="view"></component>
      </transition>
    </div>
  </header>
</template>

<script>
import home from "./home.js";
import "./header.scss";

export default home;
</script>

<style lang="scss" scoped>
.title-contacts-slide-enter-active {
  animation-name: slideIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.title-contacts-slide-leave-active {
  animation-name: slideOut;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.title-contacts-slide-enter-from {
  animation-name: slideIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.title-contacts-slide-leave-to {
  animation-name: slideOut;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
</style>
