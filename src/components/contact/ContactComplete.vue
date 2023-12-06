<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="text-center">
          <h2 class="mb-3">THANK YOU!</h2>
          <h3 class="text-success"><font-awesome-icon :icon="['fas', 'check']" /></h3>
          <p>Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today.<br /> Thanks for being you.</p>
          <router-link to="/" class="btn btn-outline-success mt-3">Go to home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactComplete'
}
</script>

<style scoped>
  h2 {
    font-size: 32px;
    font-weight: bold
  }
  h3 {
    font-size: 100px;
  }
</style>
