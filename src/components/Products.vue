<template>
  <div>
    <h1>Welcome to my Shop!</h1>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal"> </navbar>
    <filters :filter-status="filterStatus" :searchProducts.sync="searchProducts"></filters>
    <product-list :maximum="maximum" :products="filteredProducts"></product-list>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Filters from "./Filters";
import ProductList from "./ProductList";

export default {
  name: "Products",
  data() {
      return {
          searchProducts: null
      }
  },
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "filterStatus",
    "sliderState"
  ],
  components: {
    Navbar,
    Filters,
    ProductList
  },
  computed: {
    filteredProducts() {
        if(this.searchProducts) {
        return this.products.filter(p =>{
            return this.searchProducts.toLowerCase().split(' ').every(v => p.name.toLowerCase().includes(v));
        })
        } else {
            return this.products;
        }

    }
  }
};
</script>

<style scoped></style>
