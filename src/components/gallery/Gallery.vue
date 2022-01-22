<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track" ref="glide">
      <ul class="glide__slides" v-if="filteredWorks.length">
        <li
          class="glide__slide gallery__item"
          v-for="work in filteredWorks"
          :key="work.id"
          :id="work.id"
          @click.prevent="$router.push('/work-review/' + work.id)"
        >
          <a href="#" class="gallery__link">
            <img :src="work.main_image" class="gallery__img" />
          </a>
        </li>
      </ul>
      <div v-else class="gallery__item--empty" ref="empty">
        Таких работ пока нет...
      </div>
    </div>
    <div
      v-if="filteredWorks.length > 1"
      class="glide__arrows"
      data-glide-el="controls"
    >
      <button
        class="glide__arrow glide__arrow--left"
        data-glide-dir="<"
      ></button>
      <button
        class="glide__arrow glide__arrow--right"
        data-glide-dir=">"
      ></button>
    </div>
  </div>
  <div class="mobile__gallery">
    <h2 class="student-works__title">{{ filterDesc }}</h2>
    <a
      class="student-works__close close-btn"
      href="/student-works"
      @click.prevent="hideMobile"
    ></a>
    <ul class="mobile__gallery-list" v-if="filteredWorks.length">
      <li
        class="gallery__item"
        v-for="work in filteredWorks"
        :key="work.id"
        :id="work.id"
        @click.prevent="$router.push('/work-review/' + work.id)"
      >
        <a href="#" class="gallery__link">
          <img :src="work.main_image" class="gallery__img" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Gallery from "./gallery";
import "./gallery.scss";

export default Gallery;
</script>
