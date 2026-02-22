import { ProductList, ProductItem } from "~/componnents/feature/product";
import useFetch from "~/hooks/projectHooks/useFetch";
const SamePriceProducts = () => {
    const data = useFetch("/products");
    const products = data.filter((product) => product.price >= 3000 && product.price <= 9000);
    return (
        <>
            <ProductList>
                {products.map((product, index) => (
                    <li key={product.id}>
                        <ProductItem {...product} />
                    </li>
                ))}
            </ProductList>
        </>
    );
};

export default SamePriceProducts;
