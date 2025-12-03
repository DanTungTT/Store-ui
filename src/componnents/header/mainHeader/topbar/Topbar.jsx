import { Link } from "react-router-dom";
import clsx from "clsx";
import { useRef } from "react";
import { arrow, offset } from "@floating-ui/react";

import DownApp from "./DownApp";
import Noti from "./Notification";
import useHoverFloating from "~/hooks/floatingUi/useHoverFloating";

import styles from "./topbar.module.css";
import { UseIcon, faFacebook, faInstagram, faBell, faCircleQuestion, faGlobe, faAngleDown } from "~/assets/icon";

const Topbar = () => {
    const refArrow = useRef(null);
    // effect hover downApp
    const downAppReturn = useHoverFloating({ strategy: "fixed" });

    // effect hover noti
    const notificationReturn = useHoverFloating({
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
            <nav className={clsx(styles["header-navbar"], "flex justify-between leading-[var(--base-lineHeight-)]")}>
                <ul className={clsx(styles["header__navbar-left"], "flex relative")}>
                    {/* kenh nguoi ban */}
                    <li>
                        <span>
                            <Link to="/friendChannel">Kênh người bán</Link>
                        </span>
                    </li>
                    {/* tro thanh nguoi ban */}
                    <li>
                        <span>
                            <Link to="/becomeASeller">Trờ thành người bán</Link>
                        </span>
                    </li>
                    {/* tai ung dung */}
                    <li ref={downAppReturn.refs.setReference} {...downAppReturn.getReferenceProps()}>
                        <span>Tải ứng dụng</span>
                    </li>
                    {downAppReturn.open && (
                        <DownApp
                            ref={downAppReturn.refs.setFloating}
                            style={downAppReturn.floatingStyles}
                            {...downAppReturn.getFloatingProps()}
                        />
                    )}
                    {/* ket noi */}
                    <li className="flex items-center">
                        <div>Kết nối</div>
                        <div className="flex items-center ml-1">
                            <span>
                                <a href="https://www.facebook.com/">
                                    <UseIcon icon={faFacebook} className="text-[1.5rem]" />
                                </a>
                            </span>
                            <span>
                                <a href="https://www.instagram.com/">
                                    <UseIcon icon={faInstagram} className="text-[1.5rem]" />
                                </a>
                            </span>
                        </div>
                    </li>
                </ul>
                {/* header__navbar-right */}
                <ul className="header__navbar-right flex ">
                    <li
                        className="relative"
                        ref={notificationReturn.refs.setReference}
                        {...notificationReturn.getReferenceProps()}
                    >
                        <span>
                            <UseIcon icon={faBell} />
                            Thông báo
                        </span>
                        {/* floating element */}
                        {notificationReturn.open && (
                            <Noti
                                ref={refArrow}
                                refFloating={notificationReturn.refs.setFloating}
                                middlewareData={notificationReturn.middlewareData}
                                {...notificationReturn.getFloatingProps()}
                                style={{
                                    ...notificationReturn.floatingStyles,
                                    ...notificationReturn.styles,
                                    transform: `${notificationReturn.floatingStyles.transform} ${notificationReturn.styles.transform}`,
                                }}
                                className="w-[42rem] h-[40rem] bg-white rounded shadow-[0_0_.2rem_#333] origin-top-right"
                            />
                        )}
                    </li>
                    <li>
                        <span>
                            <UseIcon icon={faCircleQuestion} />
                            Hỗ trợ
                        </span>
                    </li>
                    <li>
                        <span>
                            <UseIcon icon={faGlobe} />
                            Tiếng Việt
                            <UseIcon icon={faAngleDown} />
                        </span>
                    </li>
                    <li>
                        <span>Đăng ký</span>
                    </li>
                    <li className={clsx(styles.spacing, "relative")}>
                        <span>Đăng nhập</span>
                    </li>
                </ul>
            </nav>
        </>
    );
};
export default Topbar;
