<template>
  <div>
    <p class="pt-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
      error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.
      Distinctio, officia quis dolore quos sapiente tempore alias.
    </p>
    <div class="table-responsive">
      <table class="table table-sm table-borderless mb-0">
        <tbody>
          <tr>
            <th class="pl-0 w-25" scope="row"><strong>Memory</strong></th>
            <td>256 Gb</td>
          </tr>
          <tr>
            <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
            <td>{{color}}</td>
          </tr>
          <tr>
            <th class="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
            <td>USA, Europe</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'descriptionDetail',
  props: {
    color: String
  }
}
</script>

<style></style>
