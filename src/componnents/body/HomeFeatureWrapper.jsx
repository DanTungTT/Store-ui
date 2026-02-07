import { useEffect } from "react";
import { Link } from "react-router-dom";

import api from "~/api/api";
import HomeFeatureItem from "./HomeFeatureItem";

const HomeFeatureWrapper = () => {
    const homeFeatureItems = api("/homeFeatures");

    return (
        <>
            <ul className="flex justify-evenly p-10">
                {homeFeatureItems.map((homeFeatureItem, index) => {
                    return (
                        <li key={homeFeatureItem.id}>
                            <Link to={homeFeatureItem["react-router"]}>
                                <HomeFeatureItem {...homeFeatureItem} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default HomeFeatureWrapper;
