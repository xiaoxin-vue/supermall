import { ADD_COUNTER,  ADD_TO_CART, INCREASE, DECREASE, CHECKED_ALL, CHANGE_CHECKED} from './mutation-types'

const mutations = {
  // muutations的唯一目的就是修改state中的状态，其中的每一个方法尽可能完成的事情比较单一
  [ADD_COUNTER](state, oldProduct) {
    oldProduct.count += 1;
  },
  [ADD_TO_CART](state, product) {
    state.cartList.push(product);
  },
  [INCREASE](state, iid) {
    // for(let k in state.cartList) {
    //   if(state.cartList[k].iid === iid) {
    //     state.cartList[k].count++
    //   }
    // }
    let itemIid = state.cartList.find(item => item.iid === iid);
    itemIid.count++;
  },
  [DECREASE](state, iid) {
    // for(let k in state.cartList) {
    //   if(state.cartList[k].iid === iid) {
    //     if(state.cartList[k].count > 1) {
    //       state.cartList[k].count--
    //     }
    //   }
    // }
    let itemIid = state.cartList.find(item => item.iid === iid);
    if(itemIid.count > 1) {
      itemIid.count--;
    }
  },
  [CHANGE_CHECKED](state, iid) {
    let itemIid = state.cartList.find(item => item.iid === iid);
    itemIid.checked = !itemIid.checked;
  },
  [CHECKED_ALL](state, isSelectAll) {
    if(isSelectAll === true) {
      state.cartList.forEach(item => {
        item.checked = false;
      });
    } else {
      state.cartList.forEach(item => {
        item.checked = true;
      });
    }
  }
}
export default mutations