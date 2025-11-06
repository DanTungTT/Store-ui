import { UseIcon, faEye, faEyeSlash } from "~/assets/icon";
const Input = ({ type = "text", placeholder, className }) => {
    const hiddenPassword = (
        <div className="relative w-[2rem] flex items-center">
            <UseIcon icon={faEye} className="absolute" />
            <UseIcon icon={faEyeSlash} className="absolute" />
        </div>
    );
    return (
        <>
            <div className="flex border border-[#c7c7c7] p-3 my-10 rounded has-[input:focus]:shadow-[0rem_0rem_.2rem_#333]">
                <input className={className} type={type} placeholder={placeholder} />
                {type === "password" && hiddenPassword}
            </div>
        </>
    );
};
export default Input;
