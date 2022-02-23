import axios from "axios"
import axiosInstance from "."

const setupJWTInterceptors = (store) => {
    store
    axiosInstance.interceptors.request.use(
        (config) => {

            config.headers.Authorization = `Bearer ${localStorage.getItem("x-access-token")}`

            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )
    
    axiosInstance.interceptors.response.use(
        (config) => {
            return config
        },
        error => {
            if (error.response.status === 401) {
                axios.post("http://127.0.0.1:5000/api/auth/refresh").then((res) => {

                    localStorage.setItem("x-access-token", res.data.accessToken)

                    store.commit('setUser', res.data.user)

                })
            }
            return Promise.reject(error.response)
        }
    )
}


export default setupJWTInterceptors

