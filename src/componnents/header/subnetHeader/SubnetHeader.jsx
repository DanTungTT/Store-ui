import { Link } from "react-router-dom";
import { useContext } from "react";
import clsx from "clsx";

import { Logo } from "~/componnents/logo";
import { InforDashboard } from "~/pages";

import styles from "./subnetHeader.module.css";

const subnetHeader = () => {
    const infor = useContext(InforDashboard);
    return (
        <>
            <header className={styles.subnetHeader}>
                <div className={styles["subnetHeader-wrapper"]}>
                    <div className="flex justify-between p-5">
                        <div className=" flex items-center m-1">
                            <Link to="/">
                                <Logo />
                            </Link>
                            <h1 className="header-title text-[2.5rem]/[3rem] ml-6">{infor?.title}</h1>
                        </div>
                        <div className=" flex items-center">
                            <a href="#" className="text-[var(--primary-color-)]">
                                {infor?.helper || "Bạn cần giúp đỡ?"}
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default subnetHeader;
