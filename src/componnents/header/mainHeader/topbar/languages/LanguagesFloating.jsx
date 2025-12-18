import FloatingBox from "~/componnents/floatingBox/FloatingBox";
import { forwardRef } from "react";
const LanguagesFloating = ({ middlewareData, ...props }, ref) => {
    return (
        <>
            <FloatingBox {...props}>
                {/* arrow */}
                <div
                    ref={ref}
                    style={{ position: "absolute", left: middlewareData.arrow?.x }}
                    className=" h-10 w-10 bg-white rotate-[45deg] overflow-hidden z-[-1] absolute"
                ></div>
                <ul className="[&>li]:text-[var(--primary-textColor-)] [&>li]:py-5 [&>li:hover]:bg-gray-200 [&>li:hover]:text-[var(--primary-color-)]  p-0">
                    <li>Tiếng Việt</li>
                    <li>Tiếng Anh</li>
                </ul>
            </FloatingBox>
        </>
    );
};

export default forwardRef(LanguagesFloating);
