import axios from "axios";
import { base_url, student, headers } from "../constants/constants";

export const getProfileToChoose = (saveData) => {
  axios
    .get(`${base_url}/${student}/person`)
    .then(response => {
      saveData(response.data.profile);
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

export const choosePerson = (person, choice) => {
  const body = {
    "id": person.id,
    "choice": choice
  }
  axios
    .post(`${base_url}/${student}/choose-person`, body, headers)
    .then(response => {
      if (choice) alert(`Você curtiu ${person.name} ;)`)
      else alert("Thank you, next ;(")
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