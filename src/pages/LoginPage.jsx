import { DefaultLayout, SubnetLayout } from "~/layout";
import { Link } from "react-router-dom";
import { publicRouter as LinkItems } from "~/routers";
const Login = () => {
    return (
        <>
            <SubnetLayout>
                {LinkItems.map((link, index) => {
                    const textNode = link.path === "/" ? "home" : link.path.slice(1, link.path.length);
                    return (
                        <Link key={index} to={link.path}>
                            {textNode}
                        </Link>
                    );
                })}
            </SubnetLayout>
        </>
    );
};
export default Login;
