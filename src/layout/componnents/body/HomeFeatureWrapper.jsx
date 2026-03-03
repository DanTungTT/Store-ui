import { Link } from "react-router-dom";

import HomeFeatureItem from "./HomeFeatureItem";

const homeFeatures = [
    {
        id: 1,
        "react-router": "/hang-quoc-te",
        img: "src/assets/img/body/homeFeatures/hang-quoc-te/hangQuocTe.png",
        title: "Hàng Quốc Tế",
    },
    {
        id: 2,
        "react-router": "/seo-xu-li",
        img: "src/assets/img/body/homeFeatures/seo-xu-li/seoXuLi.png",
        title: "Seo Xử lí",
    },

    {
        id: 3,
        "react-router": "/deal-hot",
        img: "src/assets/img/body/homeFeatures/flash-seo/flashSeo.png",
        title: "Deal Hot Giờ vàng",
    },
    {
        id: 4,
        "react-router": "/seo-style",
        img: "src/assets/img/body/homeFeatures/seo-style/seoStyle.png",
        title: "Seo Style Voucher 30%",
    },
    {
        id: 5,
        "react-router": "/khach-hang-than-thiet",
        img: "src/assets/img/body/homeFeatures/khach-hang-than-thiet/khachHangThanThiet.png",
        title: "Khách hàng thân thiết",
    },
    {
        id: 6,
        "react-router": "/ma-giam-gia",
        img: "src/assets/img/body/homeFeatures/ma-giam-gia/maGiamGia.png",
        title: "Mã giảm giá",
    },
];
const HomeFeatureWrapper = () => {
    return (
        <>
            <ul className="flex justify-evenly p-10">
                {homeFeatures.map((homeFeatureItem, index) => {
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
