import { UseIcon } from "~/assets/icon";
import { Link } from "react-router-dom";
const Button = ({ typeStyle = "normal", title, propsIcon, className, type = "submit", to }) => {
    const typeBtn = {
        primary: "text-white bg-[var(--primary-color-)] rounded",
        secondary: "rounded border-[var(--primary-color-)] text-[var(--primary-color-)] bg-[#ffeee8] border-[1px]",
        normal: "border border-[#333] ",
    };
    const Btn = to ? Link : "button";
    return (
        <>
            <div className="w-[100%] text-center overflow-hidden">
                <Btn
                    to={to}
                    type={type}
                    className={`${typeStyle && typeBtn[typeStyle]} ${className} cursor-pointer inline-block`}
                >
                    {propsIcon && <UseIcon icon={propsIcon.icon} className={`mr-2 ${propsIcon.className}`} />}
                    {title}
                </Btn>
            </div>
        </>
    );
};
export default Button;
