<template>
  <div class="bottom">
    <router-link tag='div' class="bottom1" to="/listen">听吧</router-link>
    <router-link tag='div' class="bottom1" to="/mine">我的</router-link>
    <router-link tag='div' class="bottom1" to="/play">播放</router-link>
    <router-link tag='div' class="bottom1" to="/find">发现</router-link>
    <router-link tag='div' class="bottom1" to="/account">账号</router-link>
  </div>
</template>

<script>
  export default{
    name:'tabbar'
  }
</script>

<style lang="scss" scoped="scoped">
.bottom{
  width: 100%;
  height: 3.75rem;
  background: pink;
  position: fixed;
  bottom: 0;
  display: flex;
  .bottom1{
    flex: 1;
  }
}
</style>
