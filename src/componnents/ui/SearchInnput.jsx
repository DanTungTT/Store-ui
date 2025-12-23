import clsx from "clsx";
import { UseIcon, faMagnifyingGlass } from "~/assets/icon";
const SearchInput = ({ placeholder, className }) => {
    return (
        <>
            <div className={clsx(className, "bg-white flex rounded-xl")}>
                <input
                    type="text"
                    placeholder={placeholder}
                    className="flex-1 text-[var(--primary-textColor-)]  pl-10 placeholder:text-[100%] placeholder:text-[#818080] outline-none"
                    name="searchInput"
                />
                <div className="px-[1%] flex justify-center items-center">
                    <UseIcon
                        className=" px-[30%] py-[30%]  bg-[var(--primary-color-)] rounded-2xl  text-white hover:bg-[#cb4226]"
                        icon={faMagnifyingGlass}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchInput;
