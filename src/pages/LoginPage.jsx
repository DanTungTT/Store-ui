import { DefaultLayout, DashboardLayout } from "~/layout";
import { Body } from "~/componnent";
import { Link } from "react-router-dom";
import { publicRouter as LinkItems } from "~/routers";
const Login = () => {
    return (
        <>
            <DashboardLayout>
                {LinkItems.map((link, index) => {
                    const textNode = link.path === "/" ? "home" : link.path.slice(1, link.path.length);
                    return (
                        <Link key={index} to={link.path}>
                            {textNode}
                        </Link>
                    );
                })}
            </DashboardLayout>
        </>
    );
};
export default Login;
