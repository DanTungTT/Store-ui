import { ProductList, ProductItem } from "~/componnents/feature/product";
import useFetch from "~/hooks/projectHooks/useFetch";
import getFinalPrice from "~/componnents/feature/getFinalPrice";
const SamePriceProducts = ({ priceLimit }) => {
    const data = useFetch("/products");

    const products = data.filter((product) => {
        return priceLimit.length > 1
            ? getFinalPrice(product) >= priceLimit[0] && getFinalPrice(product) <= priceLimit[1]
            : getFinalPrice(product) >= priceLimit[0];
    });

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
