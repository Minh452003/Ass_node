import axios from "axios";

const instance = axios.create({
    baseURL: "https://node-porfolio.onrender.com/api"
})
export default instance