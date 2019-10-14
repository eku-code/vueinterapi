<template>
  <div class="main">
    <Header/>
    <v-layout row wrap >
      <MyNavigationDrawer/>
      <router-view/>
    </v-layout>
  </div>
</template>

<script>

import Header from "@/components/Header"
import MyNavigationDrawer from "@/components/MyNavigationDrawer"

export default {
  name: 'Main',
  data () {
    return {
        msg: "main"
    }
  },
  components: {
    Header,
    MyNavigationDrawer
  }
}
</script>
