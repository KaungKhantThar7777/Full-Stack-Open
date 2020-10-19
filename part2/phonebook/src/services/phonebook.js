import axios from "axios";

const getAll = () => {
  return axios.get("http://localhost:3001/persons");
};

const create = (newPerson) => {
  return axios.post("http://localhost:3001/persons", newPerson);
};
export default {
  getAll,
  create,
};
