import axios from "axios"

const setup = (store) => {
    console.log(store)
    axios.interceptors.request.use(
        (config) => {
            console.log(config)
        }
    ) 
}


export default setup

