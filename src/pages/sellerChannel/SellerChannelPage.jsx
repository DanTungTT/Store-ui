import { useEffect } from "react";

import { useLayoutContext } from "~/provider/LayoutProvider";
import GuestRouter from "~/routers/GuestRouter";
import { SubnetLayout } from "~/layout";
import { FormLogin, Input } from "~/componnents";

import styles from "./sellerChannel.module.css";
import { UseIcon, faAngleUp } from "~/assets/icon";

const SellerChannel = () => {
    const { setTitleHeader, setTitleHelp } = useLayoutContext();
    const inputs = [
        {
            id: "1",
            placeholder: "email/số điện thoại/tên đăng nhập",
            type: "text",
            name: "text",
        },
        {
            id: "2",
            type: "password",
            name: "password",
            placeholder: "Nhập mật khẩu",
        },
    ];
    useEffect(() => {
        setTitleHeader("Kênh người bán");
        setTitleHelp("Bạn cần giúp đỡ?");
        return () => {
            setTitleHeader("");
            setTitleHelp("");
        };
    }, []);
    return (
        <>
            <GuestRouter>
                <SubnetLayout>
                    <main className={styles.sellerChannelContainer}>
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
                                <FormLogin title="Đăng Nhập" qr inputs={inputs} />
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
            </GuestRouter>
        </>
    );
};
export default SellerChannel;
