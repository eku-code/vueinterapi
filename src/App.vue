<template>
  <v-app>
    <v-content class="content">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.content {
   background-color: #9dc6df;
}
</style>