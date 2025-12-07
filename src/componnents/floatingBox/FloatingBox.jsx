import clsx from "clsx";

const FloatingBox = ({ children, className, ...props }) => {
    return (
        <>
            <div {...props} className={clsx(className || "", "bg-white rounded shadow-[0_0_.2rem_#333]")}>
                {children}
            </div>
        </>
    );
};

export default FloatingBox;
