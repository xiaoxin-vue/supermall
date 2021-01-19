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

// 2.时间戳格式化
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};