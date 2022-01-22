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
import StudentWorks from "./student-works.js";
import "./student-works.scss";

export default StudentWorks;
</script>
