import { DefaultLayout } from "~/layout";
import MenuBar from "./MenuBar";
import FlashSale from "./FlashSale";
import SamePriceProducts from "./SamePriceProducts";
import DealSupperCheap from "./DealSupperCheap";
import ProductVoucher20Percent from "./ProductVoucher20Percent";
import ProductWrapper from "./ProductWrapper";
import ProductOutOfStock from "./ProductOutOfStock";
import { Button } from "~/componnents/ui";
import {
    bannerImg,
    firstPay,
    promotion,
    promotionFirstPay,
    voucherXtra,
    voucherXtra1,
    dongGia,
    moTaDongGia,
    deal3Dong,
    deal9Dong,
    deal29Dong,
    xemLiveSanDealSoc,
    xemLiveLich,
    sanDealGiaRe,
    mua1Duoc2,
    quaMua1Duoc2,
    shopee,
    label,
    voucher20,
    dealGiaRe,
    shopeeXuLi,
    shopeeChoice,
} from "~/assets/img/body/homeFeatures/hang-quoc-te";
import WatchLiveStream from "./WatchLiveStream";
const HangQuocTe = () => {
    return (
        <>
            <DefaultLayout>
                <main className="container-page ">
                    <div>
                        <img src={bannerImg} alt="ảnh voucher seo siêu rẻ" />
                    </div>
                    <div className="flex justify-center items-center p-10 sticky top-40 z-50 ">
                        <MenuBar />
                    </div>
                    <div>
                        <img src={firstPay} alt="ảnh giới thiệu mua lần đầu được khuyến mãi" />
                    </div>
                    <div className="flex-col justify-center items-center">
                        <img src={promotion} alt="ảnh giới thiệu mua lần đầu được khuyến mãi" />
                        <div className="flex justify-center items-center w-full">
                            <img src={promotionFirstPay} alt="ảnh  mua lần đầu được khuyến mãi" />
                        </div>
                    </div>
                    <span className="text-[2rem] p-10">Sản phẩm sẽ về với giá cũ khi hết số lượng khuyến mãi</span>

                    {/* flash sale */}
                    <section data-index="0" id="flashSale" className="scroll-mt-200">
                        <FlashSale />
                    </section>
                    {/* voucher xtra  */}
                    <section data-index="1" id="voucher" className="scroll-mt-130">
                        <img src={voucherXtra} alt="ảnh voucher xtra giảm tới 20%" />
                        <div className="flex justify-evenly p-10">
                            <div className="flex">
                                <img src={voucherXtra1} alt="nhãn dán giới thiệu voucherXtra" />
                                <div className="w-[27rem] border border-[#333] rounded-tr-3xl rounded-br-3xl">
                                    <h2 className="text-[2.7rem] font-extrabold mt-6 p-5">Giảm 20%</h2>
                                    <p className="text-[2rem] text-center">Giảm tối đa 100k </p>
                                    <p className="text-[2rem] text-center">Giảm đơn tối thiểu 100k </p>
                                    <Button
                                        type="button"
                                        className="bg-primary text-secondaryColor px-15 py-5 m-8 rounded-2xl"
                                        title="Sử Dụng"
                                    />
                                    <div className="text-right p-5">
                                        <a href="#" className="block text-[2rem] text-blue-500">
                                            Điều Kiện
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <img src={voucherXtra1} alt="nhãn dán giới thiệu voucherXtra" />
                                <div className="w-[27rem] border border-[#333] rounded-tr-3xl rounded-br-3xl">
                                    <h2 className="text-[2.7rem] font-extrabold mt-6 p-5">Giảm 20%</h2>
                                    <p className="text-[2rem] text-center">Giảm tối đa 100k </p>
                                    <p className="text-[2rem] text-center">Giảm đơn tối thiểu 100k </p>
                                    <Button
                                        type="button"
                                        className="bg-primary text-secondaryColor px-15 py-5 m-8 rounded-2xl"
                                        title="Sử Dụng"
                                    />
                                    <div className="text-right p-5">
                                        <a href="#" className="block text-[2rem] text-blue-500">
                                            Điều Kiện
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* đồng giá */}
                    <section data-index="2" id="dongGia" className="scroll-mt-85">
                        <div>
                            <img src={dongGia} alt="ảnh siêu deal đồng giá" />
                            <img
                                src={moTaDongGia}
                                alt="Số lượng có hạn. Sản phẩm sẽ trở về giá cũ khi chương trình hết khuyến mãi "
                            />
                            <img src={deal3Dong} alt="nhãn dán 3 đồng " />
                        </div>
                        {/* products list */}
                        <div>
                            <SamePriceProducts priceLimit={[3000, 9000]} />
                        </div>
                        <div>
                            <img src={deal9Dong} alt="ảnh deal 9 đồng" />
                        </div>

                        <div>
                            <SamePriceProducts priceLimit={[9000, 25000]} />
                        </div>

                        <div>
                            <img src={deal29Dong} alt="ảnh deal 29 đồng" />
                        </div>
                        <div>
                            <SamePriceProducts priceLimit={[29000]} />
                        </div>
                    </section>
                    <section data-index="3" id="xemLive" className="scroll-mt-85">
                        <div>
                            <img src={xemLiveSanDealSoc} alt="ảnh mô tải xem live săn deal sốc" />
                            <img src={xemLiveLich} alt="ảnh mô tả lịch xem live của seo" />
                            <img src={sanDealGiaRe} alt="ảnh mô tả săn deal giá rẻ " />
                            <img src={mua1Duoc2} alt="ảnh mô tả mua 1 được 2 " />
                            <img src={quaMua1Duoc2} alt="ảnh mô tả quà  mua 1 được 2 " />
                            <img src={moTaDongGia} alt="giá sẽ trở về  gốc khi chương trình hết khuyến mãi" />
                        </div>
                        <div>
                            <WatchLiveStream />
                        </div>
                    </section>
                    <section data-index="4" id="deal" className="scroll-mt-85">
                        <div>
                            <img src={dealGiaRe} alt="ảnh mô tả deal giá siêu rẻ" />
                        </div>
                        <div>
                            <DealSupperCheap />
                        </div>
                        <div>
                            <img src={shopee} alt="ảnh mô tải shopee" />
                            <img src={label} alt="ảnh giới thiệu" />
                            <img src={voucher20} alt="ảnh mô tải voucher giảm 20 %" />
                        </div>
                        <div>
                            <ProductVoucher20Percent />
                        </div>
                        <div>
                            <img src={shopeeXuLi} alt="ảnh mô tải shopee xử lí" />
                        </div>

                        <div>
                            <ProductWrapper />
                        </div>
                        <div>
                            <img src={shopeeChoice} alt="" />
                        </div>
                        <div>
                            <ProductOutOfStock />
                        </div>
                    </section>
                </main>
            </DefaultLayout>
        </>
    );
};

export default HangQuocTe;
