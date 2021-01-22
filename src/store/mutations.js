import { ADD_COUNTER,  ADD_TO_CART} from './mutation-types'

const mutations = {
  // muutations的唯一目的就是修改state中的状态，其中的每一个方法尽可能完成的事情比较单一
  [ADD_COUNTER](state, oldProduct) {
    oldProduct.count += 1;
  },
  [ADD_TO_CART](state, product) {
    state.cartList.push(product);
  }
}
export default mutations