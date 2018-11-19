<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link>  -->
      <!-- <router-link to="/about">About</router-link> -->
      <Navbar/>
      <hr>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">G<i class="fas fa-smile-wink"></i>-BLOG <i class="fab fa-vuejs"></i></h1>
          <p class="lead">The Progressive JavaScript Framework.</p>
        </div>
      </div>
      
    <!-- </div> -->
    <router-view/>
    <footerpage/>
  </div>
</template>

<script>
import Navbar from '@/components/Header/navbar.vue'
import footerpage from '@/components/Footer/footer.vue'


export default {
  name: "App",
  components: {
    Navbar, footerpage
  },
  data(){
    return{
      isLogin: false
    }
  },
  methods: {

  }
  
}
</script>









<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
} 

 #nav a.router-link-exact-active {
  color: #42b983;
}



</style>
