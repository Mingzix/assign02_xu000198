import Vue from "vue";
import Vuex from "vuex";
import axiosAuth from "./axios-auth";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    error: ""
  },
  mutations: {
    AUTH_USER(state, userData) {
      state.idToken = userData.token;
      state.uerId = userData.userId;
    },
    SET_ERROR(state, errorMessage) {
      state.error = errorMessage;
    },
    //create click action step 4
    EMPTY_ERROR(state) {
      state.error = "";
    }
  },
  actions: {
    signUp({ commit }, authData) {
      axiosAuth
        .post(
          //complete the url with axios-auth.js
          //accounts:signUp?key=[API_KEY]
          "accounts:signUp?key=AIzaSyAaP9b6BvQkOqun346IUxY-8nofd7jLHwI",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          console.log(res);
          //saving the auth info in the state
          commit("AUTH_USER", {
            token: res.data.idToken,
            userID: res.data.localId
          });
          //Local storage
          const now = new Date();

          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data.error.message);
            commit("SET_ERROR", error.response.data.error.message);
          }
        });
    }
  },
  clearError({ commit }) {
    commit("EMPTY_ERROR");
  },
  getters: {
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
});
