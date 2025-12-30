import { createContext, useContext, useMemo, useState } from "react";
export const NameContext = createContext();
const NameProvider = ({ children }) => {
    const [name, setName] = useState();
    const values = useMemo(() => ({ name, setName }), [name]);
    return <NameContext.Provider value={values}>{children}</NameContext.Provider>;
};

export default NameProvider;
export const useNameContext = () => useContext(NameContext);
