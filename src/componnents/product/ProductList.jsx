import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { Icon, faAngleRight, faAngleLeft } from "~/componnents/icon";

const ProductList = ({ children, flashSale = null, categories, setSelectedCategory }) => {
    const refContainer = useRef();
    const activeRef = useRef();

    const [minWidth, setMinWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState(false);
    const [indexActive, setIndexActive] = useState(0);

    const isShowViewAll = children.length > 13;
    const enable = children.length > 8;

    const handleScroll = (e) => {
        setMinWidth(refContainer.current.scrollLeft === 0);
        setMaxWidth(
            refContainer.current.clientWidth + refContainer.current.scrollLeft >= refContainer.current.scrollWidth,
        );
    };
    const handlePrevProduct = () => {
        refContainer.current.scrollLeft === 0 && setMinWidth(false);
        refContainer.current.scrollLeft -= refContainer.current.offsetWidth;
        setMaxWidth(false);
    };
    const handleNextProduct = () => {
        refContainer.current.scrollLeft += refContainer.current.offsetWidth;
        if (refContainer.current.clientWidth + refContainer.current.scrollLeft >= refContainer.current.scrollWidth)
            setMaxWidth(true);
        setMinWidth(false);
    };

    useEffect(() => {
        if (categories) {
            activeRef.current.style.translate = `${activeRef.current.offsetWidth * indexActive}px`;
        }
    }, [indexActive]);
    return (
        <>
            <div className="rounded-2xl min-h-[34.5rem] w-full border border-[#c0bfbf] p-5 m-10 relative bg-normal">
                {/* title */}
                <div className="text-right primaryColor p-5 flex justify-between">
                    {flashSale && <span className="flex items-center justify-end text-[2rem]">FLASH SALE </span>}
                    <span className="flex items-center justify-end cursor-pointer flex-1">
                        Xem Thêm <Icon icon={faAngleRight} />
                    </span>
                </div>
                {/* category  */}
                {categories && (
                    <div>
                        <ul className="flex justify-evenly relative w-full [&>li]:h-20 my-5">
                            <li
                                key="a"
                                ref={activeRef}
                                className="bg-primary absolute w-1/5 left-0 transition-translate duration-300"
                            ></li>
                            {categories.map((category, index) => (
                                <li
                                    onClick={() => {
                                        setSelectedCategory(category);
                                    }}
                                    key={index}
                                    className="font-bold text-[1.6rem] bg-gray-50  w-1/5 flex justify-center items-center"
                                >
                                    <span
                                        onClick={() => setIndexActive(index)}
                                        className={clsx(
                                            "relative z-1 h-full w-full  flex items-center justify-center",
                                            indexActive === index && "text-secondaryColor",
                                        )}
                                    >
                                        #{category}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* btn prev & next products */}
                {!minWidth && children && (
                    <span
                        className="absolute -left-10 top-1/2 -translate-y-1/2 
                             bg-white rounded-[50%] h-20 w-20 text-[2rem] z-10 shadow-[0_0_5px_#333] 
                               flex justify-center items-center 
                               hover:text-[2.5rem] hover:w-24 hover:h-24
                               transition-all duration-200
                               "
                        onClick={handlePrevProduct}
                    >
                        <Icon icon={faAngleLeft} />
                    </span>
                )}
                {!maxWidth && enable && (
                    <span
                        onClick={handleNextProduct}
                        className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white rounded-[50%] h-20 w-20 text-[2rem]
                    z-10 shadow-[0_0_5px_#333] flex justify-center items-center hover:text-[2.5rem] hover:w-24
                    hover:h-24 transition-all duration-200 "
                    >
                        <Icon icon={faAngleRight} />
                    </span>
                )}

                {/* list products */}
                <div
                    ref={refContainer}
                    onScroll={(e) => handleScroll(e)}
                    className="overflow-x-scroll [&::-webkit-scrollbar]:hidden scroll-smooth relative"
                >
                    <ul className="flex items-center p-2 transition-all duration-300 ">
                        {children}
                        {!!children && isShowViewAll && (
                            <li className="px-20 flex flex-col items-center justify-center cursor-pointer">
                                <span className="rounded-[50%] h-10 w-10 border border-primary primaryColor flex items-center justify-center">
                                    <Icon icon={faAngleRight} />
                                </span>
                                <div className="w-32 mt-2 primaryColor">Xem Tất Cả</div>
                            </li>
                        )}
                    </ul>
                </div>
                {!children && (
                    <span className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 primaryColor">
                        Không có sản phẩm{" "}
                    </span>
                )}
            </div>
        </>
    );
};

export default ProductList;
