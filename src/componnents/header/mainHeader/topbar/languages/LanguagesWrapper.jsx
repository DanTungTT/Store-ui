import { useRef } from "react";
import { useHoverFloating } from "~/hooks/floatingUi";
import LanguagesFloating from "./LanguagesFloating";
import { UseIcon, faGlobe, faAngleDown } from "~/assets/icon";
import { arrow, autoPlacement, offset } from "@floating-ui/react";
const LanguagesWrapper = ({ ...props }) => {
    const { open, refs, floatingStyles, getReferenceProps, getFloatingProps, transitionStyles, middlewareData } =
        useHoverFloating({
            optionsFloating: {
                middleware: [autoPlacement()],
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
            <li {...props}>
                <span {...getReferenceProps()} ref={refs.setReference}>
                    <UseIcon icon={faGlobe} />
                    Tiếng Việt
                    <UseIcon icon={faAngleDown} />
                </span>
                {open && (
                    <div ref={refs.setFloating} style={floatingStyles}>
                        <LanguagesFloating
                            middlewareData={middlewareData}
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
