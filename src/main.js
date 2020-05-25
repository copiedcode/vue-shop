import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

import {
  faShoppingCart,
  faDollarSign,
  faFilter
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign, faFilter);

import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Products
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/checkout",
      component: Checkout
    },
    {
      path: "/payment",
      component: Payment
    }

  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
