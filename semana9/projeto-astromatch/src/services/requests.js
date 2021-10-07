import axios from "axios";
import { base_url, headers } from "../constants/constants"

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
    .then(response => console.log(response))
    .catch(error => console.log(error.message))
}