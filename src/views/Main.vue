<template>
  <div>
    <Header/>
      <v-container  ma-0 pa-0>
        <v-row class="mb-6">
          <v-col cols="2" md="3">
            <MyNavigationDrawer/>
          </v-col>
          <v-col>
            <router-view/>
          </v-col>
        </v-row>
    </v-container>
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

<style scoped>
.main-row {
   background-color: #9dc6df;
   height: 100%;
}
</style>>
