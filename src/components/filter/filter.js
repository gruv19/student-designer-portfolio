const Filter = {
  name: "Filter",
  data() {
    return {
      types: [],
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
  async mounted() {
    if (process.env.NODE_ENV === "development") {
      this.types = await (await fetch("/api/getTypes.json")).json();
    } else {
      this.types = await (await fetch("/api/getWorkTypes.php")).json();
    }
    this.activeFilter = this.types[0].title;
    this.activeFilterDescription = this.types[0].description;
    const activeFilterInfo = {
      title: this.activeFilter,
      description: this.activeFilterDescription,
    };
    this.$emit("changeFilter", activeFilterInfo);
  },
};

export default Filter;
