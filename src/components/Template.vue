<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div>
        <label >Input:</label><input type="text" v-model="input">
        <button v-on:click="reverse">Reverse string</button>
        <h1>{{fullName}}</h1>
        <h1>---------------</h1>
        <label> First Name: </label> <input type="text" v-model="user.firstName">
        <label> Last Name: </label> <input type="text" v-model="user.lastName">
        <button v-on:click="greet"> Нажми на меня</button>
        <h2>{{input}}</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Template',
  title: 'Template',
  data () {
    return {
      msg: 'Template View',
      input: 'input',
      counter: 0,
            user: {
                firstName: 'Ivan',
                lastName: 'Ivanov'
            }
    }
  },
  methods:{
    reverse: function(){
      this.input = this.input.split('').reverse('').join('');
    },
    greet : function() {
            alert('Hello!');
        },
    enterTap : function () {
            alert('you typed enter button!');
        }
  },
  computed: {
        fullName: function() {
            return this.user.firstName + ' ' + this.user.lastName
         }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
