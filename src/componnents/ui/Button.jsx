import { UseIcon } from "~/assets/icon";
import { Link } from "react-router-dom";
const Button = ({ title, propsIcon, className, type = "submit", to }) => {
    const Btn = to ? Link : "button";
    return (
        <>
            <div className="w-[100%] text-center overflow-hidden">
                <Btn to={to} type={type} className={` ${className} cursor-pointer inline-block`}>
                    {propsIcon && <UseIcon icon={propsIcon.icon} className={`mr-2 ${propsIcon.className}`} />}
                    {title}
                </Btn>
            </div>
        </>
    );
};
export default Button;
