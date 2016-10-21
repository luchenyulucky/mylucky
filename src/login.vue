<template>
  <div id="one">
   用户名：<input type="text" name="username" v-model="username">
   密码：<input type="password" name="password" v-model="password">
   <button v-on:click="login">登陆</button>
    
  </div>
</template>

<script>
  export default{
    data(){
      return {
        username:"",
        password:""
      }
    },
    methods:{
      login:function(){
        if(this.username=="admin" && this.password=="abc"){
          this.$router.go("/home")
        }
      }
    }
  }
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
