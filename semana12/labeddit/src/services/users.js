import { base_url } from "../constants/urls";
import axios from "axios";
import { goToFeed } from "../router/coordinator";

const headers = {
  headers: {
    "Content-Type": "application/json"
  }
}

export const login = (body, clear, history, setRightButtonText) => {

  axios
    .post(`${base_url}/users/login`, body, headers)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      clear();
      goToFeed(history);
      setRightButtonText("Logout");
    })
    .catch(error => {
      console.log(error.response);
    })
}

export const signUp = (body, clear, history, setRightButtonText) => {
  axios
    .post(`${base_url}/signup`, body, headers)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      clear();
      goToFeed(history);
      setRightButtonText("Logout");
    })
    .catch(error => {
      console.log(error.response);
    })
}