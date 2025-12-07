import { Link } from "react-router-dom";
import clsx from "clsx";

import DownAppWrapper from "./ downApp/DownAppWrapper";
import NotificationWrapper from "./notification/NotificationWrapper";

import styles from "./topbar.module.css";
import { UseIcon, faFacebook, faInstagram, faBell, faCircleQuestion, faGlobe, faAngleDown } from "~/assets/icon";

const Topbar = () => {
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
                {/* header__navbar-right */}
                <ul className="header__navbar-right flex ">
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
