import axiosInstance from "../api";
import store from "../store"

class AuthService {
    static registration(email, password, name)
    {   
        return new Promise((resolve, reject) => { 
            return axiosInstance.post("api/auth/registration", { email, password, name }).then((res) => {
                if (res.data && res.data.user) {
                    localStorage.setItem("x-access-token", res.data.accessToken)
                    store.commit("setUser", res.data.user)
                    resolve(res.data.user)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    }

    static login(email, password)
    {
        return new Promise((resolve, reject) => {
            return axiosInstance.post("auth/login", { email, password }).then((res) => {
                if (res.data && res.data.user) {
                    localStorage.setItem("x-access-token", res.data.accessToken)
                    store.commit("setUser", res.data.user)
                    resolve(res.data.user)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    }
}


export default AuthService