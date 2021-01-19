<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="info-param1" v-for="(table, index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param2">
      <tr v-for="(item, index) in paramInfo.infos">
        <td class="info-param-key">{{item.key}}</td>
        <td class="info-param-value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
  font-size: 14px;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param1 tr td {
  width: 42px;
}

.info-param2 {
  border-top: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param2 .info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 110px;
}

.info-param2 .info-param-value {
  color: #eb4868;
}
</style>