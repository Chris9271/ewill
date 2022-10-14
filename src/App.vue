<template>
  <div class="layout">
    <LayoutHeader />
    <div class="layout__wave"></div>
    <main class="layout__contents">
      <LayoutForm />
      <LayoutPrize />
      <LayoutData />
      <LayoutMarket />
    </main>
  </div>
</template>

<script>
import LayoutHeader from './components/Header.vue'
import LayoutForm from './components/Form.vue'
import LayoutPrize from './components/Prize.vue'
import LayoutData from './components/Data.vue'
import LayoutMarket from './components/Market.vue'

export default {
  components: {
    LayoutHeader,
    LayoutForm,
    LayoutPrize,
    LayoutData,
    LayoutMarket,
  },
}
</script>

<style lang="scss" src="./styles/app.scss"></style>
