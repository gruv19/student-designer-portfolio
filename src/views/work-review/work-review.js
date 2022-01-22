import Slider from "@/components/slider/Slider.vue";

const workReview = {
  name: "workReview",
  components: { Slider },
  data() {
    return {
      work: {},
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    if (process.env.NODE_ENV === "development") {
      this.work = await (await fetch(`/api/getWorkData${id}.json`)).json();
    } else {
      this.work = await (await fetch(`/api/getWorkData.php?work_id=${id}`)).json();
    }
    this.work.images = JSON.parse(this.work.images);
    document.title = `Работа: ${this.work.title}`;
  },
  updated() {},
};

export default workReview;
