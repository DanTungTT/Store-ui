import useHoverFloating from "~/hooks/floatingUi/useHoverFloating";
import DownAppFloating from "./DownAppFloating";

const DownAppWrapper = () => {
    // effect hover downApp
    const { open, refs, floatingStyles, getReferenceProps, getFloatingProps } = useHoverFloating();
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
