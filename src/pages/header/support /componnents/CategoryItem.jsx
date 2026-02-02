import clsx from "clsx";

const CategoryItem = ({ item, className }) => {
    return (
        <>
            <div
                className={clsx(
                    className,
                    "h-[7.5rem]  rounded flex items-center p-5 cursor-pointer shadow-[0_0_1px_#333]",
                )}
            >
                <span>
                    <img src={item.img} alt={item.title} />
                </span>
                <span className="text-[1.7rem] ml-5">{item.title}</span>
            </div>
        </>
    );
};

export default CategoryItem;
