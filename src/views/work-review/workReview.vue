<template>
  <section class="work-review">
    <div class="work-review__wrapper">
      <div class="work-review__manage-icons">
        <router-link to="/" class="work-review__home home-btn"></router-link>
        <router-link
          to="/student-works"
          class="work-review__close close-btn"
        ></router-link>
      </div>
      <div class="work-review__main">
        <div class="work-review__text">
          <h2 class="work-review__title">{{ work.title }}</h2>
          <div class="work-review__description">
            <h3 class="work-review__subtitle">{{ work.subtitle }}</h3>
            <p class="work-review__task">{{ work.task }}</p>
            <a
              v-if="work.link"
              class="work-review__link"
              :href="work.link"
              target="_blank"
            >
              Открыть в браузере
            </a>
          </div>
        </div>
        <Slider v-if="work.images" :images="work.images" />
      </div>
    </div>
  </section>
</template>

<script>
import workReview from "./work-review";
import "./work-review.scss";

export default workReview;
</script>
