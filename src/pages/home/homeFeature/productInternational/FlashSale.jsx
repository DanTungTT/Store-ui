import { ProductList, ProductFlashSale } from "~/componnents/product";
import { useFetch } from "~/services";
import { isInStock } from "~/utils";

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
