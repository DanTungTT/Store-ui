import "./header.css";
import { Logo } from "~/componnents/logo";
import { Link } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";
const Header = () => {
    const headerNavItems = [
        { title: "Kênh người bán", type: "friendChannel" },
        { title: "Trờ thành người bán", type: "becomeASeller" },
    ];
    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <div>
                        <HeaderNavbar>{headerNavItems}</HeaderNavbar>
                        <div>
                            <Link to="/">
                                <div className="header-logo flex items-center">
                                    <Logo />
                                    <span className="text-[2.5rem]/[1.4rem] m-1 font-[fontLogo] ">SupperSeo</span>
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
