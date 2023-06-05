<template>
  <div class="page-wrapper">
    <statusColumn v-for="segment in currentData" 
    :segmentName="segment.type" 
    :segmentCarts="segment.carts" 
    :key="index"/>
  </div>
</template>

<script>
import statusColumn from './components/status-column.vue';
import { getListDeals } from './api/api'
export default {
  name: 'App',
  components: {
    statusColumn
  },
  data() {
    return {
      currentData:[
          {
              type:'Неразобранное',
              carts:[]
          },{
              type:'Проценка',
              carts:[]
          },{
              type:'Перезвонить',
              carts:[]
          },{
              type:'Запись',
              carts:[]
          },{
              type:'Заказ',
              carts:[]
          },{
              type:'Успешно реализовано',
              carts:[]
          },{
              type:'Отказ',
              carts:[]
          },
      ]
    }
  }, 
  async mounted() {
    const listDeals = await getListDeals();
    this.currentData.forEach(segment => {
      listDeals.forEach(deal => {
        segment.type === deal.STATUS_NAME ? segment.carts.push(deal) : false;
      })
    });
  }
}
</script>
<style scoped>
  .page-wrapper{
    display: flex;
    justify-content: space-between;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>

