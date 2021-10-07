import axios from "axios";
import { base_url, headers } from "../constants/constants"

export const getMatches = (saveData) => {
  axios
    .get(`${base_url}/matches`)
    .then(response => saveData(response.data.matches))
    .catch(error => console.log(error))
}

export const getProfileToChoose = (saveData) => {
  axios
    .get(`${base_url}/person`)
    .then(response => saveData(response.data.profile))
    .catch(error => console.log(error.message))
}

export const choosePerson = (id, choice) => {
  const body = {
    "id": id,
    "choice": choice
  }

  axios
    .post(`${base_url}/choose-person`, body, headers)
    .then(response => console.log("Deu match:", response.data.isMatch))
    .catch(error => console.log(error.message))
}

export const clearMatches = () => {
  axios
    .put(`${base_url}/clear`, headers)
    .then(response => console.log(response.data.isMatch))
    .catch(error => console.log(error.message))
}