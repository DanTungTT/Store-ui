import { useFetch } from "~/services";
import { isInStock } from "~/utils";
import { ProductList, ProductItem } from "~/componnents/product";

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
