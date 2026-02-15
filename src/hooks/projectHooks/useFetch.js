import { useEffect, useState } from "react";
import * as request from "~/api/instance";

const useFetch = (path, query = null) => {
   const [data, setData] = useState([])
    useEffect(()=> {
        try {
            request.get(path) 
                .then((data) => {
                    setData(data)
                });
        } catch (error) {
            throw new Error ("fetch data err!")
        }
    }, [path])
    return data
}

export default useFetch;