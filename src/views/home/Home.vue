<template>
  <header class="header">
    <div class="header__wrapper">
      <Nav class="header__nav" @changeMenu="menuHandler" :view="view" />
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
import Nav from "@/components/nav/Nav.vue";
import Title from "@/components/title/Title.vue";
import Contacts from "@/components/contacts/Contacts.vue";

export default {
  name: "Home",
  components: { Nav, Title, Contacts },
  data() {
    return {
      flag: true,
      view: "title",
      loading: true,
    };
  },
  methods: {
    menuHandler(viewName) {
      this.view = viewName;
    },
  },
  watch: {
    view() {
      this.activeMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./header.scss";
</style>
