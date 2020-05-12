<template>
    <transition name="custom"
                enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__fadeOutUp">
        <div v-if="sliderStatus">
            <div class=" align-items-center" :class="sliderState">
                <label for="formMax" class="font-weight-bold mr-2">max</label>
                <input
                        type="text"
                        id="formMax"
                        class="form-control mx-2 text-center"
                        style="width: 60px;"
                        v-model="maxAmount"
                        @change="$emit('update:maximum', maxAmount)"
                >
                <input type="range" class="custom-range" min="0" max="200" v-model="maxAmount"
                       @change="$emit('update:maximum', maxAmount)">
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "price-slider",
        data: function() {
            return {
                maxAmount: 99
            };
        },
        props: ['sliderStatus'],
        computed: {
            sliderState: function () {
                return this.sliderStatus ? 'd-flex' : 'd-none'
            }
        }
    }
</script>

<style>
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 1s ease-in-out;
    }

</style>