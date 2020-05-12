<template>
    <span> {{ this.currencysymbol + Number.parseFloat(this.value * this.conversion).toFixed(precision) }} </span>
</template>

<script>
    export default {
        props: {
            value: Number,
            currencysymbol: {
                type: String,
                default: '€'
            },
            precision: {
                type: Number,
                default: 2
            },
            conversion: {
                type: Number,
                default: 1

            }
        }
    }
</script>
