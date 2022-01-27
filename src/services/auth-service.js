import axiosInstance from "../api";
class AuthService {
    static async registration(email, password, name)
    {    
        return axiosInstance.post("/registration", { email, password, name })
    }

    static async login(email, password)
    {
        return axiosInstance.post("/login", { email, password })
    }
}


export default AuthService