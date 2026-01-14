import { Link } from "react-router-dom";

import { Logo } from "~/componnents/logo";
import { useLayoutContext } from "~/provider/LayoutProvider";

const subnetHeader = () => {
    const { titleHeader, titleHelp } = useLayoutContext();
    return (
        <>
            <header className="shadow min-h-[var(--subnetHeader-height-)]">
                <div className="container-page">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-5">
                        <div className=" flex items-center m-1">
                            <Link to="/">
                                <Logo />
                            </Link>
                            <h1 className="header-title text-[2.5rem]/[3rem] ml-6">{titleHeader}</h1>
                        </div>
                        <div className="justify-items-end sm:justify-items-center">
                            <a href="#" className="block primaryColor">
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
