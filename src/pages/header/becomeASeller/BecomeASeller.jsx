import clsx from "clsx";

import { useLayoutContext } from "~/provider/LayoutProvider";
import GuestRouter from "~/routers/GuestRouter";
import { SubnetLayout } from "~/layout";
import { FormLogin, Input } from "~/componnents";
import { Reson, Step, BenefitItem, Following } from "./componnents";

import { liBanerItems, conviceItems, stepItems, benefitItems, follows } from "./data";

import styles from "./becomeASeller.module.css";
import { useEffect } from "react";

const BecomeASeller = () => {
    const { setTitleHeader, setLayoutFooter, setTitleHelp } = useLayoutContext();
    useEffect(() => {
        setTitleHeader("Trở Thành Người Bán");
        setLayoutFooter("footer");
        setTitleHelp("Bạn cần giúp đỡ?");
        return () => {
            setLayoutFooter("");
            setTitleHeader("");
        };
    }, []);
    const inputs = [
        {
            id: "1",
            type: "number",
            name: "number",
            placeholder: "Số điện thoại",
        },
    ];
    return (
        <>
            <GuestRouter>
                <SubnetLayout>
                    <main className={styles.becomeASellerContainer}>
                        {/* banner & register form */}

                        <div className={styles["becomeASellerContainer-register"]}>
                            <div className="container-page flex flex-col justify-between items-center sm:flex-col md:flex-row ">
                                {/* left */}
                                <div className="mt-[10rem] sm:mt-[14rem] sm:ml-5 flex-1">
                                    <div className="headding mb-5 text-center">
                                        <h3 className={clsx(styles.primaryColor, "text-[2.4rem]")}>Shopee Việt Nam</h3>
                                        <h1 className={clsx(styles.primaryColor, "text-[3.3rem]")}>
                                            Trở thành Người bán <br /> ngay hôm nay
                                        </h1>
                                    </div>
                                    <ul className="mt-[3rem] w-[35rem] mx-auto">
                                        {liBanerItems.map((item, index) => {
                                            return (
                                                <li key={index} className="flex my-10">
                                                    <img src={item.icon} alt="icon li" className="w-[5rem] mx-2" />
                                                    <span className={clsx(styles.primaryColor, "text-[1.7rem] mx-2")}>
                                                        {item.title}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                {/* right */}
                                <div className="mt-[8.5rem] mx-auto pb-10 overflow-hidden flex-1">
                                    <FormLogin title="Đăng Ký" clauseAndP inputs={inputs} />
                                </div>
                            </div>
                        </div>

                        <div className="container-page">
                            {/* convice */}
                            <div className={styles.convice}>
                                <div>
                                    {/* header convince */}
                                    <div className="text-center my-20">
                                        <h1 className={clsx(styles.headingColor, "text-[3rem]")}>
                                            TẠI SAO NÊN BÁN HÀNG TRÊN <br />
                                            SHOPEE
                                        </h1>
                                    </div>
                                    {/* reason */}
                                    <div>
                                        {/* item */}
                                        <ul className="grid grid-cols-2  gap-5  my-10 mx-5 sm:grid-cols-2  sm:py-10 sm:my-20 lg:grid-cols-3">
                                            {conviceItems.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Reson {...item} textColor={styles.headingColor} />
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.instrucsion}>
                                <div className={styles.instrucsionContainer}>
                                    {/* header instrucsion */}
                                    <div className="text-[2.5rem] text-center p-10">
                                        <h3>CÁC BƯỚC MỞ CỬA HÀNG TRÊN SHOPEE</h3>
                                    </div>
                                    {/* steps */}
                                    <div>
                                        <ul className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 lg:[&>li:last-child]:col-span-3 xl:grid-cols-4 xl:[&>li:last-child]:col-span-1">
                                            {stepItems.map((el, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Step {...el} className="py-10" />
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="benefit">
                                <div className={styles.benefitContainer}>
                                    {/* benefit header */}
                                    <div className="p-10 my-20">
                                        <h1 className={clsx(styles.headingColor, "text-[2.5rem] text-center")}>
                                            ĐẶC QUYỀN CỦA CÁC NHÀ BÁN HÀNG
                                        </h1>
                                    </div>
                                    {/* benefit items */}
                                    <div>
                                        {/* benefit item */}
                                        <ul className="grid grid-cols-1  place-items-center gap-y-20 md:grid-cols-2 lg:grid-cols-3">
                                            {benefitItems.map((el, index) => {
                                                return (
                                                    <li key={index}>
                                                        <BenefitItem {...el} textColor={styles.headingColor} />
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* following*/}
                            <div className={styles.following}>
                                <div className="followingContainer overflow-hidden">
                                    <div className="heading  sm:p-10 mb-10 mt-50 ">
                                        <h1
                                            className={clsx(
                                                styles.headingColor,
                                                "text-[2rem] w-[35rem] mx-auto text-center sm:text-[2.3rem]",
                                            )}
                                        >
                                            THEO DÕI CỘNG ĐỒNG NHÀ BÁN HÀNG SHOPEE
                                        </h1>
                                    </div>
                                    {/* items */}
                                    <div className="gr py-20">
                                        <ul className="grid grid-cols-1 sm:[&>li:last-child]:col-span-1 gap-y-25 sm:grid-cols-2 lg:grid-cols-3 lg:[&>li:last-child]:col-span-3">
                                            {/* item */}
                                            {follows.map((el, index) => {
                                                return (
                                                    <li key={index} className="w-[25rem] mx-auto">
                                                        <Following {...el} textColor={styles.headingColor} />
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </SubnetLayout>
            </GuestRouter>
        </>
    );
};
export default BecomeASeller;
