import axios from "axios"

const baseURL="http://127.0.0.1:5000"


const axiosInstance = axios.create({
    baseURL: baseURL + "/api/",
    headers: {
        "Content-Type" : "applicaction/json"
    }
})

export default axiosInstance

