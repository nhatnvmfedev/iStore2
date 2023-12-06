<template>
  <header>
    <nav class='navbar navbar-expand-lg navbar-light'>
      <router-link class='navbar-brand' to='/'>{{showTitle}}</router-link>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <router-link class='nav-link' to='/' v-on:click="handleToHome">Home</router-link>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>About</a>
          </li>
          <li class='nav-item dropdown'>
            <a
              class='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              List Product
            </a>
            <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a class='dropdown-item' href='#'>Action</a>
              <a class='dropdown-item' href='#'>Another action</a>
              <div class='dropdown-divider'></div>
              <a class='dropdown-item' href='#'>Something else here</a>
            </div>
          </li>
          <li class='nav-item'>
            <router-link class='nav-link' to='/contact' tabindex='-1' aria-disabled='true'
              >Contact</router-link
            >
          </li>
        </ul>
        <searchGlobal />
        <div class="d-flex cart-count position-relative">
          <router-link to='/customers/login'><font-awesome-icon class="icon-user text-info" :icon="['fas', 'user']" /></router-link>
          <router-link to='/cart'><font-awesome-icon class="icon-cart text-success" :icon="['fas', 'cart-plus']" />
          <span>{{getCartCount}}</span></router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import searchGlobal from './../actions/searchGlobal.vue'
import Cart from './../../apis/Cart'

export default {
  name: 'cpnHeader',
  components: {
    searchGlobal
  },
  data () {
    return {
      cartCount: 0
    }
  },
  mounted () {
    this.getAllCarts()
  },
  methods: {
    async getAllCarts () {
      let responseCart = await Cart.all()
      this.$store.dispatch('actGetCartCount', responseCart.data.length)
    },
    handleChangeTitles () {
      console.log(this.$store)
    },
    handleToHome () {
      console.log(123)
    }
  },
  computed: {
    showTitle () {
      return this.$store.state.title
    },
    getCartCount () {
      return this.$store.getters.getterCartCount
    }
  }
}
</script>

<style>
  .cart-count {
    font-weight: bold;
  }
  .cart-count a {
    font-size: 26px;
    padding: 0px 5px;
  }
  .cart-count span{
    color: white;
    position: absolute;
    right: 5px;
    top: -5px;
    background: red;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 25px;
    font-size: 10px;
    text-align: center;
  }
  .icon-cart {
    margin-right: 20px;
    font-size: 25px;
  }
</style>
