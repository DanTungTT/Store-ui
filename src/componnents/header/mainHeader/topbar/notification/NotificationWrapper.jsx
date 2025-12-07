import { useRef } from "react";
import { useHoverFloating } from "~/hooks/floatingUi";
import { offset, arrow } from "~/hooks/floatingUi";

import NotificationFloating from "./NotificationFloating";
import { UseIcon, faBell } from "~/assets/icon";
const NotificationWrapper = () => {
    const refArrow = useRef(null);

    // effect hover noti
    const { open, refs, floatingStyles, getReferenceProps, getFloatingProps, middlewareData, transitionStyles } =
        useHoverFloating({
            optionsFloating: {
                strategy: "absolute",
                middleware: [offset({ mainAxis: 10, crossAxis: -150 }), arrow({ element: refArrow })],
            },
            optionsTransitionStyles: {
                duration: 200,
                initial: {
                    transform: "scale(0) translate(100px, 100px)",
                },
                open: {
                    transform: "scale(1)",
                },
                close: {
                    transform: "scale(0)",
                },
            },
        });
    return (
        <>
            <li className="relative" ref={refs.setReference} {...getReferenceProps()}>
                <span>
                    <UseIcon icon={faBell} />
                    Thông báo
                </span>
                {/* floating element */}
                {open && (
                    <NotificationFloating
                        ref={refArrow}
                        refFloating={refs.setFloating}
                        middlewareData={middlewareData}
                        {...getFloatingProps()}
                        style={{
                            ...floatingStyles,
                            ...transitionStyles,
                            transform: `${floatingStyles.transform} ${transitionStyles.transform}`,
                        }}
                        className="w-[42rem] h-[40rem] bg-white rounded shadow-[0_0_.2rem_#333] origin-top-right"
                    />
                )}
            </li>
        </>
    );
};

export default NotificationWrapper;
