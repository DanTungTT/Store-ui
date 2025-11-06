import { DashboardLayout } from "~/layout";
import { createContext } from "react";
import FormLogin from "~/componnent/formLogin/FormLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./friendChannel.css";

export const LayoutFooter = createContext();
const FriendChannel = () => {
    return (
        <>
            <LayoutFooter value="">
                <DashboardLayout>
                    <main className="friendChannelContainer">
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
                                <FormLogin />
                                {/*  */}
                                <div className="w-[40rem] my-7 shadow-[0rem_0rem_1rem_#ededed] p-5 text-center hover:bg-[#eeeded] ">
                                    <button>
                                        Đăng nhập với tài khoản Chính/Phụ
                                        <FontAwesomeIcon icon={faAngleUp} className="rotate-[90deg] ml-2" />
                                    </button>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </main>
                </DashboardLayout>
            </LayoutFooter>
        </>
    );
};
export default FriendChannel;
