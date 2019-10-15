<template>
  <div class="header">
     <v-app-bar app color="blue">
        <span class="mr-2">ООО "Межрайонные Распределительные Сети"</span>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.mr-2 {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 25px;
  font-style: oblique;
  color:white;  
}
</style>
