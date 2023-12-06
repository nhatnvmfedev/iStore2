<template>
    <div id="app">
      <notifications group="foo" position="bottom right" />
      <div v-if="isNoticeAddCart=== true" class="alert alert-success notice"
          :class="{ noticeAddcart : isNoticeAddCart }" role="alert">
          Successfully added to cart xxx
        </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 bg-light">
            <div class="container">
              <cpnHeader />
            </div>
          </div>
        </div>
        <div class="container pt-5">
          <router-view />
        </div>
        <div class="row">
          <div class="col-12 px-0">
            <cpn-footer />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import cpnHeader from './components/include/cpnHeader'
import listProducts from './components/listProducts'
import detailProduct from './components/detailProduct/detailProduct'
import CpnFooter from './components/include/cpnFooter'

export default {
  name: 'App',
  data () {
    return {
      isNoticeAddCart: false,
      listProducts: this.$store.state.listProducts,
      search: ''
    }
  },
  components: {
    cpnHeader,
    listProducts,
    detailProduct,
    CpnFooter
  }
}
</script>

<style>
#app {
  font-family: "Arizonia", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
.container {
  max-width: 1260px;
  margin: 0 auto;
}
.notice.alert {
  position: absolute;
  right: 0;
  top: 0;
  max-width: 320px;
}
.noticeAddcart {
  animation: opacityBasic 3s;
}
@keyframes opacityBasic {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 0; }
}

</style>
