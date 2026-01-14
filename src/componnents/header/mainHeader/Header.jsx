import { useState } from "react";
import clsx from "clsx";

import Topbar from "./topbar/Topbar";
import MiddleHeader from "./middleHeader/MiddleHeader";
import styles from "./header.module.css";
const Header = () => {
    return (
        <>
            <header className={clsx(styles.header)}>
                <div className="container-page h-[var(--header-mobileHeight-)] sm:h-[var(--header-height-)]">
                    <div className="h-full xl:h-auto lg:h-auto md:h-auto sm:h-auto">
                        <div>
                            <Topbar />
                        </div>
                        {/* header middle */}
                        <div className="h-full">
                            <MiddleHeader />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;
