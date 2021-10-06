import axios from "axios";

const clientUser = axios.create({
  baseURL: 'https://api.github.com/users'
})

export default clientUser