import Nav from "@/components/nav/Nav.vue";
import Title from "@/components/title/Title.vue";
import Contacts from "@/components/contacts/Contacts.vue";

const home = {
  name: "Home",
  components: { Nav, Title, Contacts },
  data() {
    return {
      flag: true,
      view: "title",
      loading: true,
    };
  },
  methods: {
    menuHandler(viewName) {
      this.view = viewName;
    },
    showHeader() {
      console.log("I'm ready");
    },
  },
  watch: {
    view() {
      this.activeMenu = false;
    },
  },
  mounted() {
    // document.title = "Главная";
  },
};

export default home;
