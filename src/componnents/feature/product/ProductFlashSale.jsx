import { forwardRef } from "react";
import { Favourite, Voucher, EventImgs, ShopTag, Button, VoucherFlashSale } from "~/componnents/ui";
import formatVND from "../formatVND";

const ProductFlashSale = ({ name, images, voucher, events, price, sales, quantity = 1 }) => {
    const w = (sales / quantity) * 100;

    return (
        <>
            <div className="w-[22.5rem] h-[37.6rem]  mx-2 cursor-pointer hover:shadow-[0_0_.5rem_#333] hover:-translate-y-2 py-3 transition-all duration-200 ">
                <div className="h-[22.5rem]  flex justify-center items-center rounded-[.6rem] relative">
                    <img src={images[0]} className="object-center w-full h-full" />
                    {!!voucher && <VoucherFlashSale value={voucher} />}
                    {events && <EventImgs imgList={events} w={40} />}
                </div>
                <div className="line-clamp-2 mt-5 mb-1 min-h-[5rem]  text-[1.7rem] px-5">
                    <h1>{name}</h1>
                </div>
                {/* price old */}
                <div className="line-through px-5">{formatVND(price)}</div>
                <div className="flex justify-between items-end-safe px-5 ">
                    <div>
                        <span className="primaryColor text-[1.8rem]">{formatVND(price - (price * voucher) / 100)}</span>

                        <div
                            style={{ "--w": `${w}%` }}
                            className={`relative bg-[#febca5]  text-[1.2rem] px-3  rounded-2xl mb-1 text-secondaryColor 
                                         after:content-[''] after:absolute after:left-0 after:w-[var(--w)] after:max-w-[100%] after:h-full after:bg-[linear-gradient(to_right,_#ff6633,_#f63f2e)] after:rounded-2xl 
                                        `}
                        >
                            <span className="relative z-10">ĐANG BÁN CHẠY</span>
                        </div>
                    </div>
                    <div className="mb-2">
                        <Button title="Mua Ngay" className="btn-primary px-4 py-2  text-[1.2rem]" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductFlashSale;
