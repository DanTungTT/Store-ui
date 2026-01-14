import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(()=> (window.matchMedia(query).matches));
    useEffect(()=> {
        const media = window.matchMedia(query)
        media.addEventListener("change", (e) => {
            setMatches(e.matches)
        })
    }, [matches])
    return matches
}
 
export default useMediaQuery;