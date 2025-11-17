import { Link } from "react-router-dom";
import { useContext } from "react";
import clsx from "clsx";

import { Logo } from "~/componnents/logo";
import { InforDashboard } from "~/pages";

import styles from "./headerDashboard.module.css";

const HeaderDashboard = () => {
    const infor = useContext(InforDashboard);
    return (
        <>
            <header className={styles.headerDashboard}>
                <div className={styles["headerDashboard-wrapper"]}>
                    <div className="flex justify-between p-5">
                        <div className="headerDashLogo flex items-center m-1">
                            <Link to="/">
                                <Logo />
                            </Link>
                            <h1 className="header-title text-[2.5rem]/[3rem] ml-6">{infor?.title}</h1>
                        </div>
                        <div className="headerDashHelp flex items-center">
                            <a href="#" className="text-[var(--primary-color-)]">
                                Bạn cần giúp đỡ?
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default HeaderDashboard;
