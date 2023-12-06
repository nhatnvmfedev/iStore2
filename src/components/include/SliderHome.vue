<template>
  <div>
    <VueSlickCarousel :dots="true" :arrows="false">
      <div v-for="item in srcBanner" :key="item.id"><img :src="require(`@/assets/${ item.src }`)" alt=""></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import { uuid } from 'vue-uuid'
export default {
  name: 'SliderHome',
  data () {
    return {
      srcBanner: [
        {
          id: uuid.v1(),
          src: 'banner-02.jpg'
        },
        {
          id: uuid.v1(),
          src: 'banner-03.jpg'
        }
      ]
    }
  },
  components: {
    VueSlickCarousel
  }
}
</script>

<style>
  .slick-dots{
    display: flex !important;
    justify-content: center;
    margin-top: 20px;
  }
  .slick-dots li{
    background: unset;
    border: 1px solid #28a745;
    border-radius: 50%;
    list-style-type: none;
    font-size: 0;
    height: 10px;
    width: 10px;
    margin: 0 8px;
  }
  .slick-dots li.slick-active{
    background: #28a745;
  }
  .slick-dots li button{
    border-radius: 50%;
    outline: none;
    border: none;
    height: 100%;
    width: 100%;
    padding: 0;
    background: unset;
  }
</style>
