import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Banner from "./Banner";
import HomeFeatureItem from "./HomeFeatureItem";

import "./body.css";
const Body = () => {
    const [homeFeatures, setHomeFeatures] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((res) => res.json())
            .then((data) => setHomeFeatures(data));
    }, []);
    // homeFeatures.map((item, index) => {
    //     console.log(item.images);
    // });
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
            <div className="body-wrapper grid grid-cols-12 gap-x-[2px] ">
                {/* banner slider */}
                <div className="col-span-12 bg-[var(--bg-banner-)]  pb-10">
                    <div className="container-page grid grid-cols-12 mt-[3rem] ">
                        <Banner className="col-span-12" />
                    </div>

                    {/* homeFeatures */}
                    <ul className="container-page flex  justify-evenly mt-[3rem] ">
                        {/* {homeFeatures.map((item, index) => (
                            <li key={item.id} className="cursor-pointer">
                                <Link to={item["react-router"]}>
                                    <HomeFeatureItem {...item} />
                                </Link>
                            </li>
                        ))} */}
                    </ul>
                </div>
                <div className="h-[10rem] col-span-12"></div>
                {homeFeatures.map((item, index) => {
                    return getImg(item.images);
                })}

                {/* <Sidebar></Sidebar>
                <Content></Content> */}
            </div>
        </>
    );
};
export default Body;
