import axiosInstance from "../api";
import store from "../store"
class AuthService {
    static registration(email, password, name)
    {   
        return new Promise((resolve, reject) => { 
            return axiosInstance.post("/registration", { email, password, name }).then((res) => {
                if (res.data && res.data.user) {
                    localStorage.setItem("x-access-token", res.data.accessToken)
                    store.commit("setUser", res.data.user)
                    resolve(res.data.user)
                } else {
                    reject("errorr!")
                }
            })
        })
    }

    static login(email, password)
    {
        return new Promise((resolve, reject) => {
            return axiosInstance.post("/login", { email, password }).then((res) => {
                if (res.data && res.data.user) {
                    localStorage.setItem("x-access-token", res.data.accessToken)
                    store.commit("setUser", res.data.user)
                    resolve(res.data.user)
                } else {
                    reject("errorr!")
                }
            })
        })
    }
}


export default AuthService