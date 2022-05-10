<template>
  <section class="student-works">
    <h2 class="student-works__title">Учебные работы</h2>
    <router-link class="student-works__close close-btn" to="/"></router-link>
    <div class="student-works__wrapper">
      <Filter @changeFilter="onChangeFilter" />
      <div
        class="student-works__gallery gallery"
        :class="{ 'student-works__gallery--active': galleryActivator }"
      >
        <Gallery
          :filter="activeFilter"
          :filterDesc="activeFilterDescription"
          @hiddenMobile="changeGallery"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Filter from "@/components/filter/Filter.vue";
import Gallery from "@/components/gallery/Gallery.vue";

export default {
  name: "StudentWorks",
  components: { Filter, Gallery },
  data() {
    return {
      activeFilter: "",
      activeFilterDescription: "",
      galleryActivator: false,
      timer: false,
    };
  },
  methods: {
    onChangeFilter(filterInfo) {
      this.activeFilter = filterInfo.title;
      this.activeFilterDescription = filterInfo.description;
      if (this.timer) this.galleryActivator = true;
    },
    changeGallery(state) {
      if (state) this.galleryActivator = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.timer = true;
    }, 0);
  },
};
</script>
<style lang="scss" scoped>
@import "./student-works.scss";
</style>
