<template>

  
  <v-app>  
    <TopBar />
    <v-main> 
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import TopBar from './components/TopBar.vue'
export default {
  components: {
    TopBar
  }
}
</script>
<style>

</style>
