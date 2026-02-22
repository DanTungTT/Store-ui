import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { UseIcon, faAngleRight, faAngleLeft } from "~/assets/icon";

const ProductList = ({ children, flashSale }) => {
    const ref = useRef();

    const [minWidth, setMinWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState(false);

    const handleScroll = (e) => {
        setMinWidth(ref.current.scrollLeft === 0);
        setMaxWidth(ref.current.clientWidth + ref.current.scrollLeft >= ref.current.scrollWidth);
    };
    const handlePrevProduct = () => {
        ref.current.scrollLeft === 0 && setMinWidth(false);
        ref.current.scrollLeft -= ref.current.offsetWidth;
        setMaxWidth(false);
    };
    const handleNextProduct = () => {
        ref.current.scrollLeft += ref.current.offsetWidth;
        if (ref.current.clientWidth + ref.current.scrollLeft >= ref.current.scrollWidth) setMaxWidth(true);
        setMinWidth(false);
    };

    return (
        <>
            <div className="rounded-2xl min-h-[34.5rem] w-full border border-[#c0bfbf] p-5 m-10 relative ">
                {/* title */}
                <div className="text-right primaryColor p-5 flex justify-between">
                    {flashSale && <span className="flex items-center justify-end text-[2rem]">FLASH SALE </span>}
                    <span className="flex items-center justify-end cursor-pointer flex-1">
                        Xem Thêm <UseIcon icon={faAngleRight} />
                    </span>
                </div>
                {/* prev & next list products */}
                {!minWidth && (
                    <span
                        className="absolute -left-10 top-1/2 -translate-y-1/2 
                             bg-white rounded-[50%] h-20 w-20 text-[2rem] z-10 shadow-[0_0_5px_#333] 
                               flex justify-center items-center 
                               hover:text-[2.5rem] hover:w-24 hover:h-24
                               transition-all duration-200
                               "
                        onClick={handlePrevProduct}
                    >
                        <UseIcon icon={faAngleLeft} />
                    </span>
                )}
                {!maxWidth && (
                    <span
                        onClick={handleNextProduct}
                        className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white rounded-[50%] h-20 w-20 text-[2rem]
                    z-10 shadow-[0_0_5px_#333] flex justify-center items-center hover:text-[2.5rem] hover:w-24
                    hover:h-24 transition-all duration-200 "
                    >
                        <UseIcon icon={faAngleRight} />
                    </span>
                )}

                {/* list products */}
                <div
                    ref={ref}
                    onScroll={(e) => handleScroll(e)}
                    className="overflow-x-scroll [&::-webkit-scrollbar]:hidden scroll-smooth"
                >
                    <ul className="flex items-center p-2 transition-all duration-300 ">
                        {children}
                        <li className="px-20 flex flex-col items-center justify-center cursor-pointer">
                            <span className="rounded-[50%] h-10 w-10 border border-primary primaryColor flex items-center justify-center">
                                <UseIcon icon={faAngleRight} />
                            </span>
                            <div className="w-32 mt-2 primaryColor">Xem Tất Cả</div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ProductList;
