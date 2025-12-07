import clsx from "clsx";
import { useLayoutContext } from "../../hooks/projectHooks/useContext";
import { SubnetLayout } from "~/layout";
import { FormLogin, Input } from "~/componnents";
import { Reson, Step, BenefitItem, Following } from "./componnents";

import { liBanerItems, conviceItems, stepItems, benefitItems, follows } from "./data";

import styles from "./becomeASeller.module.css";
import { useEffect } from "react";

const BecomeASeller = () => {
    const { setTitleHeader, setLayoutFooter } = useLayoutContext();
    useEffect(() => {
        setTitleHeader("Trở Thành Người Bán");
        setLayoutFooter("footer");
        return () => {
            setLayoutFooter("");
            setTitleHeader("");
        };
    }, []);
    return (
        <>
            <SubnetLayout>
                <main className={styles.becomeASellerContainer}>
                    {/* banner & register form */}
                    <div className={styles["becomeASellerContainer-register"]}>
                        <div className="w-[var(--app-width-)] mx-auto flex justify-between px-[7rem] ">
                            {/* left */}
                            <div className="mt-[14rem]  ml-5">
                                <div className="headding mb-5">
                                    <h3 className={clsx(styles.primaryColor, "text-[2.4rem]")}>Shopee Việt Nam</h3>
                                    <h1 className={clsx(styles.primaryColor, "text-[3.3rem]")}>
                                        Trở thành Người bán <br /> ngay hôm nay
                                    </h1>
                                </div>
                                <ul className="mt-[3rem] w-[45rem]">
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
                            <div className="mt-[8.5rem]">
                                <FormLogin title="Đăng Ký" clauseAndPolicy>
                                    <Input type="text" placeholder="Số điện thoại" className="outline-none w-[100%]" />
                                </FormLogin>
                            </div>
                        </div>
                    </div>

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
                                <ul className="grid grid-cols-3 grid-rows-2 gap-15 px-[10rem] my-20">
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
                                <ul className="flex ">
                                    {stepItems.map((el, index) => {
                                        return (
                                            <li key={index}>
                                                <Step {...el} />
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
                                <ul className="flex justify-evenly">
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
                        <div className="followingContainer">
                            <div className="heading  p-10 mb-10 mt-50 ">
                                <h1
                                    className={clsx(styles.headingColor, "text-[2.3rem] w-[37rem] mx-auto text-center")}
                                >
                                    THEO DÕI CỘNG ĐỒNG NHÀ BÁN HÀNG SHOPEE
                                </h1>
                            </div>
                            {/* items */}
                            <div className="gr">
                                <ul className="grid grid-cols-3 grid-rows-2 [&>li:last-child]:col-span-3 gap-y-25">
                                    {/* item */}
                                    {follows.map((el, index) => {
                                        return (
                                            <li key={index} className="col-span-1 w-[25rem] mx-auto">
                                                <Following {...el} textColor={styles.headingColor} />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </SubnetLayout>
        </>
    );
};
export default BecomeASeller;
