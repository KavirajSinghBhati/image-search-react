import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID OOdzqqeRhYIR1uWqQkcfluh-3X5CelDs7mO2zLFAgP4",
  },
});
