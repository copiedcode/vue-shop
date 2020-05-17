<template>
    <div>
        <h1>Checkout</h1>
        <table class="table table-hover" v-if="cart.length">
            <caption class="text-right h4">
                <b>Total:</b>
                <price class="d-block text-success font-weight-bold"
                       :value="Number(cartTotal)"></price>
                <p style="font-size: 0.5em" class="text-right">incl. MwSt. <br> shipping excl. </p>
            </caption>

            <thead>
            <tr>
                <th scope="col">Item</th>
                <th scope="col" class="text-center">Qty</th>
                <th scope="col" class="text-right">Price</th>
                <th scope="col" class="text-right">Sub-total</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item) in cart" :key="item.product.id">

                <th scope="row">{{ item.product.name }}</th>
                <td class="text-center">{{ item.qty }}</td>
                <td class="text-right">{{ Number(item.product.price) }}</td>
                <td class="text-right">{{ Number(item.qty * item.product.price) }}</td>
            </tr>
            </tbody>
        </table>

        <router-link class="btn btn-outline-warning text-dark font-weight-bold" to="/cart">Back to the Cart</router-link>
        <router-link class="btn btn-outline-success text-dark font-weight-bold float-right" to="/paying">Proceed</router-link>

    </div>
</template>

<script>
    import Price from "./Price";
    export default {
        name: "Checkout",
        props: ["cart", "cartTotal"],
        components: {
            Price
        }

    }
</script>

<style scoped>

</style>