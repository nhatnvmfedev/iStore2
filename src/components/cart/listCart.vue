<template>
  <section class="mt-5">
    <div class="row">
      <div class="col-lg-8">
        <!-- Card -->
        <div class="mb-3">
          <div class="pt-4 wish-list">
            <h5 class="mb-4">Cart (<span>{{valListCarts.length}}</span> items)</h5>
            <div v-if='valListCarts.length > 0'>
              <itemCart :listCarts="listCarts" @getAllCarts="getAllCarts" v-for="cart in valListCarts" :key="cart.id" :quantityItem="cart.quantity" :cart="cart" :cartId="cart.id" /></div>
            <p v-else>Your cart is empty. <router-link to="/">Go to Shop.</router-link></p>
            <hr class="mb-4" />
            <p class="text-primary mb-0">
              <i class="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
              items to your cart does not mean booking them.
            </p>
          </div>
        </div>
        <inforPay />
      </div>
      <totalAmount :getTotalPrice="getTotalPrice" />
    </div>
  </section>
</template>

<script>
import itemCart from './itemCart'
import totalAmount from './totalAmount.vue'
import inforPay from './inforPay.vue'
// import axios from 'axios'
import Cart from './../../apis/Cart'

export default {
  name: 'listCart',
  data () {
    return {
      totalPriceInCart: 0,
      listCarts: []
    }
  },
  mounted () {
    this.getAllCarts()
  },
  methods: {
    async getAllCarts () {
      let responseCart = await Cart.all()
      this.listCarts = responseCart.data
      this.$store.dispatch('actGetCartCount', responseCart.data.length)
    }
  },
  components: {
    itemCart,
    totalAmount,
    inforPay
  },
  props: {
  },
  // calcular //
  computed: {
    getTotalPrice () {
      let listCarts = this.listCarts
      let totalPriceInCart = this.totalPriceInCart
      if (listCarts) {
        listCarts.forEach((item, i) => {
          totalPriceInCart += item.price * item.quantity
        })
        return totalPriceInCart
      }
    },
    valListCarts () {
      return this.listCarts
    }
  }
}
</script>

<style scoped>
  .wish-list{
    text-align: left;
  }
</style>
