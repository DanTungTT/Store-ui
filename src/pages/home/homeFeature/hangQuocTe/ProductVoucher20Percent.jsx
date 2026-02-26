import { ProductList, ProductItem } from "~/componnents/feature/product";
import useFetch from "~/hooks/projectHooks/useFetch";
import isInStock from "~/componnents/feature/isInStock";
const ProductVoucher20Percent = () => {
    const data = useFetch("/products");
    const products = data.filter((product) => product.voucher >= 20 && isInStock(product));
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

export default ProductVoucher20Percent;
