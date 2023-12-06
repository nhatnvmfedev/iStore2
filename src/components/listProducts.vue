<template>
  <div class="cpnListProducts">
    <filterProducts @listFilterProductVal="listHandleFilterProductVal" />
    <div class='row text-center'>
      <itemProduct v-for="itemProduct in getListProductInitial"
          v-bind:listProducts="listProducts"
          v-bind:listCarts="listCarts"
          v-bind:key="itemProduct.id"
          @getListCarts="getListCarts"
          v-bind:itemProduct="itemProduct"
          v-on:listToggleLike="listHandleToggleLike"
          v-on:noticeAddCart="handleNoticeAddCart(itemProduct.name)">
      </itemProduct>
    </div>
    <Spinner v-if="loadingAnimation" size="large" message="Loading..." />
  </div>
</template>

<script>
import itemProduct from './itemProduct'
import filterProducts from './actions/filterProducts'
// import Product from './../apis/Product'
import Cart from './../apis/Cart'
import Spinner from 'vue-simple-spinner'
import axios from 'axios'

export default {
  name: 'listProducts',
  data () {
    return {
      listProducts: [],
      listCarts: [],
      list: [],
      cartCount: 0,
      valSearch: '',
      perPage: this.$store.state.perPage,
      page: this.$store.state.pageNumberProducts,
      listProductShow: [],
      loadingAnimation: true
    }
  },
  created () {
    this.getListProducts()
    this.getListCarts()
  },
  props: {
    title: String,
    url: String
  },
  components: {
    itemProduct,
    filterProducts,
    Spinner
  },
  methods: {
    async getListProducts () {
      let responseProducts = await axios.get('https://614959d5035b3600175ba256.mockapi.io/listProducts')
        .then(response => {
          this.loadingAnimation = false
          return response
        })
        .catch(error => {
          console.log(error)
        })
        .finally(
          //
        )
      this.listProducts = responseProducts.data
      this.$store.dispatch('actGetAllProducts', this.listProducts.length)
    },
    async getListCarts () {
      let responseCarts = await Cart.all()
      this.listCarts = responseCarts.data
      this.cartCount = responseCarts.data.length
      this.$store.dispatch('actGetCartCount', this.cartCount)
    },
    toggleLikeList (data, id) {
      this.$emit('toggleLikeApp', data, id)
    },
    listHandleToggleLike (data, id) {
      this.$emit('homeToggleLike', data, id)
    },
    listHandleFilterProductVal (data) {
      this.valSearch = data
    },
    // notice after product add to cart
    handleNoticeAddCart (nameProduct) {
      this.$notify({
        group: 'foo',
        title: nameProduct + ' added to cart',
        text: 'Please go to cart to pay',
        type: 'success',
        duration: 3000,
        speed: 1000
      })
    },
    findIndex (id) {
      let listProducts = this.listProducts
      let valIndex
      listProducts.forEach(function (item, index) {
        if (item.id === id) {
          valIndex = index
        }
      })
      return valIndex
    }
  },
  computed: {
    getListProductInitial () {
      let getPagePresent = this.$store.state.pageNumberProducts
      if (this.valSearch !== '') {
        return this.listProducts.filter((item) => {
          return item.name.toLowerCase().match(this.valSearch)
        })
      }
      return this.listProducts.slice(this.perPage * getPagePresent - this.perPage, this.perPage * getPagePresent)
    }
  }
}
</script>

<style>
h1 {
  padding: 30px 0
}
</style>
