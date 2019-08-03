<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Name: {{name}}</p>
    <p>You have sign up your email {{email}}with our website</p>
  </div>
</template>
<script>
export default {
  name: "Dashboard",

  props: ["name", "email"]
};
</script>