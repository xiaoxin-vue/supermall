import { ADD_COUNTER,  ADD_TO_CART} from './mutation-types'

const actions = {
  addCart({state, commit}, product) {
    // actions可以执行异步操作之后返回一个Promise
    return new Promise((resolve, reject) => {
      // 1.查找之前数组中是否有该商品
      let oldProduct = state.cartList.find(k => product.iid === k.iid);

      // 2.判断数组中是否有商品，oldProduct保存的是指针
      if(oldProduct) {
        commit(ADD_COUNTER, oldProduct);
        resolve('当前的商品数量+1')
      } else {
        product.count = 1;
        product.checked = true;
        commit(ADD_TO_CART, product);
        resolve('已经加入购物车')
      }
    })
  }
}
export default actions