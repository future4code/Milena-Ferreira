import { base_url_users } from "../constants/urls";
import { headers_content } from "../constants/headers";
import axios from "axios";
import { goToFeed } from "../router/coordinator";

export const login = (body, clear, history, setRightButtonText) => {
  axios
    .post(`${base_url_users}/login`, body, headers_content)
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
    .post(`${base_url_users}/signup`, body, headers_content)
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