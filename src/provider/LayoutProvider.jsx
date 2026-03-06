import { createContext, useState } from "react";
import { useContext } from "react";

export const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
    const [titleHeader, setTitleHeader] = useState();
    const [titleHelp, setTitleHelp] = useState("Bạn cần giúp đỡ?");
    const [layoutFooter, setLayoutFooter] = useState("");

    const values = { titleHeader, setTitleHeader, titleHelp, setTitleHelp, layoutFooter, setLayoutFooter };

    return <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;

export const useLayoutContext = () => useContext(LayoutContext);
