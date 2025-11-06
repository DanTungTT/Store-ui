import { Link } from "react-router-dom";
import { publicRouter as LinkItems } from "~/routers";
const Content = () => {
    return (
        <>
            <main className="col-span-9">
                {LinkItems.map((link, index) => {
                    const textNode = link.path === "/" ? "home" : link.path.slice(1, link.path.length);
                    return (
                        <Link key={index} to={link.path}>
                            {textNode}
                        </Link>
                    );
                })}
            </main>
        </>
    );
};
export default Content;
