import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
});

export default {
  getEvents() {
    // eslint-disable-next-line prettier/prettier
    return apiClient.get("/events");
  },
  getEvent(id) {
    // eslint-disable-next-line prettier/prettier
    return apiClient.get("/events/" + id);
  },
};
