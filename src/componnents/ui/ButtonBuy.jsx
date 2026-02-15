import { UseIcon, faCartShopping } from "~/assets/icon";
const ButtonBuy = () => {
    return (
        <>
            <button className="rounded-[50%] bg-primary p-2 h-[3rem] w-[3rem] text-secondaryColor cursor-pointer">
                <UseIcon icon={faCartShopping} />
            </button>
        </>
    );
};

export default ButtonBuy;
