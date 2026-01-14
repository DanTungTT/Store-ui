import { useEffect, useState } from "react";
import * as request from "./instance";

const api = (path) => {
    const [data, setData] = useState([])
    useEffect(()=> {
        request.get(path) 
            .then((res) => res)
            .then((data) => {
                setData(data)
            });
    }, [path])
    return data
}
 
export default api;