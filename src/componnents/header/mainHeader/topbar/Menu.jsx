import clsx from "clsx";
import { Link } from "react-router-dom";

import { useAuthenContext } from "~/provider/AuthenProvider";

import DownAppWrapper from "./downApp/DownAppWrapper";
import LanguagesWrapper from "./languages/LanguagesWrapper";
import Avatar from "./Avatar";

import styles from "./topbar.module.css";
import { UseIcon, faFacebook, faInstagram, faBell, faCircleQuestion, faXmark } from "~/assets/icon";

const Menu = ({ setOpenMenu, openMenu }) => {
    const { isAuthen } = useAuthenContext();
    return (
        <div className={clsx(styles["header-topbar"], "absolute")}>
            <div
                onClick={() => setOpenMenu(!openMenu)}
                className="bg-[#333232] fixed top-0 bottom-0 left-0 right-0 opacity-60 z-1"
            ></div>
            <div className="   bg-primary fixed left-0 top-0 bottom-0 z-10 ">
                <ul className="p-5 [&>li]:p-5 [&>li]:text-[1.8rem] [&>li]:w-fit mt-10">
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

                    <li className="sm:hidden">
                        <span>
                            <UseIcon icon={faBell} />
                            Thông báo
                        </span>
                    </li>

                    {/* support */}
                    <li className="sm:hidden">
                        <Link to="/support">
                            <span>
                                <UseIcon icon={faCircleQuestion} />
                                Hỗ trợ
                            </span>
                        </Link>
                    </li>

                    {/* languages */}
                    <LanguagesWrapper className="sm:hidden" />

                    {isAuthen ? (
                        <Avatar />
                    ) : (
                        <div className="sm:hidden flex">
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
                        </div>
                    )}
                    <li className="sm:hidden">
                        <span>Giỏ hàng đã thêm</span>
                    </li>
                </ul>
                <div>
                    <UseIcon
                        onClick={() => setOpenMenu(!openMenu)}
                        icon={faXmark}
                        className="text-secondary absolute top-0 right-0 p-3 m-3"
                    />
                </div>
            </div>
        </div>
    );
};

export default Menu;
