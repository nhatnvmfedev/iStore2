 <template>
  <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
    <div class="card pt-5 pb-4 font-weight-bold rounded-5">
      <img :src="require(`@/assets/${itemProduct.img[0].src}`)" />
      <h5 class="card-title mt-5 font-weight-bold">
        <span @click="toDetail">{{ itemProduct.name }}</span>
      </h5>
      <p class="card-text text-info">{{ itemProduct.img[0].color }}</p>
      <p>Price: <span class="text-danger">{{ formatPrice(itemProduct.price) }}</span></p>
      <span class="like">
        <font-awesome-icon @click="toggleLikeItem" v-if='itemProduct.like === false' :icon="['fas', 'heart-broken']" />
        <font-awesome-icon @click="toggleLikeItem" v-else :icon="['fas', 'heart']" />
      </span>
      <button @click="addToCart(itemProduct.id)" type="button" class="btn btn-success mx-auto">Add To Cart</button>
    </div>
  </div>
</template>

<script>
import { mixinFindIndex } from './../mixins/mixinFindIndex'
import { mixinFormatPrice } from './../mixins/minixFormatPrice'
import axios from 'axios'

export default {
  name: 'itemProduct',
  mixins: [mixinFindIndex, mixinFormatPrice],
  props: {
    itemProduct: {
      type: Object,
      default () {
        return []
      }
    },
    listProducts: {
      type: Array
    },
    listCarts: {
      type: Array
    }
  },
  data () {
    return {
      // listCarts: []
      cartCountIninial: this.$store.state.cartCount
    }
  },
  methods: {
    deleteItem () {
      let idItem = this.itemProduct.id
      this.$store.commit('getId', idItem)
    },
    toggleLikeItem () {
      let id = this.itemProduct.id
      let sttLike = this.itemProduct.like
      sttLike = !this.itemProduct.like
      this.$emit('listToggleLike', sttLike, id)
    },
    async addToCart (idItem) {
      let quantityCart
      const bool = this.listCarts.some(i => parseInt(i.idproduct) === idItem)
      if (bool) {
        this.$emit('getListCarts')
        this.listCarts.forEach(function (item) {
          if (item.idproduct === idItem) {
            quantityCart = item.quantity + 1
            axios.put(`https://614959d5035b3600175ba256.mockapi.io/listCarts/${item.id}`, {
              quantity: quantityCart
            })
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.log(error)
              })
          }
        })
      } else {
        let quantity = {quantity: 1}
        let listProducts = this.listProducts
        this.cartCountIninial = this.listProducts.length
        let idItemx = this.findIndex(idItem)
        let idproduct = {idproduct: this.listProducts[idItemx].id}
        let itemCart = {...listProducts[idItemx], ...quantity, ...idproduct}
        axios.post('https://614959d5035b3600175ba256.mockapi.io/listCarts/', itemCart)
          .then((response) => { console.log(response); this.$emit('getListCarts') }, (error) => { console.log(error) })
      }
      this.$emit('noticeAddCart')
    },
    toDetail () {
      let urlDetail = this.itemProduct.name.replace(/\s/g, '-')
      this.$router.push('/product/' + urlDetail + '/' + this.itemProduct.id)
    }
  }
}

</script>

<style scoped>
    .like {
      position: absolute;
      z-index: 1;
      top: 5px;
      left: 10px;
      font-size: 25px;
      color: #ffc107;
      cursor: pointer;
    }
    .card img {
      max-width: 100%;
      max-height: 190px;
      object-fit: contain;
    }
    .btn {
      width: 200px;
    }
    h5 {
      cursor: pointer;
    }
    .close {
      position: absolute;
      z-index: 1;
      top: 2px;
      right: 5px;
      font-size: 35px;
      color: #F70707;
      opacity: 1;
      cursor: pointer;
    }
</style>
