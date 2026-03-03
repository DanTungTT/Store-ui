import { useFetch } from "~/services";
import { ProductList, ProductItem } from "~/componnents/feature/product";
import { isInStock } from "~/utils";

const WatchLiveStream = () => {
    const data = useFetch("/products");
    const products = data.filter((product) => product.voucher <= 50 && isInStock(product));
    return (
        <>
            <ProductList>
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductItem {...product} />
                    </li>
                ))}
            </ProductList>
        </>
    );
};

export default WatchLiveStream;
