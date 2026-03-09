import { DefaultLayout } from "~/layout";
import VoucherCard from "../VoucherCard";
import { banner, deal30, voucher } from "~/assets/img/body/homeFeatures/seo-xu-li";
const SeoProcessing = () => {
    return (
        <>
            <DefaultLayout>
                <main className="bg-[#970000]">
                    <div className="container-page px-20">
                        <div>
                            {/* banner img */}
                            <div>
                                <img src={banner} alt="ảnh quảng bá sản phẩm  giảm đến 50%" />
                            </div>

                            {/* deal soc voucher 30% */}
                            <div>
                                <img src={deal30} alt="ảnh mô tải voucher 30%" />

                                {/* voucher card */}
                                <div className="bg-normal rounded-3xl">
                                    <div className="flex justify-evenly items-center p-5">
                                        <VoucherCard
                                            img={voucher}
                                            title="Giảm 30%"
                                            decr="Giảm tối đa 70k₫ Đơn Tối Thiểu 200k₫"
                                            label
                                            used="98"
                                        />

                                        <VoucherCard
                                            img={voucher}
                                            title="Giảm 20%"
                                            decr="Giảm tối đa 40k₫ Đơn Tối Thiểu 100k₫"
                                            label
                                            used="98"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </DefaultLayout>
        </>
    );
};

export default SeoProcessing;
