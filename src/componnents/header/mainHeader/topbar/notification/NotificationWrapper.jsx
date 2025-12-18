import { useRef } from "react";
import { useHoverFloating } from "~/hooks/floatingUi";
import { arrow, offset } from "@floating-ui/react";

import NotificationFloating from "./NotificationFloating";
import { UseIcon, faBell } from "~/assets/icon";
import clsx from "clsx";
const NotificationWrapper = () => {
    const refArrow = useRef(null);

    // effect hover noti
    const { open, refs, floatingStyles, getReferenceProps, getFloatingProps, middlewareData, transitionStyles } =
        useHoverFloating({
            optionsFloating: {
                staytegy: "fixed",
                middleware: [offset({ mainAxis: 10, crossAxis: -150 }), arrow({ element: refArrow })],
            },
            optionsTransitionStyles: {
                duration: 250,
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
            <li ref={refs.setReference} {...getReferenceProps()}>
                <span>
                    <UseIcon icon={faBell} />
                    Thông báo
                </span>
                {/* floating element */}
                {open && (
                    <div ref={refs.setFloating} style={floatingStyles}>
                        <NotificationFloating
                            ref={refArrow}
                            middlewareData={middlewareData}
                            {...getFloatingProps()}
                            style={{
                                ...transitionStyles,
                            }}
                            className={clsx(
                                "origin-top-right w-[42rem] h-[40rem] bg-white rounded shadow-[0_0_.2rem_#333]",
                            )}
                        />
                    </div>
                )}
            </li>
        </>
    );
};

export default NotificationWrapper;
