import { Link } from "react-router-dom";

import { Logo } from "~/componnents/logo";
import { useLayoutContext } from "~/provider/LayoutProvider";

import styles from "./subnetHeader.module.css";

const subnetHeader = () => {
    const { titleHeader, titleHelp } = useLayoutContext();
    return (
        <>
            <header className={styles.subnetHeader}>
                <div className={styles["subnetHeader-wrapper"]}>
                    <div className="flex justify-between p-5">
                        <div className=" flex items-center m-1">
                            <Link to="/">
                                <Logo />
                            </Link>
                            <h1 className="header-title text-[2.5rem]/[3rem] ml-6">{titleHeader}</h1>
                        </div>
                        <div className=" flex items-center">
                            <a href="#" className="block text-[var(--primary-color-)]">
                                {titleHelp}
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default subnetHeader;
