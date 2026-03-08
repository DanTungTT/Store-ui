import { ProductList, ProductItem } from "~/componnents/product";
import { useFetch } from "~/services";
import { getFinalPrice, isInStock } from "~/utils";

const SamePriceProducts = ({ priceLimit }) => {
    const data = useFetch("/products");

    const products = data.filter((product) => {
        return priceLimit.length > 1
            ? getFinalPrice(product) >= priceLimit[0] && getFinalPrice(product) <= priceLimit[1] && isInStock(product)
            : getFinalPrice(product) >= priceLimit[0] && isInStock(product);
    });

    return (
        <>
            <ProductList>
                {products.length !== 0 &&
                    products.map((product, index) => (
                        <li key={product.id}>
                            <ProductItem {...product} />
                        </li>
                    ))}
            </ProductList>
        </>
    );
};

export default SamePriceProducts;
