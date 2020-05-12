<template>
  <div id="app" class="container mt-5">
    <h1> Welcome to my Shop! </h1>
    <navbar
    :cart="cart"
    :cartQty="cartQty"
    :cartTotal="cartTotal"
    @toggle="toggleSliderStatus"></navbar>
    <price-slider :slider-status="sliderStatus" :maximum.sync="maximum"></price-slider>
    <product-list :maximum="maximum" :products="products" @add="addItem"></product-list>
  </div>
</template>

<script>

import ProductList from "./components/ProductList";
import PriceSlider from "./components/PriceSlider";
import Navbar from "./components/Navbar";


export default {
  name: "App",
  components: {
    Navbar,
    PriceSlider,
    ProductList
  },
  data: function(){
    return {
      maximum: 99,
      sliderStatus: false,
      products: null,
      cart: []
    };
  },
  methods: {
    toggleSliderStatus(){
      this.sliderStatus = !this.sliderStatus;
    },
    addItem: function(product) {
      var whichProduct;
      var existing = this.cart.filter(function(item, index) {
        if(item.product.id == Number(product.id)){
          whichProduct = index;
          return true;
        } else {
          return false;
        }
      });

      if(existing.length) {
        this.cart[whichProduct].qty++;
      } else {
        this.cart.push({product: product, qty: 1})
      }
    }
  },
  mounted: function () {
    fetch('https://hplussport.com/api/products/order/price')
            .then(response => response.json())
            .then(data => {
              this.products = data;
            })
  }
};
</script>


