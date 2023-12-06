<template>
  <div class="detailProduct">
    <section class="mb-5">
      <div class="row" v-for="item in detailProduct.data" :key="item.id">
        <div class="col-md-6 mb-4 mb-md-0">
          <div id="mdb-lightbox-ui"></div>
          <div class="mdb-lightbox">
            <div class="row product-gallery mx-1">
              <div class="col-12 mb-0">
                <figure class="view overlay rounded z-depth-1 main-img">
                  <a href="#"
                    data-size="710x823">
                    <img :src="require(`@/assets/${item.img[selectedColor].src}`)"
                      class="img-fluid z-depth-1">
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h1>{{item.name}}</h1>
          <p class="mb-2 text-muted text-uppercase small">Shirts</p>
          <starLike />
          <p><span class="mr-1"><strong>${{item.price}}</strong></span></p>
          <descriptionDetail :color="item.img[selectedColor].color" />
          <hr>
          <div class="table-responsive mb-3">
            <table class="table table-sm table-borderless">
              <tbody>
                <tr>
                  <td class="pb-0">Select Color</td>
                </tr>
                <tr>
                  <selectColor @selectedColorDetail="handleSelectedColor" :listStyle="item.img" />
                </tr>
              </tbody>
            </table>
          </div>
          <actionDetail />
        </div>
      </div>
      <actionComment />
    </section>
  </div>
</template>

<script>
import selectColor from './selectColor'
import starLike from './starLike'
import descriptionDetail from './descriptionDetail'
import actionDetail from './actionDetail'
import Product from './../../apis/Product'
import actionComment from './actionComment'
export default {
  name: 'detailProduct',
  data () {
    return {
      id: this.$route.params.id,
      detailProduct: {
      },
      selectedColor: 0
    }
  },
  props: {
    title: String
  },
  mounted () {
    this.getIdProduct()
  },
  methods: {
    async getIdProduct () {
      let idproduct = await this.$route.params.id
      let responseDetail = await Product.show(idproduct)
      this.detailProduct = responseDetail
    },
    handleSelectedColor (data) {
      this.selectedColor = data
    }
  },
  components: {
    selectColor,
    starLike,
    descriptionDetail,
    actionDetail,
    actionComment
  }
}
</script>

<style>
.detailProduct {
  padding-top: 90px;
  text-align: left
}
.quantity {
  max-width: 100px;
  margin: 0px 10px;
}
.quantityonClick {
  width: 40px;
}
.add-to-cart {
  background-color: #f2f2f2;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}
</style>
