<template>
  <!--Total Amount-->
  <div class="col-lg-4">
    <!-- Card -->
    <div class="mb-3">
      <div class="pt-4">
        <h5 class="mb-3">The total amount of</h5>

        <ul class="list-group list-group-flush">
          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
          >
            Temporary amount
            <span>{{ formatPrice(getTotalPrice) }}</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center px-0"
          >
            Shipping
            <span>{{ formatPrice(shippingFee) }}</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"
          >
            <div>
              <strong>The total amount of</strong>
              <strong>
                <p class="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span><strong>{{ formatPrice(getTotalPriceFinal) }}</strong></span>
          </li>
        </ul>

        <router-link to="/checkout" class="btn btn-primary btn-block">go to checkout</router-link>
      </div>
    </div>
    <!-- Card -->

    <!-- Card -->
    <!-- <div class="mb-3">
      <div class="pt-4">
        <a
          class="dark-grey-text d-flex justify-content-between"
          data-toggle="collapse"
          href="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Add a discount code (optional)
          <span><i class="fas fa-chevron-down pt-1"></i></span>
        </a>

        <div class="collapse" id="collapseExample">
          <div class="mt-3">
            <div class="md-form md-outline mb-0">
              <input
                type="text"
                id="discount-code"
                class="form-control font-weight-light"
                placeholder="Enter discount code"
              />
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Card -->
  </div>
</template>

<script>
import { mixinFormatPrice } from './../../mixins/minixFormatPrice'

export default {
  data () {
    return {
      shippingFee: 11
    }
  },
  mixins: [mixinFormatPrice],
  name: 'totalAmount',
  props: {
    getTotalPrice: Number
  },
  computed: {
    getTotalPriceFinal () {
      let {getTotalPrice, shippingFee} = this
      return getTotalPrice + shippingFee
    }
  }
}
</script>

<style></style>
