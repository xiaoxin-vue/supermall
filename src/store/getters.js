const getters = {
  cartList(state) {
    return state.cartList;
  },
  cartListLength(state) {
    return state.cartList.length;
  },
  checkedCartListLength(state) {
    return state.cartList.filter(item => item.checked === true).length;
  },
  totalPrice(state) {
    return state.cartList.filter(item => item.checked).reduce((prev, cur) => {
      return prev + cur.price * cur.count;
    }, 0).toFixed(2)
  },
  isSelectAll(state, getters) {
    if(!getters.cartList.length) {
      return false;
    } else {
      // return !getters.cartList.filter(item => item.checked === false).length;
      return !getters.cartList.find(item => item.checked === false);
    }
  },
  isNotSelectAll(state) {
    return state.cartList.filter(item => item.checked === true).length === 0;
  }
}
export default getters