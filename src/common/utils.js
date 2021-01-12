// 1.函数防抖，防止某一函数频繁执行，使其在规定的时间后执行这一函数
export function debounce(func, wait) {
  let timer = null;
  return function (...args) {
    if(timer) {
      clearTimeout(timer);
    };
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait)
  }
}