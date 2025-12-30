import { createContext, useContext, useMemo, useState } from "react";

export const AuthenContext = createContext();
const AuthenProvider = ({ children }) => {
    const [isAuthen, setIsAuthen] = useState(null);

    const login = (info) => setIsAuthen(info);
    const logout = () => setIsAuthen(null);
    const values = useMemo(() => ({ isAuthen, setIsAuthen, login, logout }), [isAuthen]);
    return <AuthenContext.Provider value={values}>{children}</AuthenContext.Provider>;
};

export default AuthenProvider;
export const useAuthenContext = () => useContext(AuthenContext);
