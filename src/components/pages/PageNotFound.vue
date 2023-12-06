<template>
  <div class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="col-sm-10 text-center mx-auto">
            <div class="four_zero_four_bg">
              <h1 class="text-center ">404</h1>
            </div>
            <div class="contant_box_404">
              <h3 class="h2">
                Look like you're lost
              </h3>
              <p>the page you are looking for not avaible!</p>
              <router-link to="/" class="btn btn-success mt-3">Go to Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style>
  /*======================
      404 page
  =======================*/

  .page_404 {
    padding: 40px 0;
    background: #fff;
  }

  .page_404 img {
    width: 100%;
  }

  .four_zero_four_bg {
    background-image: url('~@/assets/404.gif');
    height: 400px;
    background-position: center;
  }

  .four_zero_four_bg h1 {
    font-size: 80px;
  }

  .four_zero_four_bg h3 {
    font-size: 80px;
  }

  .contant_box_404 {
    margin-top: -50px;
  }

</style>
