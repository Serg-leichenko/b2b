<template name="history-orders">
  <div>
    <Header />
    <section>
      <div class="filters">
        <div class="container">
          <div class="filters__block">
            <filters-orders />
          </div>
          <div class="filters__list">
            <ul class="filters__list_items">
              <li class="item item-plus">+</li>
              <li class="item">253</li>
              <li class="item">Частично отгружен</li>
              <li class="item">16.08.2021</li>
              <li class="item">30 083,84 UAH</li>
              <li class="item">Brichka Aleksandr</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import filtersOrders from "@/components/orders/order-filters.vue";
export default {
  name: "history-orders",
  components: {
    Header,
    Footer,
    filtersOrders,
  },
};
</script>

<style lang="scss" scoped></style>
