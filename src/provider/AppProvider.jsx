import { createContext } from "react";

import LayoutProvider from "./LayoutProvider";
import AuthenProvider from "./AuthenProvider";
import NameProvider from "./NameProvider";

const AppContext = createContext();
const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={null}>
            <AuthenProvider>
                <NameProvider>
                    <LayoutProvider>{children}</LayoutProvider>
                </NameProvider>
            </AuthenProvider>
        </AppContext.Provider>
    );
};

export default AppProvider;
