import { Link } from "react-router-dom";

import HomeFeatureItem from "./HomeFeatureItem";
import useFetch from "~/hooks/projectHooks/useFetch";

const HomeFeatureWrapper = () => {
    const homeFeatureItems = useFetch("/homeFeatures");
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
