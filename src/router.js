import Vue from "vue";
import Router from "vue-router";
import SignUp from "./views/SignUp.vue";
import Dashboard from "./views/Dashboard.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "signup",
      component: SignUp
    },
    {
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Dashboard
    }
  ]
});
