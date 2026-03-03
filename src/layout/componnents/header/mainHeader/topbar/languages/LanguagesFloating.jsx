import FloatingBox from "~/componnents/floatingBox/FloatingBox";
import { forwardRef } from "react";
const LanguagesFloating = ({ middlewareData, ...props }, ref) => {
    return (
        <>
            <FloatingBox {...props}>
                <ul className="[&>li]:text-[var(--primary-textColor-)] [&>li]:py-5 [&>li:hover]:bg-gray-200 [&>li:hover]:text-[var(--primary-color-)]  p-0">
                    <li>Tiếng Việt</li>
                    <li>Tiếng Anh</li>
                </ul>
            </FloatingBox>
        </>
    );
};

export default forwardRef(LanguagesFloating);
