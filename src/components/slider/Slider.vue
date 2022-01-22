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
        <!-- <img v-for="img in images" :key="img" :src="img" class="collage__img" /> -->
        <a v-for="img in images" :key="img" :href="img" class="collage__link">
          <img :src="img" class="collage__img" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import "./slider.scss";
import "./collage.scss";
import slider from "./slider";

export default slider;
</script>
