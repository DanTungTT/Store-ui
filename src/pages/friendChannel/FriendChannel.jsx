import { DashboardLayout } from "~/layout";
import { createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
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
                                <div className="formLogin w-[40rem]  shadow-[0rem_0rem_1rem_#ededed] p-[3rem] bg-[var(--formInput-color-)]">
                                    <div>
                                        {/*  */}
                                        <div className="flex justify-between mb-10">
                                            <div>
                                                <h1 className="text-[2rem] ">Đăng nhập</h1>
                                            </div>
                                            <div className="qrLogin flex ">
                                                <div className="relative">
                                                    <p
                                                        className="absolute left-[-16rem] top-[-1.5rem] w-[16rem] text-[1.5rem] text-[#ffbf00] border-[#ffbf00] border-2 p-3 bg-[#fefaec]
                                                                before:absolute
                                                                before:right-[-2rem]
                                                                before:top-[2.1rem]
                                                                before:content-['']
                                                                before:border-t-10
                                                                before:border-t-transparent
                                                                before:border-r-10
                                                                before:border-r-transparent
                                                                before:border-b-10
                                                                before:border-b-transparent
                                                                before:border-l-10
                                                                before:border-l-[#ffbf00]
                                                                "
                                                    >
                                                        Đăng nhập bằng mã <br />
                                                        QR
                                                    </p>
                                                </div>
                                                <div className="relative ">
                                                    <span
                                                        className="
                                                        before:absolute
                                                        before:left-[.8rem]
                                                        before:top-[1.1rem]
                                                        before:content-[''] 
                                                        before:border-l-20
                                                        before:border-l-white
                                                        before:border-b-20
                                                        before:border-b-white
                                                        before:border-t-20
                                                        before:border-t-transparent
                                                        before:border-r-20
                                                        before:border-r-transparent
                                                    "
                                                    ></span>
                                                    <FontAwesomeIcon
                                                        icon={faQrcode}
                                                        className="text-[4.5rem] text-[var(--primary-color-)]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="border border-[#c7c7c7] p-3 rounded has-[input:focus]:shadow-[0rem_0rem_.2rem_#333]">
                                            <input
                                                className=" outline-none w-[100%]"
                                                type="text"
                                                placeholder="Email/Số điện thoại/Tên đăng nhập"
                                            />
                                        </div>
                                        {/*  */}
                                        <div className="border border-[#c7c7c7] p-3 my-10 rounded has-[input:focus]:shadow-[0rem_0rem_.2rem_#333]">
                                            <input
                                                className="outline-none w-[100%] "
                                                type="password"
                                                name=""
                                                id=""
                                                placeholder="Nhập Mật Khẩu"
                                            />
                                        </div>
                                        {/*  */}
                                        <div>
                                            <button className="text-[#fff] bg-[var(--primary-color-)] w-[100%] py-2 rounded">
                                                ĐĂNG NHẬP
                                            </button>
                                        </div>
                                        {/*  */}
                                        <div className="my-4">
                                            <a href="" className="text-blue-600 text-[1.1rem]">
                                                Quên mật khẩu ?
                                            </a>
                                        </div>
                                        {/*  */}
                                        <div className="flex items-center justify-between">
                                            <div className="h-[.1rem] w-[40%] bg-[#8a8888]"></div>
                                            <p className="text-center text-[#c0c0c0]">Hoặc</p>
                                            <div className="h-[.1rem] w-[40%] bg-[#8a8888]"></div>
                                        </div>
                                        {/*  */}
                                        <div className="flex justify-between my-5">
                                            <div className="w-[47%] border border-[#333] text-center py-3 rounded">
                                                <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
                                                <button>Facebook</button>
                                            </div>
                                            <div className="w-[47%] border border-[#333] text-center py-3 rounded">
                                                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                                                <button>oogle</button>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="text-center pt-[3rem]">
                                            <span className="text-[#b3b3b3]">Bạn mới biết tới SupperSeo? </span>
                                            <a href="#" className="text-[var(--primary-color-)]">
                                                Đăng ký
                                            </a>
                                        </div>
                                        {/*  */}
                                    </div>
                                </div>
                                {/*  */}
                                <div className="w-[40rem] my-7 shadow-[0rem_0rem_1rem_#ededed] p-5 text-center ">
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
