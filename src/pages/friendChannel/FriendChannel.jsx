import { DashboardLayout } from "~/layout";
import { createContext } from "react";
import { FormLogin, Input, Button } from "~/componnents";
import { UseIcon, faAngleUp, faFacebook, faGoogle } from "~/assets/icon";
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
                                <FormLogin title="Đăng Nhập" qr>
                                    <Input
                                        placeholder="Email/Số điện thoại/Tên đăng nhập"
                                        className="outline-none w-[100%]"
                                    />
                                    <Input
                                        hiddenPassword
                                        type="password"
                                        className="outline-none w-[100%]"
                                        placeholder="Nhập mật khẩu "
                                    />
                                    <div>
                                        <Button type="primary" title="ĐĂNG NHẬP" className="w-[100%] py-4 my-5" />
                                    </div>
                                    {/*  */}

                                    <div className="my-4">
                                        <a href="" className="text-blue-600 text-[1.1rem]">
                                            Quên mật khẩu ?
                                        </a>
                                    </div>

                                    {/*  */}
                                    <div className="flex items-center justify-between my-10">
                                        <div className="h-[.1rem] w-[40%] bg-[#8a8888]"></div>
                                        <p className="text-center text-[#c0c0c0]">Hoặc</p>
                                        <div className="h-[.1rem] w-[40%] bg-[#8a8888]"></div>
                                    </div>
                                    {/*  */}
                                    <div className="flex justify-between  my-5">
                                        <Button
                                            propsIcon={{ icon: faFacebook, className: "text-blue-500" }}
                                            title="Facebook"
                                            className="w-[90%] py-3"
                                        />
                                        <Button
                                            propsIcon={{ icon: faGoogle, className: "text-red-500" }}
                                            title="Facebook"
                                            className="w-[90%] py-3"
                                        />
                                    </div>
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
                </DashboardLayout>
            </LayoutFooter>
        </>
    );
};
export default FriendChannel;
