import { Navigate } from "react-router-dom";
import { useAuthenContext } from "~/provider/AuthenProvider";

const GuestRouter = ({ children }) => {
    const { isAuthen } = useAuthenContext();
    if (isAuthen) return <Navigate to="/" />;
    return children;
};
export default GuestRouter;
