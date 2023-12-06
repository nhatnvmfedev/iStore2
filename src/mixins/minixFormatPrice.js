export const mixinFormatPrice = {
  methods: {
    formatPrice (number) {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(number)
    }
  }
}
