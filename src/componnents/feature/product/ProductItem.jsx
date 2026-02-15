import { useEffect, useState } from "react";

import { Favourite, Voucher, EventImgs, ShopTag, ButtonBuy } from "~/componnents/ui";
import formatVND from "../formatVND";

const ProductItem = ({ name, images, favourite, voucher, events, shopTag, price }) => {
    return (
        <>
            <div className="w-[15rem] h-[26.5rem] mx-2 cursor-pointer hover:shadow-[0_0_.5rem_#333] hover:-translate-y-2 p-1 transition-all duration-200 ">
                <div className="h-[15rem] max-w-[15rem] flex justify-center items-center overflow-hidden rounded-[.6rem] relative">
                    <img src={images[0]} width={200} className="object-center " />
                    {!!voucher && <Voucher value={voucher} />}
                    {events && <EventImgs imgList={events} />}
                </div>
                <div className="line-clamp-2 m-2 min-h-[4rem]">
                    <h1>
                        {favourite && <Favourite />} {name}
                    </h1>
                </div>
                <div className="ml-4">{shopTag && <ShopTag nameShop={shopTag} />}</div>
                <div className="flex justify-between items-center px-5 ">
                    <div>
                        <span className="primaryColor">{formatVND(price - (price * voucher) / 100)}</span>
                    </div>
                    <div>
                        <ButtonBuy />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
