import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HomeFeatureWrapper from "./HomeFeatureWrapper";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Banner from "./Banner";

import "./body.css";
const Body = () => {
    const [checkImg, setcheckImg] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((res) => res.json())
            .then((data) => setcheckImg(data));
    }, []);

    const getImg = (images) => {
        return (
            <>
                {images.map((img, index) => (
                    <img src={img} />
                ))}
            </>
        );
    };
    return (
        <>
            <div className="container-page grid grid-cols-12 gap-x-[2px] ">
                {/* banner slider */}
                <div className="col-span-12 bg-[var(--bg-banner-)]  pb-10">
                    <div className="container-page grid grid-cols-12 mt-[3rem] ">
                        <Banner className="col-span-12" />
                    </div>

                    {/* homefeature */}
                    <div>
                        <HomeFeatureWrapper />
                    </div>
                </div>
                <div className="h-[10rem] col-span-12"></div>
                {checkImg.map((item, index) => {
                    return getImg(item.images);
                })}

                {/* <Sidebar></Sidebar>
                <Content></Content> */}
            </div>
        </>
    );
};
export default Body;
