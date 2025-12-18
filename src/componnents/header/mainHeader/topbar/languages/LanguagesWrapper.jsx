import { useRef } from "react";
import { useHoverFloating } from "~/hooks/floatingUi";
import LanguagesFloating from "./LanguagesFloating";
import { UseIcon, faGlobe, faAngleDown } from "~/assets/icon";
import { arrow, offset } from "@floating-ui/react";
const LanguagesWrapper = () => {
    const refArrow = useRef(null);
    const { open, refs, floatingStyles, getReferenceProps, getFloatingProps, transitionStyles, middlewareData } =
        useHoverFloating({
            optionsFloating: {
                middleware: [offset({ mainAxis: 10, crossAxis: -20 }), arrow({ element: refArrow })],
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
            <li>
                <span {...getReferenceProps()} ref={refs.setReference}>
                    <UseIcon icon={faGlobe} />
                    Tiếng Việt
                    <UseIcon icon={faAngleDown} />
                </span>
                {open && (
                    <div ref={refs.setFloating} style={floatingStyles}>
                        <LanguagesFloating
                            middlewareData={middlewareData}
                            ref={refArrow}
                            style={{ ...transitionStyles }}
                            {...getFloatingProps()}
                            className="origin-top-right w-[20rem] z-[1] relative"
                        />
                    </div>
                )}
            </li>
        </>
    );
};

export default LanguagesWrapper;
