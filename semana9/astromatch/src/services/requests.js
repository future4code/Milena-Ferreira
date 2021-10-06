import axios from "axios";
import { base_url, student, headers } from "../constants/constants";

export const getProfileToChoose = (setStateToData) => {
  axios
    .get(`${base_url}/${student}/person`)
    .then(response => {
      setStateToData(response.data.profile);
      console.log(response.data.profile)
    })
    .catch(error => {
      console.log(error);
    })
}

export const getMatches = () => {
  axios
    .get(`${base_url}/${student}/matches`)
    .then(response => {
      console.log("GET MATCHES", response);
    })
    .catch(error => {
      console.log(error);
    })
}

export const choosePerson = (id, choice) => {
  const body = {
    "id": id,
    "choice": choice
  }

  axios
    .post(`${base_url}/${student}/choose-person`, body, headers)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
}

export const clearAppConfigs = () => {
  axios
    .put(`${base_url}/${student}/clear`, headers)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
}