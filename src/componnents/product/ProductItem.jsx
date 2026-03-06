import clsx from "clsx";

import { isInStock, formatVND, getFinalPrice } from "~/utils";
import { Favourite, Voucher, EventImgs, ShopTag, ButtonBuy } from "~/componnents/ui";

const ProductItem = ({ name, images, favourite, voucher, events, shopTag, price, sold, initalStock }) => {
    const statusProduct = isInStock({ sold, initalStock });
    const finalPrice = getFinalPrice({ price, voucher });

    return (
        <>
            <div className="w-[15rem] h-[26.5rem] mx-2 cursor-pointer hover:shadow-[0_0_.5rem_#333] hover:-translate-y-2 p-1 transition-all duration-200 ">
                <div className="h-[15rem] max-w-[15rem] flex justify-center items-center overflow-hidden rounded-[.6rem] relative">
                    <img src={images[0]} width={200} className="object-center " />
                    {!statusProduct && (
                        <div className="h-25 w-25 rounded-[50%] bg-black shadow  z-10 absolute flex justify-center items-center">
                            <span className="text-secondaryColor text-[1.3rem]">Bán Hết</span>
                        </div>
                    )}
                    {!!voucher && <Voucher value={voucher} />}
                    {events && <EventImgs imgList={events} w={30} />}
                </div>
                <div className="line-clamp-2 m-2 min-h-[4.2rem]">
                    <h1>
                        {favourite && <Favourite />} {name}
                    </h1>
                </div>
                <div className="ml-4">{shopTag && <ShopTag nameShop={shopTag} />}</div>
                <div className="flex justify-between items-center px-5 ">
                    <div>
                        <span className={clsx(!statusProduct ? "text-primaryColor" : "primaryColor")}>
                            {formatVND(finalPrice)}
                        </span>
                    </div>
                    <div>
                        <ButtonBuy statusProduct={statusProduct} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
