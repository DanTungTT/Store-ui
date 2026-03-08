import { useFetch } from "~/services";
import { ProductList, ProductItem } from "~/componnents/product";
import { getFinalPrice, isInStock } from "~/utils";

const ProductWrapper = () => {
    const data = useFetch("/products");
    const products = data.filter((pro) => getFinalPrice(pro) <= 10000 && isInStock(pro));
    return (
        <>
            <ProductList>
                {products.length !== 0 &&
                    products.map((product) => (
                        <li key={product.id}>
                            <ProductItem {...product}></ProductItem>
                        </li>
                    ))}
            </ProductList>
        </>
    );
};

export default ProductWrapper;
