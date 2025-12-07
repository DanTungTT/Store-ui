import { UseIcon, faMagnifyingGlass } from "~/assets/icon";
const SearchInput = ({ ...props }) => {
    return (
        <>
            <input type="text" {...props} />
            <div className="mt-[5px] mr-[5px]">
                <UseIcon
                    className="px-13 py-6 bg-[var(--primary-color-)] rounded text-[2rem] text-white hover:bg-[#cb4226]"
                    icon={faMagnifyingGlass}
                />
            </div>
        </>
    );
};

export default SearchInput;
