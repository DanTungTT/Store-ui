import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {'X-Custom-Header': 'foobar'}  
})
export const get = async (path) => {
    const res = await instance.get(path); 
    return res.data
}
export default instance;