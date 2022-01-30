import axiosInstance from "."


const setupJWTInterceptors = (store) => {
    store
    axiosInstance.interceptors.request.use(
        (config) => {
            config.headers.Authorization = `Bearer ${localStorage.getItem("x-access-token")}`
            return config
        },
        (error) => {
            Promise.reject(error)
        }
    )
    
    axiosInstance.interceptors.response.use(
        (config) => {
            return config
        },
        (error) => {
            Promise.reject(error)
        }
    )
}


export default setupJWTInterceptors

