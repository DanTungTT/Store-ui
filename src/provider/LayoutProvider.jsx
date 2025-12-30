import { createContext, useState } from "react";
import { useContext } from "react";

export const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
    const [titleHeader, setTitleHeader] = useState();
    const [titleHelp, setTitleHelp] = useState("Bạn cần giúp đỡ?");
    const [LayoutFooter, setLayoutFooter] = useState("");
    return (
        <LayoutContext.Provider
            value={{ titleHeader, setTitleHeader, titleHelp, setTitleHelp, LayoutFooter, setLayoutFooter }}
        >
            {children}
        </LayoutContext.Provider>
    );
};

export default LayoutProvider;

export const useLayoutContext = () => useContext(LayoutContext);
