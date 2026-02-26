import useFetch from "~/hooks/projectHooks/useFetch";
import { ProductList, ProductItem } from "~/componnents/feature/product";
import getFinalPrice from "~/componnents/feature/getFinalPrice";
import isInStock from "~/componnents/feature/isInStock";
const ProductWrapper = () => {
    const data = useFetch("/products");
    const products = data.filter((pro) => getFinalPrice(pro) <= 10000 && isInStock(pro));
    return (
        <>
            <ProductList>
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductItem {...product}></ProductItem>
                    </li>
                ))}
            </ProductList>
        </>
    );
};

export default ProductWrapper;
