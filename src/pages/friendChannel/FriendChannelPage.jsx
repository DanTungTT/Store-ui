import { createContext } from "react";
import { UseIcon, faAngleUp } from "~/assets/icon";

import { SubnetLayout } from "~/layout";
import { FormLogin, Input } from "~/componnents";

import styles from "./friendChannel.module.css";

export const InforDashboard = createContext();
const infor = {
    title: "Kênh người bán",
    InforShopFooter: "",
    helper: "",
};
const FriendChannel = () => {
    return (
        <>
            <InforDashboard value={infor}>
                <SubnetLayout>
                    <main className={styles.friendChannelContainer}>
                        <div className="flex justify-between mt-[12rem] px-[7rem]">
                            <div className="mt-[10rem]">
                                <div className="w-[40.5rem]">
                                    <h1 className="text-[3rem]  text-[var(--primary-color-)] font-[500]">
                                        Bán hàng chuyên nghiệp
                                    </h1>
                                    <p className="text-[1.9rem] my-4 text-[#888888]">
                                        Quản lý shop của bạn một cách hiệu quả hơn trên Shopee với Shopee - Kênh Người
                                        bán
                                    </p>
                                </div>
                                <div className="mt-10">
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-buyeruserfetoc-live-sg/assets/9019759f347a781f.png"
                                        alt="anh "
                                        className="w-[40rem]"
                                    />
                                </div>
                            </div>

                            <div>
                                <FormLogin title="Đăng Nhập" qr>
                                    <Input
                                        id="1"
                                        placeholder="Email/Số điện thoại/Tên đăng nhập"
                                        className="outline-none w-[100%]"
                                        type="text"
                                    />

                                    <Input
                                        id="2"
                                        hiddenPassword
                                        type="password"
                                        className="outline-none w-[100%]"
                                        placeholder="Nhập mật khẩu"
                                        minLength={6}
                                    />
                                </FormLogin>
                                {/*  */}
                                <div className="w-[40rem] my-7 shadow-[0rem_0rem_1rem_#ededed] p-5 text-center hover:bg-[#eeeded] ">
                                    <button>
                                        Đăng nhập với tài khoản Chính/Phụ
                                        <UseIcon icon={faAngleUp} className="rotate-[90deg] ml-2" />
                                    </button>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </main>
                </SubnetLayout>
            </InforDashboard>
        </>
    );
};
export default FriendChannel;
