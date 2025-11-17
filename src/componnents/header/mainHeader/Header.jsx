import { Link } from "react-router-dom";
import clsx from "clsx";

import { Logo } from "~/componnents/logo";
import HeaderNavbar from "./HeaderNavbar";

import styles from "./header.module.css";

const Header = () => {
    const headerNavItems = [
        { title: "Kênh người bán", type: "friendChannel" },
        { title: "Trờ thành người bán", type: "becomeASeller" },
    ];
    return (
        <>
            <header className={styles.header}>
                <div className={styles["header-wrapper"]}>
                    <div>
                        <HeaderNavbar>{headerNavItems}</HeaderNavbar>
                        <div>
                            <Link to="/">
                                <div className="flex items-center">
                                    <Logo />
                                    <span className={clsx(styles.fontLogo, "text-[2.5rem]/[1.4rem] m-1")}>SEO</span>
                                </div>
                            </Link>
                            <div className="header-pages">
                                <ul className="header-list"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;
