<template>
  <div class="l-layout">
    <LayoutHeader />
    <div class="b-wave">
      <img class="b-wave__background" src="./img/wave.png" alt="wave" />
    </div>
    <main class="l-contents">
      <LayoutForm />
      <LayoutPrize />
      <LayoutData />
      <LayoutMarket />
    </main>
  </div>
</template>

<script>
import LayoutHeader from "./components/Header.vue";
import LayoutForm from "./components/Form.vue";
import LayoutPrize from "./components/Prize.vue";
import LayoutData from "./components/Data.vue";
import LayoutMarket from "./components/Market.vue";

export default {
  components: {
    LayoutHeader,
    LayoutForm,
    LayoutPrize,
    LayoutData,
    LayoutMarket,
  },
};
</script>

<style lang="scss" src="./styles/app.scss">
</style>