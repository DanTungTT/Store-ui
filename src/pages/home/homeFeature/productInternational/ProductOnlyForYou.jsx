import { useFetch } from "~/services";
import { ProductItem } from "~/componnents/product";
import { isInStock } from "~/utils";
import { Icon, faAngleRight } from "~/componnents/icon";

const ProductOnlyForYou = () => {
    const data = useFetch("/products");
    const products = data.filter((pro) => isInStock(pro)).slice(0, 40);
    return (
        <>
            <div className="grid grid-cols-8 gap-0">
                {products.map((product) => (
                    <div key={product.id} className="w-fit">
                        <ProductItem {...product} />
                    </div>
                ))}
                <div className="text-center col-span-8 flex justify-center items-center text-[2.5rem] p-10 cursor-pointer">
                    <button className="cursor-pointer outline-10 outline-[var(--primary-color-)] primaryColor ml-10 pl-10 pr-5 py-5  rounded-br-3xl rounded-tr-3xl rounded-tl-[50%] rounded-bl-[50%] [clip-path:polygon(20%_0%,100%_0,100%_100%,20%_100%,0_50%)] ">
                        Xem Thêm <Icon icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductOnlyForYou;
