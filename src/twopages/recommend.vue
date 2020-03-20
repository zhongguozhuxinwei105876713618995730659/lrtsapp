<template>
  <div class="banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in tableData" :key="item.id"><img :src="item.img" alt="" style="width: 100%;"></mt-swipe-item>
      <!-- <mt-swipe-item><img src="" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="" alt=""></mt-swipe-item> -->
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import Vue from 'vue'
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default{
    name:'Recommend',
    data() {
      return {
        tableData: []
      }
    },
    async created(){
      this.tableData = await this.$ajax.get("../static/recommendbaner.json")
      console.log(this.tableData)
    },
  }
</script>

<style scoped="">
  .banner{
    width: 90%;
    height: 9.8rem;
    margin: auto;
    background: pink;
  }
</style>
