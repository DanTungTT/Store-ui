import { Logo } from "~/componnents/logo";
import "./headerDashboard.css";
import { Link } from "react-router-dom";
const HeaderDashboard = () => {
    return (
        <>
            <header className="headerDashboard">
                <div className="headerDashboard-wrapper">
                    <div className="flex justify-between p-5">
                        <div className="headerDashLogo flex items-center m-1">
                            <Link to="/">
                                <Logo />
                            </Link>
                            <h1 className="header-title text-[2.5rem]/[3rem] ml-6">Kênh người bán</h1>
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
