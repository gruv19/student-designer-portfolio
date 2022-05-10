<template>
  <div class="header__contacts contacts">
    <h2 class="contacts__title">Связаться со мной</h2>
    <div class="contacts__socials">
      <a
        href="https://t.me/evg_GRU"
        target="_blank"
        class="contacts__icon contacts__icon--telegram"
      >
      </a>
      <a
        href="https://vk.com/ev.grusheva"
        target="_blank"
        class="contacts__icon contacts__icon--vk"
      >
      </a>
      <a
        href="mailto:evgeniya-malceva@bk.ru"
        target="_blank"
        class="contacts__icon contacts__icon--email"
      >
      </a>
    </div>
    <img class="contacts__img" src="@/assets/images/contact__photo.png" />
  </div>
</template>

<script>
export default {
  name: "Contacts",
};
</script>
<style lang="scss">
@import "./contacts.scss";
</style>
