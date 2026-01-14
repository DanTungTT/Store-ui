import useHoverFloating from "~/hooks/floatingUi/useHoverFloating";
import DownAppFloating from "./DownAppFloating";
import { autoPlacement, offset } from "@floating-ui/react";

const DownAppWrapper = () => {
    // effect hover downApp
    const { open, refs, floatingStyles, getReferenceProps, getFloatingProps } = useHoverFloating({
        optionsFloating: {
            strategy: "fixed",
            middleware: [offset({ mainAxis: 10 }), autoPlacement()],
        },
    });
    return (
        <>
            <li ref={refs.setReference} {...getReferenceProps()}>
                <span>Tải ứng dụng</span>
                {open && <DownAppFloating ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} />}
            </li>
        </>
    );
};

export default DownAppWrapper;
