import Glide from "@glidejs/glide";

const Gallery = {
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
      works: [],
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

        window.glide = this.glide;
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
  async mounted() {
    if (process.env.NODE_ENV === "development") {
      this.works = await (await fetch("/api/getWorks.json")).json();
    } else {
      this.works = await (await fetch("/api/getWorks.php")).json();
    }
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

export default Gallery;
