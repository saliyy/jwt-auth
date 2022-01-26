import axiosInstance from "."

const setup = (store) => {
    console.log(store)
    axiosInstance.interceptors.request.use(
        (config) => {
            return config
        },
        (error) => {
            Promise.reject(error)
        }
    ) 
}


export default setup

