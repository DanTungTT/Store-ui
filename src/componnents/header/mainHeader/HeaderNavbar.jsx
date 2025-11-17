import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./headerNavbar.module.css";
import { UseIcon, faFacebook, faInstagram } from "~/assets/icon";

const HeaderNavbar = ({ children }) => {
    const appConects = [
        {
            icon: faFacebook,
            link: "https://www.facebook.com/",
        },
        {
            icon: faInstagram,
            link: "https://www.instagram.com/",
        },
    ];
    return (
        <>
            <nav className={clsx(styles["header-navbar"], "flex justify-between leading-[var(--base-lineHeight-)]")}>
                <ul className={clsx(styles["header__navbar-left"], "flex")}>
                    {children.map((navbarItem, index) => {
                        if (navbarItem.type) {
                            return (
                                <li key={index}>
                                    <Link to={`/${navbarItem.type}`}>{navbarItem.title}</Link>
                                </li>
                            );
                        }
                        return <li key={index}>{navbarItem.title}</li>;
                    })}
                    <li>Tải ứng dụng</li>
                    <li className="flex items-center">
                        <span>Kết nối</span>
                        <span className="flex items-center ml-1">
                            {appConects.map((Element, index) => (
                                <a href={Element.link} key={index}>
                                    <UseIcon icon={Element.icon} />
                                </a>
                            ))}
                        </span>
                    </li>
                </ul>
                <ul className="header__navbar-right flex ">
                    <li>Thông báo</li>
                    <li>Hỗ trợ</li>
                    <li>Tiếng Việt</li>
                    <li>Đăng ký</li>
                    <li>Đăng nhập</li>
                </ul>
            </nav>
        </>
    );
};
export default HeaderNavbar;
