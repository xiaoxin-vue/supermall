const getters = {
  cartList(state) {
    return state.cartList;
  },
  cartListLength(state) {
    return state.cartList.length;
  }
}
export default getters