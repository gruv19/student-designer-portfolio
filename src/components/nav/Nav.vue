<template>
  <nav class="nav" :class="[$attrs.class, { 'nav--active': activeMenu }]">
    <button class="nav__burger" @click.prevent="onClickBurger"></button>
    <ul class="nav__list" :class="{ 'nav__list--active': activeMenu }">
      <li class="nav__item">
        <a
          href="/title"
          class="nav__link"
          @click.prevent.stop="clickMenuHandler"
          :class="{ 'nav__link--active': view === 'title' }"
        >
          Главная
        </a>
      </li>
      <li class="nav__item">
        <router-link to="/student-works" class="nav__link">
          Учебные работы
        </router-link>
      </li>
      <li class="nav__item">
        <a
          href="/contacts"
          class="nav__link"
          @click.prevent.stop="clickMenuHandler"
          :class="{ 'nav__link--active': view === 'contacts' }"
        >
          Контакты
        </a>
      </li>
    </ul>
    <div
      class="nav__overlay"
      @click="hideMenu"
      :class="{ 'nav__overlay--active': activeMenu }"
    ></div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  props: {
    view: {
      type: String,
      required: true,
      default: "title",
    },
  },
  data() {
    return {
      activeMenu: false,
    };
  },
  methods: {
    onClickBurger() {
      this.activeMenu = true;
    },
    hideMenu() {
      this.activeMenu = false;
    },
    clickMenuHandler(event) {
      this.$emit("changeMenu", event.target.getAttribute("href").slice(1));
      this.hideMenu();
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
@import "./nav.scss";
</style>
