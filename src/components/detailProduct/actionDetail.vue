<template>
  <div>
    <button type="button" class="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
    <button type="button" class="btn btn-light btn-md mr-1 mb-2 add-to-cart" @click="addToCartDetail">
      <i class="fas fa-shopping-cart pr-2"></i>Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'actionDetail',
  methods: {
    addToCartDetail () {
      console.log(123)
    }
  }
}
</script>

<style>

</style>
