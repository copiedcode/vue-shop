<template>
    <div>
        <h1> Welcome to my Shop! </h1>
        <navbar
                :cart="cart"
                :cartQty="cartQty"
                :cartTotal="cartTotal" >
        </navbar>
        <price-slider :slider-status="sliderStatus" :maximum.sync="maximum"></price-slider>
        <product-list :maximum="maximum" :products="products"></product-list>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    import PriceSlider from "./PriceSlider";
    import ProductList from "./ProductList";

    export default {
        name: "Products",
        props: [
            "products",
            "maximum",
            "cart",
            "cartQty",
            "cartTotal",
            "sliderStatus",
            "sliderState"
        ],
        components: {
            Navbar,
            PriceSlider,
            ProductList
        }
    }
</script>

<style scoped>

</style>