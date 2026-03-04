import { ProductList, ProductItem } from "~/componnents/product";
import { useFetch } from "~/services";
import { isInStock } from "~/utils";

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
