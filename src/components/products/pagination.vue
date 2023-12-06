<template>
  <div v-if="totalProductsInitial > this.perPage">
    <nav aria-label="Page navigation example" class="mt-5">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <button class="page-link" @click="prevPage()" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">&laquo;</span>
          </button>
        </li>
        <li v-for="i in Math.ceil(totalProductsInitial / perPage)" v-bind:key="i" class="page-item"><button class="page-link" @click="getPage(i)">{{ i }}</button></li>
        <li class="page-item">
          <button class="page-link" @click="nextPage()" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data () {
    return {
      perPage: this.$store.state.perPage
    }
  },
  methods: {
    getPage (data) {
      this.$store.dispatch('actGetPageProduct', data)
    },
    nextPage () {
      this.$emit('homeNextPage')
    }
  },
  computed: {
    totalProductsInitial () {
      return this.$store.state.totalProducts
    }
  }
}
</script>

<style></style>
