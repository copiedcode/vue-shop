<template>
    <nav class="navbar navbar-light fixed-top" >
        <div class="navbar-text ml-auto d-flex" >
            <button class="btn btn-sm btn-outline-success" @click="$parent.$emit('toggle')">
                <font-awesome-icon icon="filter"></font-awesome-icon>
            </button>
            <div class="dropdown ml-2" v-if="cart.length>0">
                <button id="cartDropdown" class="btn btn-success btn-sm dropdown-toggle"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="badge badge-pill badge-light">{{ cartQty }}</span>
                    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
                    <price :value="Number(cartTotal)"></price>
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="cartDropdown">
                    <div v-for="(item, index) in cart" :key="index">
                        <div class="dropdown-item-text text-nowrap text-right">
                            <span class="badge badge-pill badge-warning align-text-top mr-1"> {{ item.qty}}</span>
                            {{item.product.name}}
                            <b><price :value="item.qty*item.product.price"></price></b>
                            <a href="#" @click.stop="$parent.$emit('delete', index)"
                               class="badge badge-danger text-white">X</a>
                        </div>
                    </div>
                    <router-link class="btn btn-sm btn-outline-warning text-dark float-right mr-4 m-2 font-weight-bold" to="/cart">Checkout</router-link>
                </div>

            </div>
        </div>
    </nav>
</template>

<script>
    import Price from "./Price";
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    export default {
        name: "navbar",
        props: ['cart', 'cartQty', 'cartTotal'],
        components: {
            FontAwesomeIcon,
            Price
        }
    }
</script>

<style scoped>

</style>