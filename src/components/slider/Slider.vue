<template>
  <div class="work-review__slider slider-block">
    <div class="slider-dots">
      <span
        v-for="key in images.length"
        :key="key"
        class="slider-dots__item"
        :class="{ 'slider-dots__item--active': key - 1 === activeImage }"
      ></span>
    </div>
    <div class="slider">
      <div
        v-for="(img, idx) in images"
        :key="idx"
        class="slider__item"
        :class="{
          'slider__item--right': idx === activeImage && from === 'right',
          'slider__item--left': idx === activeImage && from === 'left',
        }"
        v-touch:swipe.left="showNext"
        v-touch:swipe.right="showPrev"
      >
        <img :src="images[activeImage]" class="slider__img" />
      </div>
    </div>
    <div class="collage" ref="container">
      <div class="collage__wrapper">
        <a v-for="img in images" :key="img" :href="img" class="collage__link">
          <img :src="img" class="collage__img" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import GLightbox from "glightbox";
export default {
  name: "Slider",
  props: {
    images: {
      type: Array,
      required: true,
      startHeigth: 0,
    },
  },
  data() {
    return {
      activeImage: 0,
      from: "right",
      startHeigth: 0,
    };
  },
  methods: {
    showNext() {
      if (this.activeImage < this.images.length - 1) {
        this.activeImage++;
        this.from = "right";
      }
    },
    showPrev() {
      if (this.activeImage > 0) {
        this.activeImage--;
        this.from = "left";
      }
    },
  },
  computed: {
    imagesCount() {
      if (this.images) {
        return this.images.length - 1;
      }
      return 0;
    },
  },
  mounted() {
    this.startHeigth = window.innerHeight - 56 - 88 - 99;
    const container = this.$refs.container;
    container.style.height = `${this.startHeigth}px`;
    GLightbox({
      selector: ".collage__link",
      svg: {
        close: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L17 17M17 2L2 17" stroke="#93C5E0" stroke-width="3" stroke-linecap="round"/>
            </svg>`,
      },
    });
  },
};
</script>
<style lang="scss">
@import "../../../node_modules/glightbox/dist/css/glightbox.min.css";
@import "./slider.scss";
@import "./collage.scss";
</style>
