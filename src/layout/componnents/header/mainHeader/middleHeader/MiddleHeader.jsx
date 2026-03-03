import { Link } from "react-router-dom";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { useClickFloating } from "~/hooks/floatingUi";
import useMediaQuery from "~/hooks/projectHooks/useMediaQuery";
import { Logo } from "~/componnents/logo";
import Menu from "../topbar/Menu";
import { SearchInput } from "~/componnents/ui";
import CardBadge from "./CartBadge";

import styles from "../header.module.css";
import { UseIcon, faList, faMagnifyingGlass } from "~/assets/icon";

const MiddleHeader = () => {
    // const categories = api("\categories");
    const { open, refs, floatingStyles, getReferenceProps, getFloatingProps, transitionStyles } = useClickFloating({
        optionsFloating: {
            strategy: "absolute",
        },
        optionsTransitionStyles: {
            duration: 250,
            initial: {
                opacity: 0,
                transform: "translateY(-50px)",
            },
            open: {
                opacity: 1,
                transform: "translateY(11px)",
            },
            close: {
                opacity: 0,
                transform: "translateY(100px)",
            },
        },
    });
    const [openMenu, setOpenMenu] = useState(false);
    const isMobile = useMediaQuery("(max-width: 640px");
    useEffect(() => {
        return () => setOpenMenu(false);
    }, [isMobile]);
    return (
        <>
            <div className="flex justify-evenly items-center mt-3 h-full">
                {/* logo */}
                <Link to="/">
                    <div className="flex items-center">
                        <Logo />
                        <span
                            className={clsx(
                                styles.fontLogo,
                                "text-[1.5rem]/[1.4rem] ml-5 hidden sm:text-[4rem]/[1rem] sm:block",
                            )}
                        >
                            SEO
                        </span>
                    </div>
                </Link>
                {/* input search */}
                <div className=" hidden flex-col mt-[1.6rem] xl:w-[83rem] xl:flex lg:w-[70rem] lg:flex md:w-[50rem] md:flex sm:w-[35rem] sm:flex">
                    <SearchInput
                        placeholder="Seo bao ship 0đ - Đăng ký ngay!"
                        className="text-[20px] w-full h-[4rem]"
                    />
                    {/* <div className="w-full h-[1rem]">
                        <ul className="flex left-1/2 max-w-full truncate">
                            {categories &&
                                categories.map((category, index) => {
                                    return (
                                        <li key={category.id} className="text-secondaryColor px-5 py-1 cursor-pointer">
                                            {category.name}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div> */}
                </div>
                {/* shoping card */}
                <div className="sm:hidden " ref={refs.setReference} {...getReferenceProps()}>
                    <UseIcon icon={faMagnifyingGlass} className="text-[3.1rem]" />
                </div>
                {open && (
                    <div
                        ref={refs.setFloating}
                        {...getFloatingProps}
                        style={{ ...floatingStyles }}
                        className="sm:hidden "
                    >
                        <SearchInput
                            styles={{ ...transitionStyles }}
                            {...getFloatingProps()}
                            placeholder="Seo bao ship 0đ - Đăng ký ngay!"
                            className="text-[2rem] min-w-full h-[4rem] border border-[#333]"
                        />
                    </div>
                )}
                <div className="block sm:hidden p-0 m-0">
                    <UseIcon icon={faList} onClick={() => setOpenMenu(!openMenu)} className="text-[3rem]" />
                </div>
                {isMobile && openMenu && (
                    <>
                        <Menu setOpenMenu={setOpenMenu} openMenu={openMenu}></Menu>
                    </>
                )}
                <CardBadge className="mt-5 hidden sm:block" />
            </div>
        </>
    );
};

export default MiddleHeader;
