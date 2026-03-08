import { memo } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Icon } from "~/componnents/icon";

const Button = ({ title, propsIcon, className, type = "submit", to, state = "enable" }) => {
    const Btn = to ? Link : "button";
    return (
        <>
            <div className="w-[100%] text-center overflow-hidden">
                <Btn
                    to={to}
                    type={type}
                    className={clsx(
                        className,
                        state !== "enable" ? "text-gray-500" : "",
                        "cursor-pointer inline-block",
                    )}
                >
                    {propsIcon && <Icon icon={propsIcon()?.icon} className={`mr-2 ${propsIcon()?.className}`} />}
                    {title}
                </Btn>
            </div>
        </>
    );
};
export default memo(Button);
