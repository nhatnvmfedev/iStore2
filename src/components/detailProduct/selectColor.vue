<template>
  <td>
    <div class="mt-1">
      <div @click="selectedColor(index)" v-for="(item, index) in listStyle" :key="index" class="form-check form-check-inline pl-0">
        <input
          type="radio"
          class="form-check-input"
          v-bind:id="item.color"
          name="materialExampleRadios"
          :checked="index == 0"
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          v-bind:for="item.color"
          >{{item.color}}</label
        >
      </div>
    </div>
  </td>
</template>

<script>
export default {
  name: 'selectColor',
  props: {
    listStyle: Array
  },
  methods: {
    selectedColor (data) {
      this.$emit('selectedColorDetail', data)
    }
  }
}
</script>

<style></style>
