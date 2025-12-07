import clsx from "clsx";
import { useLayoutContext } from "~/hooks/projectHooks/useContext";

import { SubnetLayout } from "~/layout";
import { SearchInput } from "~/componnents/ui";

import styles from "./supportPage.module.css";
import { useEffect } from "react";

const SupportPage = () => {
    const { setTitleHeader, setTitleHelp } = useLayoutContext();
    useEffect(() => {
        setTitleHeader("Trung Tâm Trợ Giúp Seo VN");
        setTitleHelp("Seo Policies");
        return () => {
            setTitleHeader("");
            setTitleHelp("");
        };
    }, []);
    return (
        <>
            <SubnetLayout>
                <div className={clsx(styles.search)}>
                    <div className="flex flex-col justify-evenly items-center h-full">
                        {/* greeting */}
                        <div>
                            <h1 className="text-[3.4rem] text-white">Xin chào, Seo có thể giúp gì được cho bạn?</h1>
                        </div>
                        {/* search input */}
                        <div className="bg-white w-[80rem] h-[6rem] flex rounded-xl">
                            <SearchInput
                                placeholder="Nhập từ khóa hoặc nội dụng cần tìm"
                                className=" text-[2.5rem] flex-1 outline-none pl-10 placeholder:text-[2.5rem]"
                            />
                        </div>
                    </div>
                </div>
                <main className={clsx(styles.helpContainer)}></main>
            </SubnetLayout>
        </>
    );
};

export default SupportPage;
