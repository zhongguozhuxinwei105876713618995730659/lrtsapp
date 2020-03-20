<template>
  <div>
    <div class="top">
      <router-link tag='div' class="top1" to="/listen/recommend">推荐</router-link>
      <router-link tag='div' class="top1" to="/listen/publish">出版</router-link>
      <router-link tag='div' class="top1" to="/listen/original">原创</router-link>
      <router-link tag='div' class="top1" to="/listen/program">节目</router-link>
      <router-link tag='div' class="top1" to="/listen/children">儿童</router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name:'listen'
  }
</script>

<style scoped="scoped">
  .top{
display: flex;
  }
  .top1{
    flex: 1;
   height: 2.5rem;
   text-align: center;
   line-height: 2.5rem;
  }
</style>
