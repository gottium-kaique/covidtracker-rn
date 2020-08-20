import axios from "axios"

const api = axios.create({
    baseURL: "https://covid19-api.org/api/status/",
})

export default api