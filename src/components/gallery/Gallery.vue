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
import Glide from "@glidejs/glide";
import generateWorks from "../../mock/works";
import { getRandom } from "../../mock/common";

export default {
  name: "Gallery",
  props: {
    filter: {
      type: String,
      required: true,
    },
    filterDesc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      works: generateWorks(getRandom(12, 30)),
      gilde: null,
      filteredWorks: [],
    };
  },
  methods: {
    setupSlider() {
      if (this.filteredWorks.length) {
        this.glide = new Glide(".gallery", {
          type: this.filteredWorks.length === 1 ? "slider" : "carousel",
          focusAt: "center",
          perView: 2,
          gap: 100,
          peek: 80,
          breakpoints: {
            1800: {
              gap: 80,
              peek: -10,
            },
            1700: {
              gap: 75,
              peek: -29,
            },
            1600: {
              gap: 70,
              peek: -48,
            },
            1500: {
              gap: 65,
              peek: -67,
            },
            1400: {
              gap: 60,
              peek: -76,
            },
            1300: {
              gap: 55,
              peek: -95,
            },
            1200: {
              gap: 50,
              peek: -114,
            },
            1100: {
              gap: 45,
              peek: -133,
            },
            1000: {
              gap: 40,
              peek: -152,
            },
            900: {
              gap: 40,
              peek: -171,
            },
            800: {
              gap: 40,
              peek: -200,
            },
          },
          rewind: false,
          startAt: 0,
        }).mount();
        // window.glide = this.glide;
      }
    },
    destroySlider() {
      if (this.glide) {
        this.glide.destroy();
      }
      this.glide = null;
    },
    filterWork() {
      this.filteredWorks = this.works.filter((item) => {
        return item.type === this.filter;
      });
    },
    hideMobile() {
      this.$emit("hiddenMobile", true);
    },
  },
  mounted() {
    this.filterWork();
  },
  updated() {
    setTimeout(() => {
      this.destroySlider();
      this.setupSlider();
    }, 300);
  },
  watch: {
    filter() {
      if (this.$refs.glide.classList.contains("glide__slides--activation")) {
        this.$refs.glide.classList.remove("glide__slides--activation");
      }
      setTimeout(() => {
        this.filterWork();
        this.$refs.glide.classList.add("glide__slides--activation");
      }, 300);
    },
  },
};
</script>
<style lang="scss">
@import "./gallery.scss";
</style>
