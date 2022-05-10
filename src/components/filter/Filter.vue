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
import types from "../../mock/types";

export default {
  name: "Filter",
  data() {
    return {
      types: types,
      activeFilter: "",
      activeFilterDescription: "",
    };
  },
  methods: {
    changeActiveFilter(typeTitle, typeDescription) {
      this.activeFilter = typeTitle;
      this.activeFilterDescription = typeDescription;
      const activeFilterInfo = {
        title: this.activeFilter,
        description: this.activeFilterDescription,
      };
      this.$emit("changeFilter", activeFilterInfo);
    },
  },
  mounted() {
    this.activeFilter = this.types[0].title;
    this.activeFilterDescription = this.types[0].description;
    const activeFilterInfo = {
      title: this.activeFilter,
      description: this.activeFilterDescription,
    };
    this.$emit("changeFilter", activeFilterInfo);
  },
};
</script>
<style lang="scss">
@import "./filter.scss";
</style>
