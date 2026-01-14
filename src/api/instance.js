import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
  
    headers: {'X-Custom-Header': 'foobar'}  
})
export const get = async (path) => {
    const res = await instance.get(path); 
    return res.data
}
export default instance;