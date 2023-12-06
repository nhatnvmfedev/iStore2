export const mixinFindIndex = {
  methods: {
    findIndex (id) {
      let listProducts = this.listProducts
      let valIndex
      listProducts.forEach(function (item, index) {
        if (item.id === id) {
          valIndex = index
        }
      })
      return valIndex
    }
  }
}
