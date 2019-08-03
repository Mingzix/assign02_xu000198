<template>
  <div id="app">
    <h1>State Manager</h1>
    <div id="nav">
      <router-link :to="{ name: 'signup' }">Sign Up</router-link>
      <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
    </div>
    <div v-if="error" @click="clearError" class="error">{{ error }}</div>

    <router-view/>
  </div>
</template>
<script>
//create click action step 2
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["error"]),
    ...mapGetters({
      auth: "isAuthenticated"
    })
  },
  //create click action step 2
  methods: {
    ...mapActions(["clearError"])
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
