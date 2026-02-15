import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import { publicRouter as LinkItems } from "~/routers";
import useFetch from "../../hooks/projectHooks/useFetch";

// https://api.escuelajs.co/api/v1/categories
const Content = () => {
    const rs = useFetch("\products");

    return (
        <>
            <main className="col-span-9">
                <div className="h-full">
                    <ul>
                        {rs.map((product, index) => {
                            return (
                                <div key={product.id}>
                                    <img src={product.images} alt="" width="150px" /> {product.title}
                                </div>
                            );
                        })}
                    </ul>
                </div>
                {/* {LinkItems.map((link, index) => {
                    const textNode = link.path === "/" ? "home" : link.path.slice(1, link.path.length);
                    return (
                        <Link key={index} to={link.path}>
                            {textNode}
                        </Link>
                    );
                })} */}
            </main>
        </>
    );
};
export default Content;
