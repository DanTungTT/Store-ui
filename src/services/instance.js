import axios from "axios"


const baseURL = import.meta.env.VITE_URL_BASE

const instance = axios.create({
    baseURL,
    headers: {'X-Custom-Header': 'foobar'}  
})
export const get = async (path) => {
    const res = await instance.get(path); 
    return res.data
}
export default instance;