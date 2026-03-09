import { ProductList, ProductItem } from "~/componnents/product";
import { useFetch } from "~/services";
const ProductVoucher30Percent = () => {
    const data = useFetch("/products");
    const products = data.filter((product) => product.voucher >= 25);

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

export default ProductVoucher30Percent;
