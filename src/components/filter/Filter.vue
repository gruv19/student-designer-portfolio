<template>
  <div class="student-works__filter filter">
    <a
      v-for="type in types"
      class="filter__btn"
      href="#"
      :key="type.title"
      :id="type.title"
      :class="{ 'filter__btn--active': activeFilter === type.title }"
      @click.prevent="changeActiveFilter(type.title, type.description)"
    >
      {{ type.description }}
    </a>
  </div>
</template>

<script>
import "./filter.scss";
import Filter from "./filter";

export default Filter;
</script>
