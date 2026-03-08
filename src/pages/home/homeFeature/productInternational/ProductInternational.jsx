import { useEffect } from "react";

import { DefaultLayout } from "~/layout";
import { useLayoutContext } from "~/provider/LayoutProvider";
import { Button } from "~/componnents/ui";

import MenuBar from "./MenuBar";
import FlashSale from "./FlashSale";
import SamePriceProducts from "./SamePriceProducts";
import DealSupperCheap from "./DealSupperCheap";
import ProductVoucher20Percent from "./ProductVoucher20Percent";
import ProductWrapper from "./ProductWrapper";
import ProductOutOfStock from "./ProductOutOfStock";
import ProductOnlyForYou from "./ProductOnlyForYou";
import WatchLiveStream from "./WatchLiveStream";
import VoucherCard from "../VoucherCard";

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
    biKipSanDeal,
    visit,
} from "~/assets/img/body/homeFeatures/hang-quoc-te";
const HangQuocTe = () => {
    const { setLayoutFooter } = useLayoutContext();
    useEffect(() => {
        setLayoutFooter("div");
        return () => setLayoutFooter("");
    }, []);
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
                            <VoucherCard
                                img={voucherXtra1}
                                title="Giảm 20%"
                                decr="Giảm tối đa 100K, Giảm đơn tối thiếu 100K"
                                state="disable"
                            />

                            <VoucherCard
                                img={voucherXtra1}
                                title="Giảm 20%"
                                decr="Giảm tối đa 100K, Giảm đơn tối thiếu 100K"
                                state="disable"
                            />
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
                            <SamePriceProducts priceLimit={[29000, 100000]} />
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
                    <section data-index="4" id="deal" className="scroll-mt-20">
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
                        <div>
                            <img src={biKipSanDeal} alt="nhãn dán hướng dẫn săn deal rẻ " />
                        </div>
                    </section>

                    <section data-index="5" id="riengChoBan" className="scroll-mt-90">
                        <div>
                            <img src={visit} alt="vẫn chưa ưng ý hãy ghé qua " />
                        </div>
                        <div>
                            <ProductOnlyForYou />
                        </div>
                    </section>
                    <div className="[&_h1]:font-black [&_h1]:text-[2.5rem] [&_h1]:py-10 [&_p]:py-3 [&_p]:pl-10 mt-10 mb-20">
                        <div>
                            <h1>Shopee Siêu Rẻ - Săn Deal Đồng Giá Chỉ Từ 1.000Đ Tại Shopee Việt Nam</h1>
                            <p>
                                Shopee - sự lựa chọn hàng đầu của triệu tín đồ mua sắm bởi trải nghiệm shopping online
                                dễ dàng, nhanh chóng, an toàn và siêu tiết kiệm. Tại Shopee, bạn luôn có thể tận hưởng
                                những bữa tiệc siêu sale tràn ngập khuyến mãi cùng các hot deal giá hấp dẫn, hàng siêu
                                rẻ đến từ nhiều thương hiệu. Vậy còn chần chờ gì nữa, khám phá chương trình{" "}
                                <a href="#" className="text-[#551a8b]">
                                    Shopee Siêu Rẻ
                                </a>{" "}
                                với hàng ngàn cơ hội săn deal đồng giá chỉ từ 1.000đ. Tham gia ngay Shopee Siêu Rẻ!
                            </p>
                        </div>
                        <div>
                            <h1>Shopee Siêu Rẻ - Deal Đồng Giá Chỉ Từ 1.000Đ</h1>
                            <p>
                                Đến với Shopee Siêu Rẻ, Shopee chiêu đãi bạn với đa dạng deal cùng các khuyến mãi mua
                                sắm siêu hấp dẫn,{" "}
                                <a href="#" className="text-blue-500">
                                    mã giảm giá
                                </a>{" "}
                                cực khủng dành riêng cho bạn.
                            </p>
                            <p className="ml-10">
                                <li className="list-disc">
                                    <span className="font-black">Shopee Siêu Rẻ chỉ từ 1.000đ</span> : Hàng siêu rẻ với
                                    ưu đãi chỉ từ 1.000Đ khi tham gia Shopee Siêu Rẻ. Săn deal ngay!
                                </li>
                            </p>
                        </div>
                        <div>
                            <h1>Shopee Mall Với Hàng Ngàn Ưu Đãi Đặc Biệt</h1>
                            <p>
                                Shopee Siêu Rẻ cùng{" "}
                                <a href="#" className="text-[#551a8b]">
                                    Shopee Mall
                                </a>{" "}
                                với ngập tràn ưu đãi hấp dẫn tại đến từ nhiều ngành hàng. Ghé Shopee Mall ngay hôm nay!
                            </p>
                            <p>
                                Mua sắm các mặt hàng thiết bị điện gia dụng cần thiết cho ngôi nhà của bạn cùng{" "}
                                <a href="#" className="text-blue-500">
                                    Samsung
                                </a>{" "}
                                ,
                                <a href="#" className="text-blue-500">
                                    Tefal
                                </a>{" "}
                                ,{" "}
                                <a href="#" className="text-blue-500">
                                    Lock&Lock
                                </a>{" "}
                                ,… Lựa chọn các sản phẩm làm đẹp, trang điểm từ các thương hiệu uy tín:{" "}
                                <a href="#" className="text-blue-500">
                                    Maybelline
                                </a>{" "}
                                , Estee Lauder, Bobbi Brown,… Sắm đồ thời trang mặc đẹp và giày thể thao cùng{" "}
                                <a href="#" className="text-blue-500">
                                    adidas
                                </a>{" "}
                                , Nike, Kappa,... và các sản phẩm dành cho Mẹ & Bé: Bobby, Huggies, Bio Island,…
                            </p>
                            <p>
                                Bên cạnh đó còn có các mặt hàng{" "}
                                <a href="#" className="text-blue-500">
                                    bách hóa
                                </a>{" "}
                                tiêu dùng nhanh đang được săn lùng, các sản phẩm{" "}
                                <a href="#" className="text-[#551a8b]">
                                    thiết bị điện tử{" "}
                                </a>
                                hot của năm. Những thương hiệu nổi bật như Dyson, Huion, Kindle,... dễ dàng được tìm
                                thấy trên các gian hàng uy tín của Shopee. Săn hot deals hàng siêu rẻ chính hãng, chất
                                lượng cao giá hấp dẫn tại Shopee Mall.
                            </p>
                        </div>
                        <div>
                            <h1>Ưu Đãi Bất Ngờ Từ Các Đối Tác Của Shopee</h1>
                            <p>
                                Shopee đang là đối tác với các ngân hàng lớn như: BIDV, HSBC, TP Bank, SCB, HD Bank,...
                                mang đến cho bạn trải nghiệm thanh toán siêu đơn giản và nhanh chóng. Đặc biệt ứng dụng
                                thanh toán{" "}
                                <a href="#" className="text-blue-500">
                                    ShopeePay
                                </a>{" "}
                                giúp bạn thanh toán siêu tiết kiệm, nhận hàng trăm mã giảm giá.
                            </p>
                            <p>
                                Bên cạnh đó là những ưu đãi miễn phí vận chuyển đến từ các đối tác giao hàng thân thiết
                                như{" "}
                                <a href="#" className="text-blue-500">
                                    SPX
                                </a>{" "}
                                , Giao hàng tiết kiệm, Giao hàng nhanh, Viettel Post, J&T Express, etc. Shopee đảm bảo
                                những sản phẩm bạn đặt mua sẽ mau chóng đến tay bạn. Trải nghiệm thanh toán và vận
                                chuyển nhanh chóng, tiện lợi hàng đầu khi đến với Shopee Siêu Rẻ. Tham gia cùng Shopee
                                nhé!
                            </p>
                        </div>
                        <div>
                            <h1>Cùng Shopee Shopee Siêu Rẻ - Top Deal Ngập Tràn Muôn Vàn Xu Hướng</h1>
                            <p>
                                Với Shopee Siêu Rẻ, bạn sẽ có cơ hội săn deal giá hấp dẫn với đến từ nhiều thương hiệu
                                uy tín với deal chỉ từ 1.000đ. Tham gia ngay!
                            </p>
                            <p>
                                Để nâng cao trải nghiệm mua sắm của bạn,
                                <a href="#" className="text-blue-500">
                                    Shopee Blog
                                </a>{" "}
                                mang đến các thông tin đánh giá, review chi tiết về các sản phẩm bạn đang quan tâm. Tại
                                Shopee Blog bạn sẽ tìm thấy nhiều thông tin khuyến mãi và các hot deal không thể bỏ lỡ
                                siêu hấp dẫn của Shopee. Mua sắm thông minh với Shopee Blog!
                            </p>
                            <p>
                                Khám phá ngay Shopee Siêu Rẻ với Shopee Việt Nam để trải nghiệm chương trình khuyến mãi
                                cực kỳ hấp dẫn.
                            </p>
                        </div>
                    </div>
                </main>
            </DefaultLayout>
        </>
    );
};

export default HangQuocTe;
