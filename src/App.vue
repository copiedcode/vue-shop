<template>
  <div id="app" class="container mt-5">
    <h1> Welcome to my Shop! </h1>
    <product-list :maximum="maximum" :products="products" @add="addItem"></product-list>
  </div>
</template>

<script>

import ProductList from "./components/ProductList";


export default {
  name: "App",
  components: {

    ProductList
  },
  data: function(){
    return {
      inputWidth: 60,
      sliderStatus: false,
      labelArr: ['font-weight-bold', 'mr-2'],
      maximum: 99,
      products: null,
      cart: []
    };
  },
  methods: {
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
