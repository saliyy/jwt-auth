import axiosInstance from "."

const setupJWTInterceptors = (store) => {
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
            const originalRequest = error.config

            if (error.response.status === 401) {
                if (error.config.isRetry) {
                    window.location = '/login'
                }
        
                axiosInstance.post("api/auth/refresh").then((res) => {
                    originalRequest.isRetry = true

                    localStorage.setItem("x-access-token", res.data.accessToken)

                    store.commit('setUser', res.data.user)

                    return axiosInstance.request(originalRequest)

                }).catch(() => {
                    window.location = '/login'
                })
            }
            return Promise.reject(error.response)
        }
    )
}


export default setupJWTInterceptors

