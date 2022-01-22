const nav = {
  name: "Nav",
  props: {
    view: {
      type: String,
      required: true,
      default: "title",
    },
  },
  data() {
    return {
      activeMenu: false,
    };
  },
  methods: {
    onClickBurger() {
      this.activeMenu = true;
    },
    hideMenu() {
      this.activeMenu = false;
    },
    clickMenuHandler(event) {
      this.$emit("changeMenu", event.target.getAttribute("href").slice(1));
      this.hideMenu();
    },
  },
  mounted() {},
};

export default nav;
