import { UseIcon, faAngleRight } from "~/assets/icon";
const ProductList = ({ children }) => {
    return (
        <>
            <div className="rounded-2xl min-h-[34.5rem] w-full border border-[#c0bfbf] p-5 m-10 ">
                <div className="text-right primaryColor p-5 flex justify-between">
                    <span className="flex items-center justify-end text-[2rem]">FLASH SALE </span>
                    <span className="flex items-center justify-end cursor-pointer">
                        Xem Thêm <UseIcon icon={faAngleRight} />
                    </span>
                </div>
                <div className="listProducts">
                    <ul className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden  p-2">{children}</ul>
                </div>
            </div>
        </>
    );
};

export default ProductList;
