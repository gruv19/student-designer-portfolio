import Filter from "@/components/filter/Filter.vue";
import Gallery from "@/components/gallery/Gallery.vue";

const StudentWorks = {
  name: "StudentWorks",
  components: { Filter, Gallery },
  data() {
    return {
      activeFilter: "",
      activeFilterDescription: "",
      galleryActivator: false,
      timer: false,
    };
  },
  methods: {
    onChangeFilter(filterInfo) {
      this.activeFilter = filterInfo.title;
      this.activeFilterDescription = filterInfo.description;
      if (this.timer) this.galleryActivator = true;
    },
    changeGallery(state) {
      if (state) this.galleryActivator = false;
    },
  },
  mounted() {
    // document.title = "Обзор работ";
    setTimeout(() => {
      // this.galleryActivator = true;
      this.timer = true;
    }, 0);
  },
};
export default StudentWorks;
