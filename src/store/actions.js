import { ADD_COUNTER,  ADD_TO_CART} from './mutation-types'

const actions = {
  addCart({state, commit}, product) {
    // 1.查找之前数组中是否有该商品
    let oldProduct = state.cartList.find(k => product.iid === k.iid);

    // 2.判断数组中是否有商品，oldProduct保存的是指针
    if(oldProduct) {
      commit(ADD_COUNTER, oldProduct);
    } else {
      product.count = 1;
      commit(ADD_TO_CART, product);
    }
  }
}
export default actions