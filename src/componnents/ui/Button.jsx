import { UseIcon } from "~/assets/icon";
const Button = ({ type = "normal", title, propsIcon, className }) => {
    const typeBtn = {
        primary: "text-white bg-[var(--primary-color-)] rounded",
        secondary: "rounded border-[var(--primary-color-)] text-[var(--primary-color-)] bg-[#ffeee8] border-[1px]",
        normal: "border border-[#333] ",
    };
    return (
        <>
            <div className="w-[100%] text-center">
                <button className={`${type && typeBtn[type]} ${className} cursor-pointer`}>
                    {propsIcon && <UseIcon icon={propsIcon.icon} className={`mr-2 ${propsIcon.className}`} />}
                    {title}
                </button>
            </div>
        </>
    );
};
export default Button;
