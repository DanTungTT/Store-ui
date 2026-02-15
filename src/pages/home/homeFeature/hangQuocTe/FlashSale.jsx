import ProductList from "~/componnents/feature/product/ProductList";
import ProductFlashSale from "~/componnents/feature/product/ProductFlashSale";

import useFetch from "~/hooks/projectHooks/useFetch";
const FlashSale = () => {
    const data = useFetch("/products");
    const products = data.filter((product, index) => product.voucher > 30 && product.voucher < 70);
    return (
        <>
            <div>
                <ProductList>
                    {products.map((product, index) => {
                        return (
                            <li>
                                <ProductFlashSale {...product} />
                            </li>
                        );
                    })}
                </ProductList>
            </div>
        </>
    );
};

export default FlashSale;
