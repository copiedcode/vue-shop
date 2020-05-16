<template>
  <transition
    name="custom"
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  >
    <div v-if="filterStatus">
      <div class="mb-2 align-items-center">
        <label for="nameFilter" class="font-weight-bold mr-2">Name</label>
        <input
          type="text"
          class="form-control"
          style="width: 80%"
          id="nameFilter"
          aria-describedby="nameFilter"
          placeholder="What are you looking for?"
        />
      </div>
      <div class=" align-items-center" :class="sliderState">
        <label for="formMax" class="font-weight-bold mr-2">Price</label>
        <input
          type="text"
          id="formMax"
          class="form-control mx-2 text-center"
          style="width: 60px;"
          v-model="maxAmount"
          @change="$parent.$emit('update:maximum', maxAmount)"
        />
        <input
          type="range"
          class="custom-range"
          min="0"
          max="200"
          v-model="maxAmount"
          @change="$parent.$emit('update:maximum', maxAmount)"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "filters",
  data: function() {
    return {
      maxAmount: 99
    };
  },
  props: ["filterStatus"],
  computed: {
    sliderState: function() {
      return this.filterStatus ? "d-flex" : "d-none";
    }
  }
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
</style>
