import useFetch from "~/hooks/projectHooks/useFetch";
import { ProductList, ProductItem } from "~/componnents/feature/product";
import isInStock from "~/componnents/feature/isInStock";
const ProductOutOfStock = () => {
    const data = useFetch("/products");
    const products = data.filter((pro) => !isInStock(pro));
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

export default ProductOutOfStock;
