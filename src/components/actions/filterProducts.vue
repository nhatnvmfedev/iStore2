<template>
  <div class="filterProduct row mb-5">
    <form class="ml-auto mr-0 d-inline-block">
      <input v-on:keyup="valHandleFilter" class="form-control mr-sm-2" type="search" placeholder="Filter Products..." aria-label="Search">
    </form>
  </div>
</template>

<script>
export default {
  name: 'filterProducts',
  methods: {
    valHandleFilter (e) {
      let valFilter = e.target.value
      this.$emit('listFilterProductVal', valFilter)
    },
    handleIncre () {
      return this.$store.state.result++
    }
  }
}
</script>

<style>

</style>
