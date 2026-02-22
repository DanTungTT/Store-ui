import flashSaleColored from "./flashSaleColored.webp"
import flashSaleWithoutColor from "./flashSaleWithoutColor.webp"
import voucherColored from "./voucherColored.webp"
import voucherWithoutColor from "./voucherWithoutColor.webp"
import dongGiaColored from "./dongGiaColored.webp"
import dongGiaWithoutColor from "./dongGiaWithoutColor.webp"
import xemLiveColored from "./xemLiveColored.webp"
import xemLiveWithoutColor from "./xemLiveWithoutColor.webp"
import dealColored from "./dealColored.webp"
import dealWithoutColor from "./dealWithoutColor.webp"
import riengChoBanColored from "./riengChoBanColored.webp"
import riengChoBanWithoutBanColor from "./riengChoBanWithoutColor.webp"
import bannerImg from "./banner.webp";
import firstPay from "./firstPay.webp";
import promotion from "./promotion.png";
import promotionFirstPay from "./promotionFirstPay.webp";
import voucherXtra from "./voucherXtra.webp";
import voucherXtra1 from "./voucherXtra1.png";
import dongGia from "./dongGia.webp";
import moTaDongGia from "./moTaDongGia.webp";
import deal3Dong from "./deal3Dong.webp";

export {bannerImg, firstPay, promotion, promotionFirstPay, voucherXtra, voucherXtra1, dongGia, moTaDongGia, deal3Dong}
export const  menuBar = [
    {
        id: 1,
        imgNonActive: flashSaleWithoutColor,
        imgActive: flashSaleColored,
        a: "#flashSale"
    },
    {
        id: 2,
        imgNonActive: voucherWithoutColor,
        imgActive: voucherColored,
        a: "#voucher"
    },
    { 
        id: 3,
        imgNonActive: dongGiaWithoutColor,
        imgActive: dongGiaColored,
        a: "#dongGia"
    },
    {
        id: 4,
        imgNonActive: xemLiveWithoutColor,
        imgActive: xemLiveColored,
        a: "#xemLive"
    },
    {
        id: 5,
        imgNonActive: dealWithoutColor,
        imgActive: dealColored, 
        a: "#deal"
    },
    {
        id: 6,
        imgNonActive: riengChoBanWithoutBanColor,
        imgActive: riengChoBanColored,
        a: "#riengChoBan"
    }
]