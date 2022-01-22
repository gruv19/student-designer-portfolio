import GLightbox from "glightbox";

const slider = {
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

export default slider;
