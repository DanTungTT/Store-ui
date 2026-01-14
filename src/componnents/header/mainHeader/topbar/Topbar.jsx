import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { useAuthenContext } from "~/provider/AuthenProvider";
import useMediaQuery from "~/hooks/projectHooks/useMediaQuery";
import DownAppWrapper from "./ downApp/DownAppWrapper";
import NotificationWrapper from "./notification/NotificationWrapper";
import LanguagesWrapper from "./languages/LanguagesWrapper";
import Menu from "./Menu";
import Avatar from "./Avatar";

import styles from "./topbar.module.css";
import { UseIcon, faFacebook, faInstagram, faCircleQuestion, faList } from "~/assets/icon";

const Topbar = () => {
    const { isAuthen } = useAuthenContext();
    const [openMenu, setOpenMenu] = useState(false);
    const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1024px)");
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    useEffect(() => {
        return () => setOpenMenu(false);
    }, [isTablet]);
    return (
        <>
            <nav
                className={clsx(
                    styles["header-topbar"],
                    "flex justify-between items-baseline leading-[var(--base-lineHeight-)]",
                )}
            >
                {/* menu tablet */}
                {isTablet && (
                    <div onClick={() => setOpenMenu(!openMenu)}>
                        <UseIcon icon={faList} />
                    </div>
                )}
                {isTablet && openMenu && (
                    <>
                        <Menu setOpenMenu={setOpenMenu} openMenu={openMenu}></Menu>
                    </>
                )}

                {isDesktop && (
                    <ul className={clsx(styles["header__topbar-left"], " flex relative ")}>
                        {/* kenh nguoi ban */}
                        <li>
                            <span>
                                <Link to="/sellerChannel">Kênh người bán</Link>
                            </span>
                        </li>
                        {/* tro thanh nguoi ban */}
                        <li>
                            <span>
                                <Link to="/becomeASeller">Trờ thành người bán</Link>
                            </span>
                        </li>

                        {/* tai ung dung */}
                        <DownAppWrapper />

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
                )}
                {/* header__navbar-right */}
                <ul className="header__navbar-right  hidden xl:flex lg:flex md:flex sm:flex ">
                    {/*notification */}
                    <NotificationWrapper />

                    {/* support */}
                    <li>
                        <Link to="/support">
                            <span>
                                <UseIcon icon={faCircleQuestion} />
                                Hỗ trợ
                            </span>
                        </Link>
                    </li>

                    {/* languages */}
                    <LanguagesWrapper />
                    {isAuthen ? (
                        <Avatar />
                    ) : (
                        <>
                            <li>
                                <Link to="/register">
                                    <span>Đăng ký</span>
                                </Link>
                            </li>
                            <li className={clsx(styles.spacing, "relative")}>
                                <Link to="/login">
                                    <span>Đăng nhập</span>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>
    );
};
export default Topbar;
