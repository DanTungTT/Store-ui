import { useEffect } from "react";

import { useLayoutContext } from "~/provider/LayoutProvider";
import GuestRouter from "~/routers/GuestRouter";
import { SubnetLayout } from "~/layout";
import { FormLogin } from "~/componnents";

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
                    <main className="container-page min-h-[70rem]">
                        <div className="flex flex-col  justify-between md:flex-row md:pt-[9rem] ">
                            {/* banner */}
                            <div className="text-center m-auto py-20 mb-20 sm:py-20 sm:mt-[5rem]">
                                <div className="m-auto  w-[30rem] sm:w-[40.5rem]">
                                    <h1 className="text-[3rem]  primaryColor font-medium">Bán hàng chuyên nghiệp</h1>
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

                            <div className="overflow-hidden max-w-full flex flex-col justify-center items-center">
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
