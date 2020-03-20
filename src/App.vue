<template>
  <div id="app">
    <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
  import Tabbar from './components/tabbar.vue'
export default {
  name: 'App',
  components:{
    Tabbar
    
  },
  beforeCreate(){
    this.$router.push("/listen")
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
