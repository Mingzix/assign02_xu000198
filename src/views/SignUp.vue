<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="name" id="name" requried>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" requried>
      </div>
      <div>
        <label for="pass">Password</label>
        <input type="password" v-model="pass" id="pass" requried>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      pass: ""
    };
  },
  //add submit
  methods: {
    ...mapActions(["signUp"]),
    onSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.pass
      };
      //call signup and send to formData
      this.signUp(formData);
    }
  }
};
</script>

<style>
form {
  padding: 20px;
  background: white;
  box-shadow: 0px 0px 6px grey;
  border-radius: 20px;
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
}

input,
button {
  padding: 5px 10px;
  margin: 5px 0;
}
</style>