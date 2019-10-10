<template>
  <div class="main">
    <Header/>
     <router-view/>
  </div>
</template>

<script>

import Header from "@/components/Header"

export default {
  name: 'Main',
  data () {
    return {
        msg: "main"
    }
  },
  components: {
    Header
  }
}
</script>
