import axios from "axios";
const instance = axios.create({
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY],<-- we can past the API key in this link, if we only use https://identitytoolkit.googleapis.com/v1/ as shown below,we should complete the rest part in the store.js
  baseURL: "https://identitytoolkit.googleapis.com/v1/"
});
export default instance;
