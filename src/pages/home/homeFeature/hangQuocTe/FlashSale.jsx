import { ProductList } from "~/componnents/feature/product";
import { ProductFlashSale } from "~/componnents/feature/product";

import useFetch from "~/hooks/projectHooks/useFetch";
import isInStock from "~/componnents/feature/isInStock";
const FlashSale = () => {
    const data = useFetch("/products");
    const products = data.filter((product) => product.voucher > 30 && isInStock(product));
    return (
        <>
            <div>
                <ProductList flashSale>
                    {products.map((product, index) => {
                        return (
                            <li key={product.id}>
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
