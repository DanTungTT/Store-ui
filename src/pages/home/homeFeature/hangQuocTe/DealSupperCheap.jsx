import { useEffect, useState } from "react";
import { ProductList, ProductItem } from "~/componnents/feature/product";
import useFetch from "~/hooks/projectHooks/useFetch";

const categories = [
    "Thời trang nam",
    "Điện thoại & Phụ kiện",
    "Thiết Bị Điện Tử",
    "Máy Tính & Laptop",
    "Máy ảnh & Máy quay phim",
];
const DealSupperCheap = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const data = useFetch("/products");
    const categories_API = useFetch("/categories");
    const cateFiltered = categories_API.filter(
        (cate) => cate.name.toLowerCase() === selectedCategory.toLowerCase() && cate,
    );

    const cateParentId_2 =
        cateFiltered && categories_API.filter((cate) => cate.parentId == cateFiltered[0]?.id && cate);
    const products = data.filter((product) =>
        cateParentId_2.some((cate) => product.category?.id == cate.id && product),
    );

    return (
        <>
            <ProductList categories={categories} setSelectedCategory={setSelectedCategory}>
                {products.map((product) => (
                    <li>
                        <ProductItem {...product} />
                    </li>
                ))}
            </ProductList>
        </>
    );
};

export default DealSupperCheap;
