import clsx from "clsx";
import { Icon, faCartShopping } from "~/componnents/icon";
const ButtonBuy = ({ statusProduct }) => {
    return (
        <>
            <button
                className={clsx(
                    !statusProduct ? "text-primaryColor bg-gray-300" : "bg-primary text-secondaryColor",
                    "rounded-[50%]  p-2 h-[3rem] w-[3rem]  cursor-pointer",
                )}
            >
                <Icon icon={faCartShopping} />
            </button>
        </>
    );
};

export default ButtonBuy;
