import useFetch from "~/hooks/projectHooks/useFetch";
import { ProductList, ProductItem } from "~/componnents/feature/product";
const WatchLiveStream = () => {
    const data = useFetch("/products");
    const products = data.filter((product) => product.voucher <= 50);
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
