<template>
    <div>
        <h1> Welcome to my Shop! </h1>
        <navbar
                :cart="cart"
                :cartQty="cartQty"
                :cartTotal="cartTotal" >
        </navbar>
        <filters :filter-status="filterStatus"></filters>
        <product-list :maximum="maximum" :products="products"></product-list>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    import Filters from "./Filters";
    import ProductList from "./ProductList";

    export default {
        name: "Products",
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
        }
    }
</script>

<style scoped>

</style>