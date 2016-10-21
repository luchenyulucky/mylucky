<template>
  <div id="one">
   <h1>home Vue</h1>
   <router-view></router-view>
   <button v-link="{name:'one',params:{id:0}}">One Page</button>
    <button v-link="{path:'/home/twoPage'}">Two Page</button>
    
  </div>
</template>

<script>

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
