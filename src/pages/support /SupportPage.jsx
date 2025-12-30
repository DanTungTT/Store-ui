import clsx from "clsx";
import { useLayoutContext } from "~/provider/LayoutProvider";
import { useEffect, useState } from "react";

import { SubnetLayout } from "~/layout";
import { SearchInput } from "~/componnents/ui";
import NotificationBannerWrapper from "./componnents/NotificationBannerWrapper";
import CategoryItem from "./componnents/CategoryItem";

import styles from "./supportPage.module.css";
import { home, notiComon, pay, refund, ship, tag, phone } from "~/assets/img/header/support";

const array = [
    {
        img: home,
        title: "Mua Sắm Cùng Shopee",
    },
    {
        img: tag,
        title: "Khuyến Mãi & Ưu Đãi",
    },
    {
        img: pay,
        title: "Thanh Toán",
    },
    {
        img: ship,
        title: "Đơn Hàng & Vận Chuyển",
    },
    {
        img: refund,
        title: "Trả Hàng & Hoàn Tiền",
    },
    {
        img: notiComon,
        title: "Thông Tin Chung",
    },
];

const question = [
    "[Cảnh báo lừa đảo] Mua sắm an toàn cùng Shopee",
    "[Dịch vụ] Cách liên hệ Chăm sóc khách hàng, Hotline, Tổng đài Shopee",
];
const SupportPage = () => {
    const [hiddenNoti, setHiddenNoti] = useState(true);
    const { setTitleHeader, setTitleHelp } = useLayoutContext();

    const handleRemoveNoti = () => {
        setHiddenNoti(false);
    };
    useEffect(() => {
        setTitleHeader("Trung Tâm Trợ Giúp Seo VN");
        setTitleHelp("Seo Policies");
        return () => {
            setTitleHeader("");
            setTitleHelp("");
        };
    }, []);
    return (
        <>
            <SubnetLayout>
                <div className={clsx(styles.search)}>
                    <div className="flex flex-col justify-evenly items-center h-full">
                        {/* greeting */}
                        <div>
                            <h1 className="text-[3.4rem] text-white">Xin chào, Seo có thể giúp gì được cho bạn?</h1>
                        </div>
                        {/* search input */}
                        <div>
                            <SearchInput
                                placeholder="Nhập từ khóa hoặc nội dụng cần tìm"
                                className="w-[80rem] text-[30px] h-[5rem]"
                            />
                        </div>
                    </div>
                </div>
                <main className={clsx(styles.helpContainer)}>
                    {hiddenNoti && <NotificationBannerWrapper onRemoveNoti={handleRemoveNoti} />}

                    <div className="category mt-25 px-40">
                        <div className="headding my-5">
                            <h1 className="text-[2.5rem] font-semibold">Danh mục</h1>
                        </div>
                        <div className="items">
                            <ul className="grid grid-cols-4 gap-6">
                                {array.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <CategoryItem item={item} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    {/* question comon */}
                    <div className="my-20 px-40">
                        <div className="my-5">
                            <h1 className="text-[2.5rem] font-semibold">Câu hỏi thường gặp</h1>
                        </div>
                        <ul>
                            {question.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="py-8 border-y-1 border-dashed border-[#dadada] hover:bg-[#f5f5f5]"
                                    >
                                        <a href="#" className="block text-[var(--default-fontSize-)] text-[1.8rem]">
                                            <span>{item}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* contact */}
                    <div className="contactContainer bg-[#f5f5f5] h-[20rem] mb-10">
                        <div className="h-full flex flex-col justify-center items-center">
                            <div className="contactText pb-5">
                                <h3 className="font-bold">Bạn có muốn tìm thêm thông tin gì không?</h3>
                            </div>
                            <div className="pt-5">
                                <CategoryItem item={{ img: phone, title: "Liên hệ Seo" }} className="w-[24rem]" />
                            </div>
                        </div>
                    </div>
                </main>
            </SubnetLayout>
        </>
    );
};

export default SupportPage;
