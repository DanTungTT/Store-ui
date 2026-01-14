import { useRef } from "react";

import { useHoverFloating } from "~/hooks/floatingUi";
import FloatingBox from "~/componnents/floatingBox/FloatingBox";

import { arrow, offset } from "@floating-ui/react";
import { UseIcon, faBagShopping } from "~/assets/icon/";
import { imgNoProduct } from "~/assets/img/header/middleHeader";
const CardBadge = ({ ...props }) => {
    const refArrow = useRef(null);
    const { open, refs, floatingStyles, transitionStyles, middlewareData, getReferenceProps, getFloatingProps } =
        useHoverFloating({
            optionsFloating: {
                staytegy: "absolute",
                middleware: [offset({ crossAxis: -135, mainAxis: 10 }), arrow({ element: refArrow })],
            },
            optionsTransitionStyles: {
                duration: 260,
                initial: {
                    opacity: 0,
                    transform: "scale(0)",
                },
                open: {
                    opacity: 1,
                    transform: "scale(1)",
                },
                close: {
                    opacity: 0,
                    transform: "scale(0)",
                },
            },
        });
    return (
        <>
            <div {...props}>
                <span ref={refs.setReference} {...getReferenceProps()}>
                    <UseIcon icon={faBagShopping} className="text-[5rem]" />
                </span>
                {open && (
                    <div ref={refs.setFloating} {...getFloatingProps()} style={floatingStyles}>
                        <FloatingBox
                            className="w-[40rem] h-[19rem] origin-top-right relative z-[1]"
                            style={transitionStyles}
                        >
                            <div
                                ref={refArrow}
                                style={{ position: "absolute", left: middlewareData.arrow?.x }}
                                className="after:absolute after:z-[-1] after:h-15 after:w-15 after:bg-white after:rotate-[45deg] after:translate-x-[-50%]"
                            ></div>
                            {/* img */}
                            <div className="h-full flex justify-center items-center">
                                <div className="text-center flex flex-col">
                                    <img
                                        className="ml-5"
                                        width={110}
                                        src={imgNoProduct}
                                        alt="anh khi khong co san pham"
                                    />
                                    <span className="text-primaryColor">Chưa có sản phẩm </span>
                                </div>
                            </div>
                        </FloatingBox>
                    </div>
                )}
            </div>
        </>
    );
};

export default CardBadge;
