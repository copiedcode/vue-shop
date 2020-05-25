<template>
    <div>
        <h1> Payment is coming soon. </h1>
        <h3>Your total cart amount: <price
                class="d-block text-success font-weight-light"
                :value="Number(cartTotal)"
        ></price></h3>
        <p><b>Thank you, {{ customer.firstName }}.</b></p>



        <router-link class="btn btn-success text-dark font-weight-bold my-4 " to="/">
            Back to the Shop
        </router-link>
    </div>
</template>

<script>
    import Price from "./Price";
    export default {
        name: "Payment",
        components: {Price},
        props: ["cart","cartTotal", "customer"]


    }
</script>

<style scoped>

</style>