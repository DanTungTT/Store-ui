import { Link } from "react-router-dom";
import clsx from "clsx";

import { Logo } from "~/componnents/logo";
import { SearchInput } from "~/componnents/ui";
import CardBadge from "./CartBadge";

import styles from "../header.module.css";

const MiddleHeader = () => {
    return (
        <>
            <div className="flex justify-evenly items-center mt-3">
                {/* logo */}
                <Link to="/">
                    <div className="flex items-center">
                        <Logo />
                        <span className={clsx(styles.fontLogo, "text-[5rem]/[1.4rem] ml-5 ")}>SEO</span>
                    </div>
                </Link>
                {/* input search */}
                <div>
                    <SearchInput
                        placeholder="Seo bao ship 0đ - Đăng ký ngay!"
                        className="text-[20px] w-[83rem] h-[4rem]"
                    />
                </div>
                {/* shoping card */}
                <CardBadge />
            </div>
        </>
    );
};

export default MiddleHeader;
