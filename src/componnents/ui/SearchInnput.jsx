import clsx from "clsx";
import { UseIcon, faMagnifyingGlass } from "~/assets/icon";
const SearchInput = ({ placeholder, className, styles }) => {
    return (
        <>
            <div style={styles} className={clsx(className, "bg-white flex")}>
                <input
                    type="text"
                    placeholder={placeholder}
                    className="flex-1 text-primaryColor  pl-4 placeholder:text-[100%] placeholder:text-[#818080] outline-none sm:pl-5 md:pl-10"
                    name="searchInput"
                />
                <div className="m-2 flex justify-center items-center">
                    <UseIcon
                        className="md:mx-1 sm:mx-1   sm:p-[25%] px-[30%] py-[30%]  bg-primary   text-white hover:bg-[#cb4226]"
                        icon={faMagnifyingGlass}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchInput;
